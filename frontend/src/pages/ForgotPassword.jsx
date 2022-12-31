import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email);
    axios
      .post("http://localhost:8080/forgot_password", {
        email,
      })
      .then((res) => {
        console.log(res);
        setMessage(res.data.message);
        navigate("/reset_password");
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.msg);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 rounded-lg text-left bg-white shadow-lg">
          <div>
            <img className="mx-auto h-30 w-auto" src="logo.png" />
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Forgot Password
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your Email to generate a token{" "}
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            

            <div className="-space-y-px rounded-md shadow-sm">
              
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email Address"
                onChange={(e) => setemail(e.target.value)}
                value={email}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a
                  href="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Create Account
                </a>
              </div>
              <div className="text-sm">
                <a
                  href="/login"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Login
                </a>
              </div>
            </div>
            <p className="mt-2 text-center text-sm text-red-600">{message} </p>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Generate Token
              </button>
            
            </div>
          </form>
        </div>
      </div>
    </>
  );
}