import React from "react";
import "../../css3/snopq.scss";
import AllCollapseExample from "./Accar";
export default function Snopq() {

  return (
    <div>
      <div className="img3">
        <div className="block_p1">
          <div className="block_text_p1">
            <h2>Shop Sidebar</h2>
            <p>
              Home <span>› Shop</span>
            </p>
          </div>
        </div>
      </div>
      <div className="sh_ul1">
        <div class="parentq">
          <div class="div1q">
            <div className="q_sh">
              <h2 className="sh_p">Search</h2>
              <div className="sh_pop">
                <input
                  placeholder="Search Our Store"
                  type="text"
                  className="sh_inp"
                />
                <button className="sh_but"></button>
              </div>
              <h2 className="sh_p1">Menu Categories</h2>
              <div className="q_sh1"></div>
              <AllCollapseExample />
              <h2 className="sh_p2">Price Filter</h2>
              <div className="q_sh1"></div>
              <div className="sh_pop1">
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="11"
                />
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="11"
                />
              </div>
            </div>
          </div>
          <div class="div2q"> </div>
        </div>
      </div>
    </div>
  );
}
