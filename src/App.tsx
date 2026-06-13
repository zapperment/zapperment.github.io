import { useRef } from "react";
import zappermentRocksLogo from "./assets/zapperment-rocks-logo.png";
import "./App.css";
import { HorizontalRule } from "./HorizontalRule";

function App() {
  const partyGirlAudioRef = useRef<HTMLAudioElement>(null);

  const handlePartyGirlCoverClick = () => {
    const audio = partyGirlAudioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <header className="site-header">
        <img
          src={zappermentRocksLogo}
          className="logo"
          alt="zapperment.rocks logo"
        />
        <h1>zapperment.rocks</h1>
      </header>
      <HorizontalRule />

      <section className="hero section">
        <div className="hero-inner reverse">
          <p className="hero-bio">
            Patrick Hund a.k.a. <strong>zapperment.rocks</strong> — producer, keyboardist and
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
      </section>
      <section className="section">
        <div className="hero-inner">
          <div>
            <button
              type="button"
              className="album-cover-button"
              onClick={handlePartyGirlCoverClick}
              aria-label="Play Party Girl live session"
            >
              <img
                className="promo-pic"
                src="/party-girl_album-cover_s.png"
                srcSet="/party-girl_album-cover_xs.png 215w, /party-girl_album-cover_s.png 429w, /party-girl_album-cover_m.png 643w, /party-girl_album-cover_l.png 857w"
                sizes="(max-width: 768px) 300px, 350px"
                alt="Album cover: Party Girl by zapperment.rocks — click to play!"
              />
            </button>
            <div className="audio-player">
              <p>Live session 5, recorded 13 Jun 2026</p>
              <audio controls ref={partyGirlAudioRef}>
                <source
                  src="./audio/zapperment.rocks - Party Girl (session 5).mp3"
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
          <div className="hero-bio">
            <p>
              Q: “What inspired you to your project <em>Party Girl</em>?”
            </p>
            <p>
              A: “I used to hate EDM with a passion, until I was kinda forced to warm up to the works of David Guetta, 
              Nicki Minaj, Rihanna and the like when I DJed at my daughter's high school dance. When I saw how much fun
              the kids had during my set, I realised there are no good or bad genres, there is only good music that hits
              a nerve and lifts you up emotionally… and there is music that doesn't. So I thought, ‘if Guetta can 
              butcher 80s and 90s gems like <em>Blue</em> or <em>Forever Young</em>, so can I’, and created this set
              where I'm sampling some of my favourites, most prominently <em>Party Girl</em> by U2. It's all about the 
              vibe and energy!”
            </p>
          </div>
        </div>
      </section>
      <section className="hero section">
        <img 
          src="/promo-fete-wittstock2026_s.jpeg" 
          srcSet="/promo-fete-wittstock2026_xs.jpeg 215w, /promo-fete-wittstock2026_s.jpeg 429w, /promo-fete-wittstock2026_m.jpeg 643w, /promo-fete-wittstock2026_l.jpeg 857w"
          sizes="(max-width: 768px) 300px, 600px" 
          alt="Kino Astoria Wittstock: Fête de la Musique — zapperment.rocks 21 June 2026 — live 17-18h"
        />
      </section>
    </>
  );
}

export default App;
