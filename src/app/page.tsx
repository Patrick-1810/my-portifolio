
import { About } from "./components/about/about";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { EmailIcon } from "./icons/email-icon";
import { SocialBtns } from "./social-btns/social-btns";

import "./styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <About />
      <Info />
      <div className="buttons">
        <SocialBtns />
        <a className="btn-primary" href="mailto:patrickprestes977@gmail.com">
          Contact me
          <EmailIcon />
        </a>
      </div>




    </main>
  );
}
