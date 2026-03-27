import { useState } from "react";
import zappermentRocksLogo from "./assets/zapperment-rocks-logo.png";
import "./App.css";

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div>
        <img
          src={zappermentRocksLogo}
          className="logo"
          alt="zapperment.rocks logo"
        />
      </div>
      <h1>zapperment.rocks</h1>

      <div className="audio-player">
        <h2>Party Girl</h2>
        <p>Live session 3, 18 Mar 2026</p>
        <audio controls>
          <source
            src="./audio/zapperment.rocks - Party Girl (session 3).mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </div>

      <button className="more-toggle" onClick={() => setShowMore(!showMore)}>
        <span className={`more-arrow ${showMore ? "more-arrow--down" : ""}`}>▶</span>
        More
      </button>

      <div className={`more-content ${showMore ? "more-content--open" : ""}`}>
        <div className="audio-player">
          <h2>Ten Pounds Lost in Ten Minutes</h2>
          <p>Version 2, 26 Jun 2025</p>
          <audio controls>
            <source
              src="./audio/zapperment.rocks - Ten Pounds Lost in Ten Minutes.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>

        <h2>
          <a href="https://soundcloud.com/hund-1">More on SoundCloud…</a>
        </h2>
      </div>
    </>
  );
}

export default App;
