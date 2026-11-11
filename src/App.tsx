import { useState } from "react";
import { IntroScreen } from "./components/intro/IntroScreen";

const INTRO_STORAGE_KEY = "dcm_intro_seen_v1";

function DcmHome() {
  return (
    <main className="dcm-home">

      <header className="dcm-home__header">
        <img
          src="/assets/an-cafe-logo.jpg"
          alt="AN CAFÉ"
        />

        <div>
          <p className="dcm-home__eyebrow">
            AN CAFÉ · DCM
          </p>

          <h1>Đăng ký ca làm</h1>
        </div>
      </header>

      <section className="dcm-home__notice">
        <span className="dcm-home__dot" />

        <div>
          <strong>
            Chào mừng đến với DCM
          </strong>

          <p>
            Hệ thống đăng ký và quản lý lịch làm việc
            nội bộ AN CAFÉ.
          </p>
        </div>
      </section>

      <button
        className="dcm-home__replay"
        onClick={() => {
          localStorage.removeItem(INTRO_STORAGE_KEY);
          window.location.reload();
        }}
      >
        Xem lại phần giới thiệu
      </button>

    </main>
  );
}

export default function App() {

  const [showIntro, setShowIntro] = useState(
    () => localStorage.getItem(INTRO_STORAGE_KEY) !== "true"
  );

  const handleEnter = () => {
    localStorage.setItem(INTRO_STORAGE_KEY, "true");
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <IntroScreen onEnter={handleEnter} />
    );
  }

  return <DcmHome />;
}
