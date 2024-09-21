import { Signer } from "ethers";
import insuranceContractContents from "./contract-content";

export type InsuranceType = "Standard" | "Premium" | "Full Cover";

// EIP-712 도메인 데이터 설정
const domain = {
  name: "Premium Coverage Agreement",
  version: "1",
  chainId: 296, // Hedera Testnet
};

const types = {
  Section: [
    { name: "title", type: "string" },
    { name: "content", type: "string" },
  ],
  Agreement: [
    { name: "sections", type: "Section[]" },
    { name: "insurerWallet", type: "address" },
    { name: "customerWallet", type: "address" },
    { name: "insuranceType", type: "string" },
  ],
};

export const signContract = async (
  signer: Signer,
  insurerWallet: string,
  insuranceType: InsuranceType
) => {
  
  // 가입자의 지갑 주소 가져오기
  const customerWallet = await signer.getAddress();

  // 서명할 데이터 정의 (계약서 내용의 섹션을 배열로 구조화)
  const value = {
    sections: insuranceContractContents,
    insurerWallet,
    customerWallet,
    insuranceType,
  };

  // 서명 데이터를 EIP-712 형식으로 서명
  try {
    const signature = await signer.signTypedData(domain, types, value);
    console.log("Signature:", signature);
    return signature;
  } catch (error) {
    console.error("Error signing contract:", error);
    throw error;
  }
};
