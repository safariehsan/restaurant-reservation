import React from "react";

const Rating = () => {
  return (
    <div className="flex justify-start gap-6">
      <div className="rate flex gap-2">
        <span>*****</span>
        <span>4.5</span>
      </div>
      <div className="reviews flex gap-2">
        <span>icon</span>
        <span>6 reviews</span>
      </div>
    </div>
  );
};

export default Rating;
