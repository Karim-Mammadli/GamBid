import { LockClosedIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [token, settoken] = useState("");
  const [password, setpassword] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/reset_password", {
        password,
        token,
      })
      .then((res) => {
        console.log(res);
        setMessage(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.msg);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{
        backgroundImage: `url("https://animetree.files.wordpress.com/2012/04/highschool-dxd-ending-gif1.gif")` ,
        // https://images.unsplash.com/photo-1538867468559-b14ead85b729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80
        // https://animetree.files.wordpress.com/2012/04/highschool-dxd-ending-gif1.gif
        // https://wallpaperboat.com/wp-content/uploads/2020/03/poker-03-920x518.jpg
    }}>
        <div className="px-8 py-6 mt-4 rounded-lg text-left bg-white shadow-lg" style={{
            // bg-white
            // backgroundImage: `url("https://images.unsplash.com/photo-1538867468559-b14ead85b729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")` 
        }}>
          <div>
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Reset Password
            </h1>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter the token from the email and your new password{" "}
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>


            <div className="-space-y-px rounded-md shadow-sm">
              <input
                id="token"
                name="token"
                type="text"
                autoComplete="token"
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Token"
                onChange={(e) => settoken(e.target.value)}
                value={token}
              />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="New Password"
                onChange={(e) => setpassword(e.target.value)}
                value={password}
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
                Change Password
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}