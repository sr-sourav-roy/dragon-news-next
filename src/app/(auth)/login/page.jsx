"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    const { email, password } = data;

    // call this mongodb:----------->
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("successfuly login the page");
    }
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-8 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center p-3 rounded-xs bg-slate-200 mb-5">
          Login your account
        </h2>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your Password"
              {...register("password", {
                required: "Password is the required",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <button className="btn btn-neutral mt-4">Login</button>
            <p>
              Don-t Have An Account?{" "}
              <Link href="/register" className="text-red-500">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
