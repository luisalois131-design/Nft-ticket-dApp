import { HashConnect } from "hashconnect";

export const hashconnect = new HashConnect();

export const appMetadata = {
  name: "NFT Ticket DApp",
  description: "Mint and manage NFT tickets on Hedera",
  icon: "https://via.placeholder.com/64"
};

export const initHashconnect = async () => {
  const initData = await hashconnect.init(appMetadata);
  return initData;
};
