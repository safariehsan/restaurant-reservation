import React from "react";

const SubTitle = ({children}: any) => {
  return (
    <h3 className="text-md font-semibold pt-3 border-b-2 border-gray-100 pb-2">
      {children}
    </h3>
  );
};

export default SubTitle;
