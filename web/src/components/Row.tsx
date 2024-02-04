import React, { ReactNode } from 'react';
import "./App.css";

interface RowProps {
  children: ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => (
  <div className="idcard-row">
    {children}
  </div>
);

export default Row;
