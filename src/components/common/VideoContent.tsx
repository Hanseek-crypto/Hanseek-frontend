import React, { useState, useRef } from "react";
import Image from "next/image";

const VideoContent = () => {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
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
    <div className="flex flex-row justify-center p-4 place-content-evenly">
      {videos.map((videoSrc, index) => (
        <div key={index} className="relative">
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            className="m-2 cursor-pointer"
            width={235}
            height={299}
            src={videoSrc}
            controls={false}
          >
            This is a browser that does not support video.
          </video>
          <button
            className="absolute inset-0 flex justify-center items-center text-white text-3xl"
            onClick={() => handleVideoClick(index)}
          >
            {playingVideoIndex === index ? (
              <Image
                src="/images/pause_icon.svg"
                alt="pasue"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/images/play_icon.svg"
                alt="play"
                width={20}
                height={20}
              />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoContent;
