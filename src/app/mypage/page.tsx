"use client";

import styled, { keyframes } from "styled-components";
import Footer from "@/layout/Footer";
import Image from "next/image";
import MyPageTab from "@/components/common/MypageTab";
import { useState, useEffect } from "react";
import CldVideoPlayer from "@/components/CldVideoPlayer";

interface MyProfile {
  title: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("Videos");

  const resetCoins = () => {
    localStorage.setItem("totalCoins", "99.9");
    window.location.reload();
  };
  return (
    <div className="bg-white">
      <nav className="flex items-center p-6 space-x-4 justify-end">
        <Image
          className=""
          src="\images\bell_icon.svg"
          alt="bell icon"
          width={24}
          height={24}
        />
        <Image
          className=""
          src="\images\system_icon.svg"
          alt="system icon"
          width={24}
          height={24}
          onClick={resetCoins}
        />
      </nav>
      <Profile title="Stella.leeee" />
      <MyPageTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <WithdrawBar />
      <Footer />
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Profile = ({ title }: MyProfile) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="rounded-full"
        src="/images/profile_image.png"
        alt="mypage_profile"
        width={100}
        height={100}
      />
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <div className="flex mt-2">
        <Image
          className="mr-1"
          src="/images/user_check.svg"
          alt="user_check"
          width={18}
          height={18}
        />
        <p>
          Following <strong>210K</strong>
        </p>
        <Image
          className="ml-4 mr-1"
          src="/images/users.svg"
          alt="users"
          width={18}
          height={18}
        />
        <p>
          Follow <strong>456K</strong>
        </p>
      </div>
    </div>
  );
};

const WithdrawBar = () => {
  const [coins, setCoins] = useState<number>(99.0);
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const storedCoins = localStorage.getItem("totalCoins");
    const storedViews = localStorage.getItem("totalViews");

    if (storedCoins) {
      setCoins(parseFloat(storedCoins));
    }
    if (storedViews) {
      setViews(parseInt(storedViews, 10));
    }

    if (views > 0 && views % 100 === 0) {
      const newCoinsValue = (coins + 0.1).toFixed(2);
      setCoins(parseFloat(newCoinsValue));
      localStorage.setItem("totalCoins", newCoinsValue);
    }

    localStorage.setItem("totalViews", views.toString());
  }, [views, coins]);

  const handleVideoPlay = () => {
    setViews((prevViews) => prevViews + 1);
  };

  return (
    <div className="w-[688px] h-[68px] fixed bottom-32 left-11 z-50">
      <div className="flex flex-col items-left bg-[#FAFAFB] p-4 w-full max-w-4xl">
        <p className="ml-3 p-1 flex flex-row text-[#FF5924]">
          {" "}
          <Image
            className="mr-1"
            src="/images/warn_icon.svg"
            alt="Warning icon"
            width={12}
            height={12}
          />{" "}
          Minimum withdrawal amount : 100USDC
        </p>
        <p className="flex flex-row font-medium ml-4 text-xl">
          Total coins accumulated:{" "}
          <Image
            className="ml-2"
            src="images/usdc-icon.svg"
            alt="usdc"
            width={20}
            height={20}
          />{" "}
          <b>{coins.toFixed(2)}</b>
        </p>
        <button
          className={`fixed top-50 right-16 text-xl px-6 py-3 rounded-3xl ${
            coins >= 100
              ? "bg-[#FF5924] text-white hover:bg-orange-500"
              : "bg-gray-300 text-white cursor-not-allowed"
          }`}
          disabled={coins < 100}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

const CreatorBar = () => {
  return (
    <div className="w-[688px] h-[68px] fixed bottom-32 left-11 z-50 flex justify-center">
      <div className="flex flex-row items-center bg-[#FAFAFB] p-6 justify-between w-full max-w-4xl">
        <p className="flex flex-row font-medium ml-4 text-xl">
          Do you want to be a creator?{" "}
          <Image
            className="ml-2"
            src="images/usdc-icon.svg"
            alt="usdc"
            width={20}
            height={20}
          />{" "}
        </p>
        <button className="text-xl justify-end bg-[#FF5924] px-6 py-3 text-white rounded-3xl mr-4 hover:bg-orange-500">
          Withdraw
        </button>
      </div>
    </div>
  );
};
