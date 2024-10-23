import React, { useState } from "react";
import "./App.css";
import { debugData } from "../utils/debugData";
import { useNuiEvent } from "../hooks/useNuiEvent";
import Container from "./Container";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

interface ReturnData {
  firstName: string;
  lastName: string;
  dob: string,
  sex: string,
  exp: string,
  cref: string,
  class: string,
  pref: string,
}

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: 'JOHN',
    lastName: 'DOE',
    dob: '01/01/1990',
    sex: 'M',
    exp: '01/01/2025',
    cref: '123456',
    class: 'A',
    pref: 'UNKNOWN',
  });

  useNuiEvent<ReturnData>('openIDCard', setFormData);

  return (
    <div className="nui-wrapper">
      <Container formData={formData} />
    </div>
  );
};

export default App;
