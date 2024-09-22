import { styled } from "styled-components";
import Image from "next/image";
import colors from "@/styles/color";
import { Body1Medium, Body1Regular, Heading3 } from "@/styles/texts";
import { Display } from "phaser";
import { LongOrangeButton } from "@/components/base/LongOrangeButton";

export default function InfoTab({
  handleOpenSlideUpModal,
  isGoDown,
}: {
  handleOpenSlideUpModal: () => void;
  isGoDown: boolean;
}) {
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src={
            isGoDown
              ? "/images/hs_profile_tina.svg"
              : "/images/hs_rest1_user_profile.svg"
          }
          alt="user profile"
          width={40}
          height={40}
          style={{ borderRadius: "20px" }}
        />
        <div
          style={{
            fontFamily: "SFPro",
            fontSize: "17px",
            fontWeight: "700",
            color: "white",
            marginLeft: "11px",
          }}
        >
          {isGoDown ? "tina" : "angigez"}
        </div>
      </div>
      <Body1Regular style={{ color: "white", marginTop: "8px" }}>
        {isGoDown
          ? "Steamed Egg was great!!"
          : "I highly recommend this Korean restaurant I"}
        <br />{" "}
        {isGoDown
          ? "I will go tomorrow and tomorrow after tomorrow!!"
          : "visited through a friend's introduction because..."}
      </Body1Regular>
      <Body1Medium style={{ color: "white", margin: "12px 0 24px 0" }}>
        #Singapore #Koreanfood #Restaurant
      </Body1Medium>
      <RestaurantWrapper>
        <Image
          src="/images/hs_rest1_rest.svg"
          alt="rest"
          width={130}
          height={130}
          style={{ marginRight: "10px" }}
        />
        <div
          style={{
            height: "130px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Image
              src="/images/hs_10pc_off.svg"
              alt="10 percent off"
              width={100}
              height={26}
              // style={{ margin: "0 0 6px 0" }}
            />
            <Heading3>Jangwon Korean Restaurant</Heading3>
            <Image
              src="/images/hs_location_singapore.svg"
              alt="singpore"
              width={137}
              height={18}
              style={{ margin: "3px 0 0 0" }}
            />
          </div>

          <OrangeButton onClick={() => handleOpenSlideUpModal()}>
            Reserve
          </OrangeButton>
        </div>
      </RestaurantWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 96px;
  left: 24px;
`;

const RestaurantWrapper = styled.div`
  width: 462px;
  padding: 12px;
  background-color: white;

  border-radius: 8px;

  display: flex;
`;

export const OrangeButton = styled.button`
  width: 140px;
  height: 42px;

  background-color: ${colors.primary};
  color: white;

  font-weight: 600;
  font-size: 15px;
  font-family: SFPro;

  border: none;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.primaryHover};
  }

  &:active {
    background-color: ${colors.primaryActive};
  }
`;
