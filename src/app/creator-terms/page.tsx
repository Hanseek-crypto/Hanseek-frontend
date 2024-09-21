"use client";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { LongOrangeButton } from "@/components/base/LongOrangeButton";
import { useRouter } from "next/navigation";
import { signContract } from "@/lib/sign/sign-contract";
// import { useGetSigner } from "@/lib/sign/useGetSigner";
import Modal from "@/components/common/Modal";
import colors from "@/styles/color";
import Image from "next/image";

export default function CreatorTerms() {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  // 체크박스 상태를 변경하는 함수
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked); // 체크 여부에 따라 상태 업데이트
  };

  // const getSigner = useGetSigner();
  /**
   * Sign Contract
   * 1. Sign on Metamask -> 2. Open Covered Modal
   */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSignContract = async () => {
    // const signer = await getSigner();
    // await signContract(
    //   signer,
    //   "0x3F233a18310c563270C3f8C6E9759b5f32FF4E08", // TODO: Insurer wallet address
    //   "Premium"
    // );
    setIsModalOpen(true);
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
    router.push("/home");
  };

  return (
    <>
      <Container>
        {/* <Modal onClose={onCloseModal} isOpen={isModalOpen}>
          <ModalContainer>
            <img width={136} src="/images/vb_you_covered.png" />
            <h1>{"You've Covered!"}</h1>
            <h3>Start your safe journey now.</h3>
            <LongOrangeButton onClick={onCloseModal}>
              Go to Homepage
            </LongOrangeButton>
          </ModalContainer>
        </Modal> */}
        <Image
          src="/images/hs_terms.svg"
          width={720}
          height={656}
          alt="terms"
        />
        <FooterWrapper>
          <CheckboxWrapper>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{ width: "24px", height: "24px", margin: "0 8px 0 2px" }}
            />
            <p>I agree to the terms and rewards</p>
          </CheckboxWrapper>
          <LongOrangeButton
            active={isChecked}
            onClick={() => router.push("/creator")}
          >
            {"Let's Go to Upload"}
          </LongOrangeButton>
        </FooterWrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto; /* 부모 요소가 스크롤을 허용하도록 설정 */
  padding: 0px 24px 0px 24px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 16px 0;
  & > h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 4px;
  }
  & > h3 {
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

const CheckboxWrapper = styled.label`
  font-family: SFPro;
  font-weight: 400; //Regular
  font-size: 17px;
  line-height: auto;
  color: ${colors.black};

  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

const FooterWrapper = styled.div`
  width: 100%;
  padding: 0px 24px 24px 24px;
  position: fixed;
  z-index: 10;

  bottom: 0px;
  left: 0px;
`;
