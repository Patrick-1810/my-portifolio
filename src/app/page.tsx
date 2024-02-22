
import { About } from "./components/about/about";
import { Header } from "./components/header/header";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <About />

      <div className="infos">
        <h3>Experience</h3>
        <div className="experience-infos">
          <span>💻Internship - Compass UOL</span>
        </div>
        <h3>Education</h3>
        <div className="educationa-infos">
          <span>🎓</span>
          <span>Studying Computer Science - Integrated Regional University</span>
        </div>



      </div>
      <div className="buttons">
        <div className="social">

        </div>
        <button>Contact me </button>
      </div>




    </main>
  );
}
