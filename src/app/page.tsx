"use client";

import { Button, Input, Loading } from "@/components/ui";
import { Formik } from "formik";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import { postAuthLogin } from "../api/auth";
interface AuthUser {
  username: string;
  password: string;
}

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // if (token) {
  //   redirect("/dashboard");
  // }

  const onSubmit = (values: AuthUser) => {
    const callback = (res: any) => {
      localStorage.setItem("token", res?.data?.access_token);
      router.push("/dashboard");
    };
    postAuthLogin(values, setLoading, callback);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24">
      <title>Test Title</title>
      <Loading loading={loading} />
      <div className="h-full w-full  flex justify-center items-center  ">
        <div className="w-[672px] flex flex-col items-center bg-white p-[40px] rounded-[24px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]">
          <p className="text-xl font-semibold	text-[#1D4289] mb-[20px]">
            Sign in to your account
          </p>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string().required("Please specify Username"),
              password: Yup.string().required("Please specify Password"),
            })}
            onSubmit={async (values) => {
              onSubmit(values);
            }}
          >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit} className="w-full">
                <div className={`w-full flex flex-col`}>
                  <Input
                    id="input-username"
                    label="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    error={Boolean(errors.username)}
                    helperText={errors.username}
                  />
                  <Input
                    id="input-password"
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    error={Boolean(errors.password)}
                    helperText={errors.password}
                  />
                </div>
                <Button
                  type="submit"
                  label="Sign in"
                  disabled={isSubmitting}
                  sx={{ marginTop: "10px", width: "100%" }}
                />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
}
