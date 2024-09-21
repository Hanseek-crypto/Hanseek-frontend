import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import VideoContent from "./VideoContent";
import Image from "next/image";

export default function MyPageTab({
  activeTab,
  setActiveTab,
  coinClick,
}: {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
  coinClick: number;
}) {
  const ColoredLine = () => (
    <hr className="w-full mt-2 h-1 bg-orange-500 border-none m-0" />
  );

  const tabs = [
    {
      name: "History",
      icon: "/images/history_icon.svg",
      activeIcon: "/images/clicked_history_icon.svg",
    },
    {
      name: "Videos",
      icon: "/images/video.icon.svg",
      activeIcon: "/images/clicked_video_icon.svg",
    },
    {
      name: "Likes",
      icon: "/images/heart_icon.svg",
      activeIcon: "/images/clicked_heart_icon.svg",
    },
    {
      name: "Badge",
      icon: "/images/badge_icon.svg",
      activeIcon: "/images/clicked_badge_icon.svg",
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-center mt-6">
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className={`flex flex-col w-60 ${index === 0 ? "ml-4" : ""} ${
              index === tabs.length - 1 ? "mr-4" : ""
            }`}
          >
            {" "}
            <div className="flex flex-row items-center justify-center">
              <img
                className="mr-2"
                src={activeTab === tab.name ? tab.activeIcon : tab.icon}
                alt={`${tab.name}_icon`}
                width={24}
                height={24}
              />
              <button
                className={`${
                  activeTab === tab.name ? "text-orange-500" : "text-gray-500"
                } font-bold text-lg`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            </div>
            {activeTab === tab.name && <ColoredLine />}
          </div>
        ))}
      </div>

      <div>
        {activeTab === "History" && <HistoryContent />}
        {activeTab === "Videos" && <VideoContent coinClick={coinClick} />}
        {activeTab === "Likes" && <LikesContent />}
        {activeTab === "Badge" && <BadgeContent />}
      </div>
    </>
  );
}

const HistoryContent = () => {
  return (
    <Image
      src={"/images/hs_history.svg"}
      alt="history"
      width={768}
      height={498}
      style={{ cursor: "pointer" }}
    />
  );
};

const LikesContent = () => {
  return (
    <div className="flex flex-row justify-center p-4 place-content-evenly"></div>
  );
};

const BadgeContent = () => {
  return (
    <div style={{ width: "100%", padding: "0px 24px" }}>
      <Image src="/images/hs_badge.svg" alt="badge" width={720} height={564} />
    </div>
  );
};
