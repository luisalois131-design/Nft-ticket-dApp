<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NFT Ticket DApp</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/ethers@6.9.0/dist/ethers.umd.min.js"></script>
</head>
<body>

  <header>
    <h1>NFT Ticket DApp</h1>
    <p>Mint and manage your tickets securely on Hedera</p>
  </header>

  <main>
    <section id="wallet">
      <button id="connectWalletBtn">Connect Wallet</button>
      <p id="walletAddress"></p>
    </section>

    <section id="mintNFT">
      <button id="mintBtn">Mint NFT Ticket</button>
      <p id="mintStatus"></p>
    </section>

    <section id="myTickets">
      <h2>My Tickets</h2>
      <ul id="ticketList"></ul>
    </section>
  </main>

  <footer>
    <p>© 2025 NFT Ticket DApp</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
