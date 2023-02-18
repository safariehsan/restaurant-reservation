import React from "react";

const ReservationCard = () => {
  return (
    <div className="sticky top-0 left-0 right-0 bg-white rounded p-3 shadow">
      <div className="border-b mb-2 pb-2">
        <h4 className="mr-7 text-lg font-bold">Make a reservation</h4>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Party size</label>
        <select className="border-b py-3 font-light" name="" id="">
          <option value="">1 person</option>
          <option value="">2 people</option>
          <option value="">3 people</option>
        </select>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex flex-col basis-1/2">
          <label htmlFor="">Date</label>
          <input type="date" className="font-light py-3 border-b w-full" />
        </div>
        <div className="flex flex-col basis-1/2">
          <label htmlFor="">Time</label>
          <select className="font-light py-3 border-b w-full">
            <option value="">07:30 PM</option>
            <option value="">09:30 PM</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button className="bg-red-600 rounded text-white w-full font-semibold py-2">
          Find a time
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;
