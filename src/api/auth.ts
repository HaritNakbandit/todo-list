import axios from "@/lib/axios";

interface AuthUser {
  username: string;
  password: string;
}

export const postAuthLogin = (
  data: AuthUser,
  setLoading: Function,
  cb: Function
) => {
  setLoading(true);
  axios
    .post(`/auth/login`, data, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then((res) => {
      setLoading(false);
      cb(res);
    })
    .catch((err) => {
      setLoading(false);
      console.log("error: ", err);
    });
};
