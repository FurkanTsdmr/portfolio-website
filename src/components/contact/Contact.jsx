import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/addres.png";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Contact = () => {
  return (
    <>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
            <div className="c-left">
              <h1 className="c-title">Contact</h1>
              <div className="c-info">
                <div className="c-info-item">
                  <img src={Phone} alt="" className="c-icon" />
                  +90 9999999
                </div>
                <div className="c-info-item">
                  <img className="c-icon" src={Email} alt="" />
                  furkantsdmr97@gmail.com
                </div>
                <div className="c-info-item">
                  <img className="c-icon" src={Address} alt="" />
                  TURKEY/GIRESUN
                </div>
              </div>
            </div>
            <div className="c-right">
              <p className="c-desc">
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along. me.
              </p>
              <form>
                <input type="text" placeholder="Name" name="user_name" />
                <input type="text" placeholder="Subject" name="user_subject" />
                <input type="text" placeholder="Email" name="user_email" />
                <textarea rows="5" placeholder="Message" name="message" />
                <button onClick={() => alert("Message Has Been Send :)")}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
};

export default Contact;
