import React, { useState } from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { fetchNui } from "../utils/fetchNui";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  return (
    <div className="nui-wrapper">
      <div className="idcard-container">
        <div className="idcard-header">
          <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
          <div className="header-title">
            <h4>SAN ANDREAS</h4>
            <h5>DRIVER LICENSE</h5>
          </div>
          <div className="barrier" style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)" }}></div>
        </div>

        <div className="idcard-wrapper">
          <div className="idcard-image">
            <img src="./assets/male.png" alt="" />
            <p>F D</p>
          </div>
          <div className="idcard-content">
            <div className="idcard-row">
              <div className="idcard-column">
                <div className="idcard-field">
                  <h4>FIRST NAME</h4>
                  <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
                </div>
                <h3>FIVE</h3>
              </div>
              <div className="idcard-column">
                <div className="idcard-field">
                  <h4>DOB</h4>
                  <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
                </div>
                <h3>2002-06-26</h3>
              </div>
              <div className="idcard-column">
                <div className="idcard-field">
                  <h4>EXP</h4>
                  <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
                </div>
                <h3>2026</h3>
              </div>
              <div className="idcard-column">
                <div className="idcard-field">
                  <h4>CLASS</h4>
                  <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
                </div>
                <h3>C</h3>
              </div>
            </div>
            <div className="idcard-row">
              <div className="idcard-column">
                <div className="idcard-field">
                  <h4>LAST NAME</h4>
                  <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
                </div>
                <h3>DEVELOPMENTS</h3>
              </div>
              <div className="idcard-column">
                <div className="idcard-field">
                  <h4>SEX</h4>
                  <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
                </div>
                <h3>M</h3>
              </div>
              <div className="idcard-column">
                <div className="idcard-field">
                  <h4>CREF</h4>
                  <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
                </div>
                <h3>F1V3D3VS</h3>
              </div>
              <div className="idcard-column">
                <div className="idcard-field">
                  <h4>PREF</h4>
                  <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
                </div>
                <h3>UNKNOWN</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
