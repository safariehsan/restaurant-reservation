import Link from "next/link";
import React from "react";
import Description from "./components/Description";
import Header from "./components/Header";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Review from "./components/Review";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";
import RestaurantLayout from "./layout";

const RestaurantDetail = () => {
  return (
    <RestaurantLayout>
      <article className="basis-2/3 justify-between items-start bg-white rounded p-3 shadow-lg">
        <RestaurantNavBar />
        <Title />
        <Rating />
        <Description />
        <SubTitle>7 photos</SubTitle>
        <Images />
        <SubTitle>What 100 people said about this restaurant.</SubTitle>
        <Review />
      </article>
      <aside className="basis-1/3 relative">
        <ReservationCard />
      </aside>
    </RestaurantLayout>
  );
};

export default RestaurantDetail;
