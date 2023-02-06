// import React from 'react';
import './App.css';
import { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [token, setToken] = useState<any | null>(null);
  if (token)
    console.log(`hCaptcha Token: ${token}`);
  return (
    <div className="App">
      <form>
        <HCaptcha
          sitekey="a560783c-3657-4685-942d-a32e58b3620d"
          onVerify={setToken}
        />
      </form>
    </div>
  );
}

export default App;
