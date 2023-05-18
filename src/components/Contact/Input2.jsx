import React from "react";
import "../../css3/input.scss";
export default function Input2() {
  return (
    <div>
      <div className="img">
        <div className="block">
          <div className="block_text">
            <h2>Contact Us</h2>
            <p>
              Home <span>› Contact Us</span>
            </p>
          </div>
        </div>
      </div>
      <div className="wer_p">
        <div class="parent3">
          <div class="div31">
            <div className="div_por">
              <div className="por_hol"></div>
              <div className="por_loh">
                <h1 className="loh_1">Our Location</h1>
                <p className="loh_2">
                  (800) 123 456 789 / (800) 123 456 789 info@example.com
                </p>
              </div>
            </div>
          </div>
          <div class="div32">
            <div className="div_por">
              <div className="por_hol"></div>
              <div className="por_loh">
                <h1 className="loh_1">Contact us Anytime</h1>
                <p className="loh_2">
                  Mobile: 012 345 678 <br /> Fax: 123 456 789
                </p>
              </div>
            </div>
          </div>
          <div class="div33">
            <div className="div_por">
              <div className="por_hol"></div>
              <div className="por_loh">
                <h1 className="loh_1">Support Overall</h1>
                <p className="loh_2">
                  Support24/7@example.com info@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__input">
        <h2>GET IN TOUCH</h2>
        <div className="input__row">
          <div className="inputs">
            <input type="text" placeholder="name" />
          </div>
          <div className="inputs">
            <input type="email" placeholder="email" />
          </div>
        </div>
        <div className="input__row">
          <div className="inputs inp2">
            <input type="text" placeholder="subject" />
          </div>
        </div>
        <div className="inp_er">
          <textarea placeholder="Message" id="text_arei"></textarea>
        </div>
        <div className="butt_im">
          <button className="but">
            <span>Send A Message</span>
          </button>
        </div>
      </div>
    </div>
  );
}
