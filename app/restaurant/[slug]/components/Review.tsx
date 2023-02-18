import React from "react";

const Review = () => {
  return (
    <div className="border-b pb-7 mb-7 mt-5">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h3 className="text-white text-2xlg">ES</h3>
          </div>
          <p>Ehsan Safari</p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="flex mr-5">*****</div>
          </div>
          <div className="mt-5">
            <p className="text-base font-light">
              At present, Chloelys at The Hilton Tel-Aviv has no reviews. Please
              add a review after your dining experience to help others make a
              decision about where to eat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
