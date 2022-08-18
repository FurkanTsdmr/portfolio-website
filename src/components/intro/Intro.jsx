import React from "react";
import "./intro.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
const Intro = () => {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello,My Name is</h2>
            <h1 className="i-name">Furkan Taşdemir</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Writer</div>
                <div className="i-title-item">Content Creator</div>
              </div>
            </div>
            <p className="i-desc">
              Hi There 👋 I am Furkan. I am currently working on Front-End
              Development. 🚀
            </p>
          </div>
        </div>
      </div>
      <div className="descc">
        <p>
          I have good experience in frontend development, working with 3+ users
          and HTML, CSS, REACT, ANGULAR. I am a disciplined, constantly
          researching developer. There are over 75 projects on Github and I
          upload new daily. Before my frontend development project, I design to
          compete in the cyber platform from the first years, as well as for
          groups for different classes in companies and communities, before
          shopping. <br />I am constantly trying to find the truth by reading
          and trial and error. I published Github in order to educate myself in
          the field of cyber security not only from a book but also from people.
          <br />
          👉
          <a
            href="https://github.com/FurkanTsdmr/ETIK-HACKER/blob/main/K%C4%B0TAP.md"
            target={"_blank"}
            rel="noreferrer"
          >
            Ethichal Hacker Hand Book
          </a>
          👉
          <a
            href="https://www.linkedin.com/in/furkan-tasdemir/"
            target={"_blank"}
            rel="noreferrer"
          >
            Linkedin
          </a>
          👉
          <a
            href="https://github.com/FurkanTsdmr"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </AnimationOnScroll>
  );
};

export default Intro;
