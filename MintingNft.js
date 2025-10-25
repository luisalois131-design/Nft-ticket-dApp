import React, { useState } from "react";
import { ethers } from "ethers";

export default function MintNFT({ signer }) {
  const [status, setStatus] = useState("");

  const mintNFT = async () => {
    if (!signer) {
      setStatus("Connect your wallet first!");
      return;
    }

    try {
      setStatus("Minting NFT...");

      const contractAddress = "0.0.YOUR_CONTRACT_ADDRESS"; // Replace with your deployed NFT contract
      const abi = [
        "function createNFT(string memory metadata) public returns (uint256)"
      ];

      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.createNFT("Ticket Metadata", { gasLimit: 100000 });
      await tx.wait();

      setStatus("NFT minted successfully!");
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={mintNFT} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Mint NFT Ticket
      </button>
      <p>{status}</p>
    </div>
  );
}
