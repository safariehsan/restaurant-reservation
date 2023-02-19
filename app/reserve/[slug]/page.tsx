import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";

const Reserve = () => {
  return (
    <div className="border-t h-screen bg-white">
      <div className="w-3/5 m-auto py-9">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Reserve;
