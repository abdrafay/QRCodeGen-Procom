import { Wallet2 } from "lucide-react";
import React from "react";
import RegisterForm from "./form";

const RegisterPage = () => {
  return <div className="p-5">
    <Logo />
    <h1 className="font-bold text-3xl text-center mt-6">
      Create
      <br />
      <span className="text-cyan-500">Customer Portal</span> account
    </h1>
    <RegisterForm />
  </div>;
};

export default RegisterPage;

const Logo = () => {
  return (
    <h1 className="text-center logo text-2xl flex justify-center gap-2 font-bold items-center">
      <Wallet2 size={28} color="cyan" /> Customer Portal
    </h1>
  );
};
