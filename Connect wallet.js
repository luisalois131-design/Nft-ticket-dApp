import React, { useState } from "react";
import { ethers } from "ethers";

export default function ConnectWallet({ setSigner }) {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    setAccount(accounts[0]);
    const signer = await provider.getSigner();
    setSigner(signer);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {account ? (
        <p>Connected: {account}</p>
      ) : (
        <button onClick={connectWallet} style={{ padding: "10px 20px" }}>Connect Wallet</button>
      )}
    </div>
  );
        }
