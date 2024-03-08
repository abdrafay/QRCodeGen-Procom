import { Wallet2 } from "lucide-react";
import React from "react";
import LoginForm from "./form";
import Logo from "@/components/logo";

const LoginPage = () => {
  return <div className="p-5">
    <Logo role="merchant" />
    <h1 className="font-bold text-3xl text-center mt-6">
      Create
      <br />
      <span className="text-purple-500">PayHabib</span> account
    </h1>
    <LoginForm />
  </div>;
};

export default LoginPage;