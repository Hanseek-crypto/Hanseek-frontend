import { styled } from "styled-components";
import Image from "next/image";
import colors from "@/styles/color";
import { Body1Medium, Body1Regular, Heading3 } from "@/styles/texts";
import { Display } from "phaser";
import { LongOrangeButton } from "@/components/base/LongOrangeButton";

export default function InfoTab({
  handleOpenSlideUpModal,
}: {
  handleOpenSlideUpModal: () => void;
}) {
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/images/hs_rest1_user_profile.svg"
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
          angigez
        </div>
      </div>
      <Body1Regular style={{ color: "white", marginTop: "8px" }}>
        {"I highly recommend this Korean restaurant I"}
        <br /> {"visited through a friend's introduction because..."}
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
            <Heading3>Jangwon Korean Restaurant</Heading3>
            <Image
              src="/images/hs_location_singapore.svg"
              alt="singpore"
              width={90}
              height={18}
              style={{ margin: "6px 0" }}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/images/hs_rating_4stars.svg"
                alt="rating"
                width={88}
                height={16}
              />
              <div
                style={{
                  fontFamily: "Pretendard",
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "rgba(0, 0, 0, 0.68)",
                  margin: "2px 0 0 4px",
                }}
              >
                {"(8101)"}
              </div>
            </div>
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
