import { useState } from "react";
import "./Proposal.css";

function Proposal({ onAccept }) {
  const [askedAgain, setAskedAgain] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({ top: "60%", left: "55%" });

  const moveNoButton = () => {
    const rand = () => Math.floor(Math.random() * 70 + 10);
    setNoBtnPos({ top: `${rand()}%`, left: `${rand()}%` });
  };

  return (
    <div className="proposal-container">
      <img src="/assets/proposal.gif" alt="Cute GIF" className="proposal-gif" />
      <h1 className="proposal-text">
        {askedAgain ? "Please? 🥺" : "Will you marry me? 💍"}
      </h1>
      <div className="buttons">
        <button onClick={onAccept} className="yes-btn">Yes 💖</button>

        {!askedAgain && (
          <button
            onClick={() => setAskedAgain(true)}
            onMouseEnter={moveNoButton}
            className="no-btn"
            style={{ top: noBtnPos.top, left: noBtnPos.left }}
          >
            No 😢
          </button>
        )}
      </div>
    </div>
  );
}

export default Proposal;