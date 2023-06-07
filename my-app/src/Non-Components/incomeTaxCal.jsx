import React, { useState, useEffect } from "react";
import "../css/sipCalculator.css";
import NavBar from "../Components/navbar";
import BlackStrip from "../Components/blackStrip";
import { InputNumberLeft, InputRadio } from "../Components/formInput";
import { incomeDetails } from "../dataset/incomeSection2";
import { deductions } from "../dataset/incomeSection3";
import Footer from "../Components/footer";
import Info1, { Info2 } from "./incomeTaxInfo";

export default function IncomeTaxCal() {
  const [stats, setStats] = useState({
    // financialYear:1,
    // ageGroup:1,
    incomeSalary: 0,
    exemptAllowance: 0,
    interestIncome: 0,
    interestHomeLoanSelfOccupied: 0,
    incomeRental: 0,
    interestHomeLoanLetOut: 0,
    incomeDigitalAssets: 0,
    incomeOthers: 0,
    deduc80C: 0,
    deduc80TTB: 0,
    deduc80D: 0,
    deduc80G: 0,
    deduc80E: 0,
    deduc80EEA: 0,
    deduc80CCD: 0,
  });
  const totalIncome=stats.incomeSalary + stats.interestIncome + stats.interestHomeLoanSelfOccupied + stats.incomeRental + stats.interestHomeLoanLetOut + stats.incomeDigitalAssets + stats.incomeOthers;
  const VIAdeductions=stats.deduc80C + stats.deduc80TTB + stats.deduc80D + stats.deduc80G + stats.deduc80E + stats.deduc80EEA + stats.deduc80CCD;
  const standardDeduction=50000;
  const exempt=stats.exemptAllowance;
  const taxableIncomeOld=0;
  function handleInput(event) {
    const { name, value } = event.target;
    return setStats((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const [flag, setFlag] = useState(1);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    if (pageNo <= 3) {
      document.getElementById("button").innerHTML = "Next";
    } else {
      document.getElementById("button").innerHTML = "Try Again";
    }
  });

  function handleSection(event) {
    var pg;
    const id = event.target.id;
    if (id == "button") {
      pg = pageNo + 1;
    } else {
      pg = event.target.value;
    }
    if (flag) {
      setFlag(0);
      pg = 1;
    }
    if (pg > 4) {
      pg = 1;
    }
    for (var i = 1; i <= 4; i++) {
      var sec = "section" + i;
      if (i == pg) {
        document.getElementById(sec).style.visibility = "visible";
      } else {
        document.getElementById(sec).style.visibility = "hidden";
      }
    }
    return setPageNo(pg);
  }

  return (
    <div onLoad={handleSection}>
      <BlackStrip bgcolor="#1e1b1b" height="2.2em" />
      <NavBar />
      <div className="sipContainer">
        <div class="heading">
          <h4 class="calHeading">Income Tax Calculator</h4>
          <h6 class="calTagline">Find how much tax I need to pay</h6>
        </div>
        <br />
        <br />

        {/* Pagination */}
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li
              class="page-item page-link pagno"
              onClick={handleSection}
              value={1}
            >
              1
            </li>
            <li
              class="page-item page-link pagno"
              onClick={handleSection}
              value={2}
            >
              2
            </li>
            <li
              class="page-item page-link pagno"
              onClick={handleSection}
              value={3}
            >
              3
            </li>
            <li
              class="page-item page-link pagno"
              onClick={handleSection}
              value={4}
            >
              4
            </li>
          </ul>
        </nav>

        {/* Section 1 */}
        <div id="section1" style={{ position: "absolute" }}>
          <i>
            See how the latest budget impacts your tax calculation. Updated as
            per latest budget on 1 February, 2023.
          </i>
          <br />
          <br />
          <div className="formQuestion">
            Which Financial Year do you want to calculate taxes for?
          </div>
          <InputRadio
            name="financialYear"
            label="FY 2023-2024 Latest Budget (Return to be filed between 1st April 2024 - 31st March 2025)"
          />
          <InputRadio
            name="financialYear"
            label="FY 2022-2023 (Return to be filed between 1st April 2023 - 31st March 2024)"
          />

          <br />
          <div className="formQuestion">Your age</div>
          <InputRadio name="ageGroup" label="0 to 60" />
          <InputRadio name="ageGroup" label="60 to 80" />
          <InputRadio name="ageGroup" label="80 & above" />
        </div>

        {/* Section 2 */}
        <div id="section2" style={{ position: "absolute" }} class="col-md-4">
          {incomeDetails.map((data) => (
            <InputNumberLeft
              key={data.id}
              label={data.label}
              id={data.name}
              name={data.name}
              unit="₹"
              onInput={handleInput}
              min="0"
              // value={stats.incomeSalary}
            />
          ))}
        </div>

        {/* Section 3 */}

        <div id="section3" style={{ position: "absolute" }} class="col-md-4">
          {deductions.map((data) => (
            <InputNumberLeft
              key={data.id}
              label={data.label}
              id={data.name}
              name={data.name}
              unit="₹"
              onInput={handleInput}
              min="0"
              // value={stats.incomeSalary}
            />
          ))}
        </div>

        {/* Section 4 */}

        <div id="section4" class="col-md-6">
          
        </div>
        <br />
        <br />
        <button type="button" class="btn" id="button" onClick={handleSection}>
          Next
        </button>
        <br />
        <br />
      </div>
      {/* <br /><br /><br /><br /> */}
      <Info1 />
      <Info2 />
      <Footer />
    </div>
  );
}
