import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ConnectWallet from "./components/ConnectWallet";
import MintNFT from "./components/MintNFT";
import MyTickets from "./components/MyTickets";

function App() {
  const [signer, setSigner] = useState(null);

  return (
    <div>
      <Header />
      <ConnectWallet setSigner={setSigner} />
      <MintNFT signer={signer} />
      <MyTickets />
      <Footer />
    </div>
  );
}

export default App;
