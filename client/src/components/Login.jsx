import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-row w-screen">
      <div className="flex w-3/4 items-center justify-center h-screen bg-blue-500 bg-[url('/Ecommerce-campaign-rafiki.svg')] bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col space-y-4 justify-center items-center border-2 rounded-2xl p-4 h-96 bg-white w-80">
          {/* <input
            type="text"
            className="border-2 border-grey rounded-md px-4 py-1"
            placeholder="Username"
          /> */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-grey rounded-md px-4 py-1"
          />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            className="border-2 border-grey rounded-md px-4 py-1"
          />
          <button className="bg-blue-500 text-white rounded-md px-20 py-2 transition-all duration-400 ease-in-out hover:px-24 hover:py-3">
            Login
          </button>
        </div>
      </div>
      <div className="w-1/2 flex item-center">
        <img src="/public/21727022_6505892.svg" alt="" />
      </div>
    </div>
  );
};

export default Login;
