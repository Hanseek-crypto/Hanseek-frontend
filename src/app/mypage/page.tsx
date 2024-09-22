"use client";

import styled, { keyframes } from "styled-components";
import Footer from "@/layout/Footer";
import Image from "next/image";
import MyPageTab from "@/components/common/MypageTab";
import { useState, useEffect, Dispatch, SetStateAction } from "react";
import CldVideoPlayer from "@/components/CldVideoPlayer";
import colors from "@/styles/color";
import { Body2Semibold } from "@/styles/texts";
import SlideUpModal from "@/components/base/SlideUpModal";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { getWeb3Provider, getSigner } from "@dynamic-labs/ethers-v6";
import { ethers, parseEther, Contract } from "ethers";
import WithdrawABI from "../../abis/wtihdraw.json";
import { withdrawAddress } from "@/lib/constants";
import { useRouter } from "next/navigation";
import * as react from "next-auth/react";
import { signIn } from "next-auth/react";

export default function Mypage() {
  const [activeTab, setActiveTab] = useState("History");
  const [coinClick, setCoinClick] = useState(0);
  const [isCreator, setIsCreator] = useState(false);
  const [isBecomeCreatorSlideUpModalOpen, setIsBecomeCreatorSlideUpModalOpen] =
    useState(false);

  const [txHash, setTxHash] = useState("");
  const onWithdraw = async () => {
    if (!primaryWallet) return;
    const signer = await getSigner(primaryWallet);
    const withdrawCtrt = new Contract(
      "0xCA5802F9B1A72e47bce75AAc85D005fB3e1a584f",
      ["function withdrawCtrt(address payable user) external"],
      signer
    );

    const tx = await withdrawCtrt.withdrawCtrt(await signer.getAddress());

    await tx.wait();

    setTxHash(tx.hash);
  };

  const router = useRouter();

  const { primaryWallet } = useDynamicContext();

  const authWorldCoin = async () => {
    const res = await react.signIn("worldcoin"); // when worldcoin is the only provider
  };

  const withdraw = async () => {
    const provider = await getWeb3Provider(primaryWallet!);
    const signer = await getSigner(primaryWallet!);
    const creatorWallet = await signer.getAddress();
    console.log(creatorWallet);

    // let WithdrawContract = new ethers.Contract(
    //   withdrawAddress,
    //   WithdrawABI,
    //   signer
    // );
  };

  const authWorldID = async () => {
    const res = await react.signIn("worldcoin"); // when worldcoin is the only provider
  };

  return (
    <>
      <div className="bg-white">
        <nav
          className="flex items-center space-x-4 justify-end"
          style={{ padding: "20px 24px" }}
        >
          <Image
            className=""
            src="\images\bell_icon.svg"
            alt="bell icon"
            width={24}
            height={24}
            onClick={() => setIsCreator(!isCreator)}
          />
          <Image
            className=""
            src="\images\system_icon.svg"
            alt="system icon"
            width={24}
            height={24}
            onClick={() => {
              setCoinClick((prev) => prev + 1);
            }}
          />
        </nav>
        <Profile title="Yennie" />
        <MyPageTab
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          coinClick={coinClick}
        />
        {isCreator ? (
          <CreatorBar coinClick={coinClick} withdraw={onWithdraw} />
        ) : (
          <GeneralUserBar
            setIsBecomeCreatorSlideUpModalOpen={
              setIsBecomeCreatorSlideUpModalOpen
            }
          />
        )}

        <Footer />
      </div>
      <SlideUpModal
        isOpen={isBecomeCreatorSlideUpModalOpen}
        onClose={() => setIsBecomeCreatorSlideUpModalOpen(false)}
        buttonText={"Verify with World ID"}
        buttonOnClick={authWorldID}
      >
        <Image
          src={"/images/hs_verify_world_id.svg"}
          alt={"world id"}
          width={720}
          height={232}
          style={{ margin: "72px 0 54px 0" }}
          onClick={() => {}}
        />
      </SlideUpModal>
    </>
  );
}

const Profile = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="rounded-full"
        src="/images/hs_profile_mypage.svg"
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

const CreatorBar = ({
  coinClick,
  withdraw,
}: {
  coinClick: number;
  withdraw: any;
}) => {
  const coinNum = () => {
    if (coinClick === 1) {
      return 95.5;
    } else if (coinClick == 2) {
      return 100.1;
    } else return 90.0;
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "0px 24px",
        position: "fixed",
        bottom: "80px ",
      }}
    >
      <div
        className="flex bg-[#FAFAFB] p-4 w-full"
        style={{ borderRadius: "8px", display: "flex", alignItems: "center" }}
      >
        <div>
          <p className="ml-3 p-1 flex flex-row text-[#FF7700]">
            {" "}
            <Image
              className="mr-1"
              src="/images/warn_icon.svg"
              alt="Warning icon"
              width={12}
              height={12}
            />{" "}
            Minimum 100 FLOW required to withdraw.
          </p>
          <p className="flex flex-row font-medium ml-4 text-xl">
            Total Rewards Earned:{" "}
            <Image
              className="ml-2"
              src="/images/hs_flow_logo.svg"
              alt="flow"
              width={20}
              height={20}
              style={{ marginRight: "6px" }}
            />{" "}
            <b>{coinNum().toFixed(2)}</b>
          </p>
        </div>
        <button
          className={`fixed top-50 right-16 text-xl px-6 py-3 rounded-3xl ${
            coinNum() >= 100
              ? "bg-[#FF5924] text-white hover:bg-orange-500"
              : "bg-gray-300 text-white cursor-not-allowed"
          }`}
          disabled={coinNum() < 100}
          onClick={() => {
            withdraw();
          }}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

const GeneralUserBar = ({
  setIsBecomeCreatorSlideUpModalOpen,
}: {
  setIsBecomeCreatorSlideUpModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "0px 24px",
        position: "fixed",
        bottom: "80px ",
      }}
    >
      <GeneralUserBarContainer>
        <Body2Semibold style={{ color: "white" }}>
          Share your favorite spots and get rewarded.
        </Body2Semibold>
        <GeneralUserButton
          onClick={() => {
            setIsBecomeCreatorSlideUpModalOpen(true);
          }}
        >
          Become a creator
        </GeneralUserButton>
      </GeneralUserBarContainer>
    </div>
  );
};

const GeneralUserBarContainer = styled.div`
  width: 100%;
  background-color: ${colors.primary};
  height: 68px;

  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 16px;
`;

const GeneralUserButton = styled.div`
  padding: 0px 24px;
  height: 100%;

  background-color: white;
  color: ${colors.primary};

  font-weight: 600;
  font-size: 17px;
  font-family: Pretendard;

  border: none;
  border-radius: 100px;
  cursor: pointer;

  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }
  &:active {
    background-color: #d9d9d9; /* 클릭 시 조금 더 어두운 색상 */
  }
`;

// const CreatorBar = () => {
//   return (
//     <div className="w-[688px] h-[68px] fixed bottom-32 left-11 z-50 flex justify-center">
//       <div className="flex flex-row items-center bg-[#FAFAFB] p-6 justify-between w-full max-w-4xl">
//         <p className="flex flex-row font-medium ml-4 text-xl">
//           Do you want to be a creator?{" "}
//           <Image
//             className="ml-2"
//             src="images/usdc-icon.svg"
//             alt="usdc"
//             width={20}
//             height={20}
//           />{" "}
//         </p>
//         <button className="text-xl justify-end bg-[#FF5924] px-6 py-3 text-white rounded-3xl mr-4 hover:bg-orange-500">
//           Withdraw
//         </button>
//       </div>
//     </div>
//   );
// };
