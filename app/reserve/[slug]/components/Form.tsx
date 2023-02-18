import React from "react";

const Form = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone number"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Ocassion"
      />
      <button className="bg-red-600 text-white w-full rounded py-3">
        Complete reservation
      </button>
      <p className="text-base font-light pt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        consequuntur autem pariatur quos! Explicabo nobis unde suscipit pariatur
        illo dolor quia veniam recusandae sit reprehenderit. Eveniet velit
        laborum enim distinctio.
      </p>
    </div>
  );
};

export default Form;
