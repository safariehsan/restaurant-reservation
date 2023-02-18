import React from "react";
import NavBar from "../../components/NavBar";
import Form from "./components/Form";
import Header from "./components/Header";

const Reserve = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-full">
      <NavBar />
      <div className="border-t h-screen bg-white">
        <div className="w-3/5 m-auto py-9">
          <Header />
          <Form />
        </div>
      </div>
    </main>
  );
};

export default Reserve;
