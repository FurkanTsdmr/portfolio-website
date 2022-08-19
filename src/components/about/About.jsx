import React from "react";
import "./about.css";
import Award from "../../img/award.png";
import Robot from "../../img/robot.png";
import Space from "../../img/space1.png";
import Space2 from "../../img/space2.png";
import Space3 from "../../img/space3.png";

import { AnimationOnScroll } from "react-animation-on-scroll";

const About = () => {
  return (
    <>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="a" id="top">
          <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img src={Space} alt="Space" className="a-img" />
            </div>
            <div className="a-right">
              <h1 className="a-title">Awards</h1>
              <h4 className="a-awards-title">
                {" "}
                1 - Tubitak Ahican Silk Road Robot Compoetition Twenty-Forth
                Place in the World
              </h4>
              <p className="a-sub">
                {" "}
                Robot competition held in Turkey/Eskişehir in 2015.
              </p>
              <p className="a-desc">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehende.
              </p>
              <div className="a-award">
                <img src={Award} alt="Award" className="award" />
                <div className="a-award-texts">
                  <h4 className="a-award-title">
                    Competition Information 2015
                  </h4>
                  <p className="a-award-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit ipsa aliquid ea velit qui a incidunt, voluptas
                    repellendus vel autem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="a">
          <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img src={Space2} alt="Space" className="a-img" />
            </div>
            <div className="a-right">
              <h4 className="a-awards-title">
                {" "}
                2 - Tubitak vehicle That Maintains Following Distance Regional
                Second Place
              </h4>
              <p className="a-sub">
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <p className="a-desc">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehende.
              </p>
              <div className="a-award">
                <img src={Award} alt="Award" className="award" />
                <div className="a-award-texts">
                  <h4 className="a-award-title">
                    Competition Information 2015
                  </h4>
                  <p className="a-award-desc">
                    After winning the Black Sea Region championship. Our project
                    in the second place in Turkey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="a">
          <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img src={Space3} alt="Space" className="a-img" />
            </div>
            <div className="a-right">
              <h4 className="a-awards-title">
                {" "}
                3 - Ordu University Line Follower Robot 3rd Place
              </h4>
              <p className="a-sub">
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
              <p className="a-desc">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
                reprehende.
              </p>
              <div className="a-award">
                <img src={Robot} alt="Award" className="award" />
                <div className="a-award-texts">
                  <h4 className="a-award-title">
                    Competition Information 2015
                  </h4>
                  <p className="a-award-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit ipsa aliquid ea velit qui a incidunt, voluptas
                    repellendus vel autem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
      <div>
        <a href="#top">
          <h2 className="link">Go To Top Web Site</h2>
        </a>
      </div>
    </>
  );
};

export default About;
