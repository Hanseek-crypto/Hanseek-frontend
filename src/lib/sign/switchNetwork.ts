export const switchNetwork = async (chainId: number) => {
  // @ts-ignore
  const provider = window.ethereum;
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${chainId.toString(16)}` }], // 16진수 형식의 체인 ID
    });
  } catch (switchError) {
    // 네트워크 추가가 필요한 경우
    // @ts-ignore
    if (switchError.code === 4902) {
      try {
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: "Hedera Testnet",
              nativeCurrency: {
                name: "HBAR",
                symbol: "HBAR",
                decimals: 18,
              },
              rpcUrls: ["https://testnet.hashio.io/api"],
              blockExplorerUrls: ["https://hedera.com/ecosystem/network-explorers/"],
            },
          ],
        });
      } catch (addError) {
        console.error("Failed to add network:", addError);
        throw addError;
      }
    } else {
      console.error("Failed to switch network:", switchError);
      throw switchError;
    }
  }
};
