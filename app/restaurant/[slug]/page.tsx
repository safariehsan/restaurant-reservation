import Link from "next/link";
import React from "react";
import NavBar from "../../components/NavBar";
import Description from "./components/Description";
import Header from "./components/Header";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Review from "./components/Review";
import SubTitle from "./components/SubTitle";
import Title from "./components/Title";

const RestaurantDetail = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-full">
      <NavBar />
      <Header />
      <div className="flex mx-auto flex-row relative -mt-12 container gap-3 px-20">
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
      </div>
    </main>
  );
};

export default RestaurantDetail;
