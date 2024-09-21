import React, { useState, useRef } from "react";
import Image from "next/image";

const VideoContent = ({ coinClick }: { coinClick: number }) => {
  const videos = [
    {
      src: "/videos/video1.mp4",
      click0: "/images/hs_vid1_0.svg",
      click1: "/images/hs_vid1_1.svg",
      click2: "/images/hs_vid1_2.svg",
    },
    {
      src: "/videos/video2.mp4",
      click0: "/images/hs_vid2_0.svg",
      click1: "/images/hs_vid2_1.svg",
      click2: "/images/hs_vid2_2.svg",
    },
    {
      src: "/videos/video3.mp4",
      click0: "/images/hs_vid3_0.svg",
      click1: "/images/hs_vid3_1.svg",
      click2: "/images/hs_vid3_2.svg",
    },
  ];

  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
    null
  );
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const handleVideoClick = (index: number) => {
    if (playingVideoIndex !== null && playingVideoIndex !== index) {
      const currentVideo = videoRefs.current[playingVideoIndex];
      if (currentVideo) {
        currentVideo.pause();
      }
    }

    const clickedVideo = videoRefs.current[index];
    if (clickedVideo) {
      if (playingVideoIndex === index) {
        clickedVideo.pause();
        setPlayingVideoIndex(null);
      } else {
        clickedVideo.play();
        setPlayingVideoIndex(index);
      }
    }
  };

  return (
    <div
      // className="flex flex-row justify-center  place-content-evenly"
      style={{
        display: "flex",
        width: "300",
        padding: "24px",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {videos.map((videoSrc, index) => (
        <div key={index} className="relative">
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className=" cursor-pointer"
            width={235}
            height={299}
            src={videoSrc.src}
            controls={false}
            style={{
              borderRadius: "8px",
              height: "299px", // 추가적인 높이 고정
              objectFit: "cover", // 비디오 콘텐츠가 고정된 크기에 맞게 보이도록 설정
            }}
            autoPlay
          >
            This is a browser that does not support video.
          </video>
          <button
            className="absolute flex justify-center items-center text-white text-3xl"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10, // 비디오 위에 표시되도록 z-index 설정
            }}
            onClick={() => handleVideoClick(index)}
          >
            {/* {playingVideoIndex === index ? (
              <Image
                src="/images/pause_icon.svg"
                alt="pasue"
                width={40}
                height={40}
              />
            ) : (
              <Image
                src="/images/play_icon.svg"
                alt="play"
                width={40}
                height={40}
              />
            )} */}
          </button>
          <Image
            src={
              coinClick === 0
                ? videoSrc.click0
                : coinClick === 1
                ? videoSrc.click1
                : videoSrc.click2
            }
            alt={"vid1-0"}
            width={235}
            height={42}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              zIndex: 10, // 비디오 위에 표시되도록 z-index 설정
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoContent;
