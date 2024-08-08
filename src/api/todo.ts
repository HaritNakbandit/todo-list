import axios from "@/lib/axios";

interface Todo {
  title: string;
  description: string;
  id?: string;
}

export const postCrateTodo = (
  data: Todo,
  setLoading: Function,
  cb?: Function
) => {
  setLoading(true);
  axios
    .post(
      `/todo`,
      {
        title: data?.title,
        description: data?.description,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
    .then((res) => {
      setLoading(false);
      if (typeof cb === "function") {
        cb(res);
      }
    })
    .catch((err) => {
      setLoading(false);
      console.log("error: ", err);
    });
};

export const getTodoList = (setLoading: Function, cb?: Function) => {
  setLoading(true);
  axios
    .get(`/todo`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then((res) => {
      setLoading(false);
      if (typeof cb === "function") {
        cb(res);
      }
    })
    .catch((err) => {
      setLoading(false);
      console.log("error: ", err);
    });
};

export const updateTodo = (data: Todo, setLoading: Function, cb?: Function) => {
  setLoading(true);
  axios
    .patch(
      `/todo/${data?.id}`,
      {
        title: data?.title,
        description: data?.description,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
    .then((res) => {
      setLoading(false);
      if (typeof cb === "function") {
        cb(res);
      }
    })
    .catch((err) => {
      setLoading(false);
      console.log("error: ", err);
    });
};

export const deleteTodo = (id: string, setLoading: Function, cb?: Function) => {
  setLoading(true);
  axios
    .delete(`/todo/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then((res) => {
      setLoading(false);
      if (typeof cb === "function") {
        cb(res);
      }
    })
    .catch((err) => {
      setLoading(false);
      console.log("error: ", err);
    });
};
