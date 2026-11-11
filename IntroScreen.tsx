import { useEffect, useState } from "react";

interface IntroScreenProps {
  onEnter: () => void;
}

export function IntroScreen({
  onEnter
}: IntroScreenProps) {

  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.body.classList.add("intro-active");

    return () => {
      document.body.classList.remove("intro-active");
    };
  }, []);

  const enterApp = () => {

    if (leaving) return;

    setLeaving(true);

    window.setTimeout(() => {
      onEnter();
    }, 720);

  };

  return (

    <section
      className={`intro-screen ${
        leaving ? "intro-screen--leaving" : ""
      }`}
      aria-label="Giới thiệu AN CAFÉ"
    >

      {/* Background texture */}
      <div
        className="intro-screen__grain"
        aria-hidden="true"
      />

      {/* Top information */}
      <div className="intro-screen__topline">

        <span>AN CAFÉ</span>

        <span>
          DCM · WORK SCHEDULE
        </span>

      </div>

      {/* Main content */}
      <div className="intro-screen__center">

        {/* Original brand logo */}
        <div className="intro-screen__logo-wrap">

          <img
            className="intro-screen__logo"
            src="/assets/an-cafe-logo.jpg"
            alt="Logo AN CAFÉ"
            fetchPriority="high"
          />

        </div>

        {/* Animated typography */}
        <div className="intro-screen__copy">

          <p className="intro-screen__overline">
            WELCOME TO
          </p>

          <h1 className="intro-screen__headline">

            <span>
              AN CAFÉ
            </span>

            <span className="intro-screen__headline-second">
              WORK TOGETHER.
            </span>

          </h1>

          <p className="intro-screen__tagline">
            YOUR WORK. YOUR SCHEDULE.
          </p>

        </div>

      </div>

      {/* Bottom navigation */}
      <div className="intro-screen__bottom">

        <span className="intro-screen__index">
          01 — 01
        </span>

        <button
          className="intro-screen__enter"
          type="button"
          onClick={enterApp}
          disabled={leaving}
        >

          <span>
            {leaving ? "ĐANG MỞ DCM" : "BẮT ĐẦU"}
          </span>

          <span
            className="intro-screen__arrow"
            aria-hidden="true"
          >
            ↗
          </span>

        </button>

        <span className="intro-screen__caption">
          A BETTER WAY TO WORK
        </span>

      </div>

    </section>

  );
}
