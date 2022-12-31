import { useState } from "react";

export default function ForgotPassword() {
  const [userData, setUserData] = useState({
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  return (
    <>
      {/* Container */}
      <div className="flex align-middle min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full mt-36 max-w-md space-y-8">
          <div className="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-4 text-center">
              <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
              <p className="mb-4 text-sm text-gray-700">
                We get it, stuff happens. Just enter your email address below
                and we'll send you a link to reset your password!
              </p>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter Email Address..."
                  value={userData.email}
                  onChange={(event) => {
                    setUserData({
                      ...userData,
                      email: event.target.value,
                    });
                  }}
                />
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2  text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Reset Password
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="/register"
                >
                  Create an Account!
                </a>
              </div>
              <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="/login"
                >
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
