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

      <div className="hero">
        <div className="hero-inner">
          <p className="hero-bio">
            Patrick Hund a.k.a. <strong>zapperment.rocks</strong> — beat maker, keyboardist and
            DJ from Wittstock, north-eastern Germany. His sound sits at the
            intersection of techno, house, rock and EDM. Genre lines exist to be
            ignored.
          </p>
          <a
            href="/zapperment-rocks_promo-pic_fete26_xl.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="promo-pic"
              src="/zapperment-rocks_promo-pic_fete26_s.png"
              srcSet="/zapperment-rocks_promo-pic_fete26_xs.png 215w, /zapperment-rocks_promo-pic_fete26_s.png 429w, /zapperment-rocks_promo-pic_fete26_m.png 643w, /zapperment-rocks_promo-pic_fete26_l.png 857w"
              sizes="(max-width: 768px) 300px, 385px"
              alt="Zapperment.rocks promo photo from Fête 2026"
            />
          </a>
        </div>
      </div>

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
