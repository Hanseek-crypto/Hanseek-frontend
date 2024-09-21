"use client";

import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HomeSearchBar from "@/components/common/HomeSearchBar";
import CldVideoPlayer from "@/components/CldVideoPlayer";
import InteractionButtons from "./InteractionButtons";
import InfoTab from "./InfoTab";
import SlideUpModal from "@/components/base/SlideUpModal";
import CalendarInput from "@/components/base/CalendarInput";
import Modal from "@/components/common/Modal";
import { Heading2 } from "@/styles/texts";

export default function Home() {
  const [isSlideUpModalOpen, setIsSlideUpModalOpen] = useState(false);
  const [isDepositPopUpModalOpen, setIsDepositPopUpModalOpen] = useState(false);
  const [isCompletePopUpModalOpen, setIsCompletePopUpModalOpen] =
    useState(false);
  const [isPersonClicked, setIsPersonClicked] = useState(false);
  const [isTimeClicked, setIsTimeClicked] = useState(false);
  const [isGoDown, setIsGoDown] = useState(false);

  const router = useRouter();

  return (
    <>
      <Container>
        <HomeSearchBar />
        <VideoContainer isGoDown={isGoDown}>
          <CldVideoPlayer
            width="768"
            height="1024"
            src="rest_5_doizt5"
            logo={{
              imageUrl: "/images/hs_favicon.png",
            }}
            autoplay={true}
            sourceTypes={["hls"]}
            transformation={{
              streaming_profile: "hd",
            }}
          />
          <CldVideoPlayer
            width="768"
            height="1024"
            src="rest_4_q5pone"
            logo={{
              imageUrl: "/images/hs_favicon.png",
            }}
            autoplay={true}
            sourceTypes={["hls"]}
            transformation={{
              streaming_profile: "hd",
            }}
          />
        </VideoContainer>
        <div style={{ width: "100%", height: "50%" }}>
          <InteractionButtons />
          <InfoTab
            handleOpenSlideUpModal={() => setIsSlideUpModalOpen(true)}
            isGoDown={isGoDown}
          />
        </div>

        <Image
          src="/images/hs_updown.png"
          alt="up down"
          width={80}
          height={136}
          onClick={() => setIsGoDown(!isGoDown)}
          style={{
            position: "absolute",
            bottom: "100px",
            right: "4px",
            cursor: "pointer",
          }}
        />
      </Container>
      <SlideUpModal
        isOpen={isSlideUpModalOpen}
        onClose={() => setIsSlideUpModalOpen(false)}
        buttonText="Reserve now"
        buttonOnClick={() => setIsDepositPopUpModalOpen(true)}
        buttonActive={isPersonClicked && isTimeClicked}
      >
        <Heading2
          style={{ width: "100%", textAlign: "center", marginTop: "28px" }}
        >
          Book a reservation
        </Heading2>
        <Image
          src="/images/hs_reservation_when.svg"
          alt={"reservation when"}
          width={720}
          height={32}
          style={{ marginTop: "33px" }}
        />
        <CalendarInput margin="16px 0 38px 0" />
        <Image
          src={
            isPersonClicked
              ? "/images/hs_reservation_person_active.svg"
              : "/images/hs_reservation_person_inactive.svg"
          }
          alt="person"
          width={537}
          height={72}
          onClick={() => setIsPersonClicked(!isPersonClicked)}
          style={{ cursor: "pointer" }}
        />
        <Image
          src={
            isTimeClicked
              ? "/images/hs_reservation_time_active.svg"
              : "/images/hs_reservation_time_inactive.svg"
          }
          alt="time"
          width={720}
          height={128}
          style={{ margin: "32px 0 51px 0", cursor: "pointer" }}
          onClick={() => setIsTimeClicked(!isTimeClicked)}
        />
      </SlideUpModal>

      <Modal
        onClose={() => setIsDepositPopUpModalOpen(false)}
        isOpen={isDepositPopUpModalOpen}
        description="The reservation will be confirmed once the deposit is paid."
        buttonText={"Payment"}
        buttonOnClick={() => {
          setIsDepositPopUpModalOpen(false);
          setIsCompletePopUpModalOpen(true);
        }}
      >
        <Image
          src="/images/hs_reservation_detail.svg"
          alt="reservation detail"
          width={512}
          height={224}
        />
      </Modal>
      <Modal
        onClose={() => setIsCompletePopUpModalOpen(false)}
        isOpen={isCompletePopUpModalOpen}
        description="Can’t wait for your visit./The creator earned a reward for helping you discover this restaurant!"
        buttonText={"Go to My Page"}
        buttonOnClick={() => {
          router.push("/mypage");
        }}
        title="Your reservation is all set!"
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Image
            src="/images/hs_payment_complete.svg"
            alt="payment complete"
            width={136}
            height={147}
            style={{ marginBottom: "16px" }}
          />
        </div>
      </Modal>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 200%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoContainer = styled.div<{ isGoDown: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  transform: ${({ isGoDown }) => (isGoDown ? "translateY(-50%)" : "none")};
`;
