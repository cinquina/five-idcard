import React from 'react';
import "./App.css";

interface FieldProps {
  label: string;
  value: string;
}

const Field: React.FC<FieldProps> = ({ label, value }) => (
  <div className="idcard-column">
    <div className="idcard-field">
      <h4>{label}</h4>
      <div className="barrier" style={{ clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0 100%)" }}></div>
    </div>
    <h3>{value}</h3>
  </div>
);

export default Field;
