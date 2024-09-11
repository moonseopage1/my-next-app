import Counter from "@/components/Counter/Counter";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Welcome to Next.js Home Page</h2>
        <p className="text-xl mb-5">React server component</p>
        <Counter />
      </div>
    </div>
  );
};

export default HomePage;
