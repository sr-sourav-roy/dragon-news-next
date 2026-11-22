"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (data) => {
    const { name, password, email, photo } = data;
    // call this mongodb
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log(res, error);
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("successfuly register your account?");
    }
  };
  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-8 rounded-xl bg-white">
        <h2 className="font-bold text-2xl text-center p-3 rounded-xs bg-slate-200 mb-5">
          Register your account
        </h2>
        <form onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            {/* name fild */}
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            {/* photo */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
              {...register("photo", { required: "Photo url is required" })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
            {/* email */}
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
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your Password"
              {...register("password", {
                required: "Password is the required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button className="btn btn-neutral mt-4">Register</button>
            <p>
              Already Have An Account??{" "}
              <Link href="/login" className="text-red-500">
                login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
