import React from "react";
import "../../css3/blog.scss";
export default function Blog2() {
  return (
    <div className="a_b">
      <div className="img2">
        <div className="block_p1">
          <div className="block_text_p1">
            <h2>Blog Details Fullwidth</h2>
            <p>
              Home <span>› Blog</span>
            </p>
          </div>
        </div>
      </div>
      <div className="weert">
        <div className="wert"></div>
        <div className="wert1">
          <h2>STANDARD BLOG POST ONE</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage.
          </p>
        </div>
        <div className="wert2">
          <div className="q4"></div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock
          </p>
        </div>
        <div className="wert3">
          <p>
            and going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <div className="wert4">
          <p className="a_p2">← Older Post</p>
          <p className="a_p">SHARE THIS ARTICLE</p>
          <p className="a_p1">Newer Post →</p>
        </div>
        <hr />
        <div className="wert5"></div>
        <div className="wert6">
          <p className="blo_ppo">3 Comments</p>
          <div class="parent8">
            <div class="div81">
              <div className="div_p_img"></div>{" "}
              <div className="wer_p">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia? Lorem ipsum dolor sit.  Lorem ipsum dolor sit amet consectetur<br />
                  <a href="/"><span>Duy</span> - July 30, 2022</a>
                </p>
              </div>{" "}
            </div>
            <div class="div82">
              <div className="div_p_img"></div>{" "}
              <div className="wer_p">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia? Lorem ipsum dolor sit.  Lorem ipsum dolor sit amet consectetur<br />
                  <a href="/"><span>Jack</span> - July 30, 2022</a>
                </p>
              </div>{" "}
            </div>
            <div class="div83">
              <div className="div_p_img"></div>{" "}
              <div className="wer_p">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia? Lorem ipsum dolor sit.  Lorem ipsum dolor sit amet consectetur<br />
                  <a href="/"><span>Duy</span>- July 30, 2022</a>
                </p>
              </div>
            </div>
          </div>
          <p className="pop">Leave A Comment</p>
          <div className="main__input">
           <div className="inp_er">
          <textarea placeholder="Message" id="text_arei"></textarea>
        </div>
        <div className="input__row">
          <div className="inputs">
            <input type="text" placeholder="name" />
          </div>
          <div className="inputs">
            <input type="email" placeholder="email" />
          </div>
        </div>

        <div className="butt_im">
          <button className="but1">
            <span>Post comment</span>
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
