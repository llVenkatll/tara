import { useEffect } from "react";
import "./Accepted.css";

function Accepted() {
  useEffect(() => {
    const audio = new Audio("./assets/love.mp4");
    audio.play();
  }, []);

  return (
    <div className="accepted-container">
      <img src="./assets/happy.gif" alt="Celebration GIF" className="accepted-gif" />
      <h1 className="accepted-text">Yaaay! 💕 I'm the happiest (pls increase volume XD)!</h1>
    </div>
  );
}

export default Accepted;