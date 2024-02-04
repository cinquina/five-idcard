import React from 'react';
import "./App.css";

const Header: React.FC = () => (
    <div className="idcard-header">
        <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
        <div className="header-title">
            <h4>SAN ANDREAS</h4>
            <h5>DRIVER LICENSE</h5>
        </div>
        <div className="barrier" style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)" }}></div>
    </div>
);

export default Header;
