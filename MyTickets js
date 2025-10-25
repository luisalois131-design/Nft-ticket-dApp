import React, { useState, useEffect } from "react";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Placeholder: fetch NFTs from contract or Hedera mirror node
    const fetchTickets = async () => {
      // Implement NFT query logic
      setTickets(["Ticket #1", "Ticket #2"]); // Example data
    };

    fetchTickets();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>My Tickets</h3>
      {tickets.length === 0 ? <p>No tickets yet</p> :
        tickets.map((t, i) => <p key={i}>{t}</p>)
      }
    </div>
  );
}
