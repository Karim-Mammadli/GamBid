import React, { useState } from "react";
import "./gif.css";

export default function Register() {
    // const [firstName, setfirstName] = useState("");
    // const [lastName, setlastName] = useState("");
    // const [username, setusername] = useState("");
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");
  
    // const [message, setMessage] = useState("");
    // const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     console.log(firstName, lastName, username, email, password);
    //     axios
    //       .post("http://localhost:8080/register", {
    //         firstName,
    //         lastName,
    //         username,
    //         email,
    //         password,
    //       })
    //       .then((res) => {
    //         console.log("Posting data", res);
    //         navigate("/login");
    //       })
    //       .catch((err) => {
    //         // console.log(err);
    //         setMessage(err.response.data.msg);
    //         console.log(err.response.data.msg);
    //       });
        
    //   };

    return (

        
      <>
        
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>

              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Register to GamBid
              </h2>

            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <p className="mt-2 text-center text-sm text-gray-600">
              {/* Enter your Email to recover your password{" "} */}
              <a
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have GamBid account?
              </a>
            </p>
  
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
  
                <div className="text-sm">
                  <a href="/resetPassword" className="font-medium text-green-600 hover:text-green-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span> */}
                  Register
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </>
    )
  }