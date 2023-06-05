import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './Components/navbar';
import SipCal from './Non-Components/sip calculator';
import FDCal from './Non-Components/fd calculator';
import DreamCal from './Non-Components/dream cal';
import LearningSection from './Non-Components/learning section';
import Tools from './Non-Components/toolsPage';
import CryptoCal from './Non-Components/cryptoTax';
import IncomeTax from './Non-Components/incomeTaxCal';
import { Section1,Section2,Section3,Section4 } from './Non-Components/IncomeTaxSections';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LearningSection />} />
          <Route path="fdCal" element={<FDCal />} />
          <Route path="sipCal" element={<SipCal />} />
          <Route path="DreamCal" element={<DreamCal />} />
          <Route path="cryptoCal" element={<CryptoCal />} />
          <Route path="incomeTax" element={<IncomeTax />} />
          {/* <Route path="incomeTax/section1" element={<Section1/>} /> */}
          <Route path="incomeTax/section2" element={<Section2/>} />
          <Route path="incomeTax/section3" element={<Section3/>} />
          <Route path="incomeTax/section4" element={<Section4/>} />
          <Route path='tools' element={<Tools />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          {/* <Redirect to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

