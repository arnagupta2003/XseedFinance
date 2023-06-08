import React, { useState, useEffect } from "react";
import "../css/sipCalculator.css";
import NavBar from "../Components/navbar";
import BlackStrip from "../Components/blackStrip";
import { InputNumberLeft, InputRadio } from "../Components/formInput";
import { incomeDetails } from "../dataset/incomeSection2";
import { deductions } from "../dataset/incomeSection3";
import Footer from "../Components/footer";
import Info1, { Info2 } from "./incomeTaxInfo";
import { TableData3 } from "../Components/tableData";

export default function IncomeTaxCal() {
  const [stats, setStats] = useState({
    financialYear:"",
    ageGroup:"",
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
  var headingOld="Post-Budget (Old Regime)\n"+stats.financialYear
  var headingNew="Post-Budget (New Regime)\n"+stats.financialYear
  const totalIncome=Number(stats.incomeSalary) + Number(stats.interestIncome) + Number(stats.interestHomeLoanSelfOccupied) + Number(stats.incomeRental)+ Number(stats.interestHomeLoanLetOut) + Number(stats.incomeDigitalAssets )+ Number(stats.incomeOthers);
  const VIAdeductions=Number(stats.deduc80C) + Number(stats.deduc80TTB )+ Number(stats.deduc80D) + Number(stats.deduc80G) + Number(stats.deduc80E) + Number(stats.deduc80EEA) + Number(stats.deduc80CCD);
  var exempt=Number(stats.exemptAllowance);
  if(exempt>totalIncome){
    exempt=totalIncome;
  }
  var standardDeduction=50000;
  if(totalIncome<50000){
    standardDeduction=totalIncome-exempt;
  }
  const totalDeductionsOld=exempt + standardDeduction + VIAdeductions;
  const totalDeductionsNew=standardDeduction;
  const taxableIncomeOld=totalIncome-totalDeductionsOld;
  const taxableIncomeNew=totalIncome-totalDeductionsNew;
  var incometaxOld=0;
  var incomeTaxNew=0;
  var taxable=0;
  var base=0;

  if(taxableIncomeNew>700000){
    if(taxableIncomeNew>1500000){
      taxable=taxableIncomeNew-1500000;
      incomeTaxNew=150000+taxable*0.3;
    }else if(taxableIncomeNew>1200000){
      taxable=taxableIncomeNew-1200000;
      incomeTaxNew=90000+taxable*0.2;
    }
    else if(taxableIncomeNew>900000){
      taxable=taxableIncomeNew-900000;
      incomeTaxNew=45000+taxable*0.15;
    }
    else if(taxableIncomeNew>600000){
      taxable=taxableIncomeNew-600000;
      if(taxableIncomeNew-700000<15000 && taxableIncomeNew-700000>0){
        incomeTaxNew=taxableIncomeNew-700000;
        // console.log(incomeTaxNew);
      }
      else if(taxable*0.1< 15000){
        incomeTaxNew=taxable*0.1;
      }else{
        incomeTaxNew=15000+taxable*0.1;
      }
      
    }
  }
  if(taxableIncomeOld>500000){
    if(taxableIncomeOld>1000000){
      taxable=taxableIncomeOld-1000000;
      if(stats.ageGroup=="0060"){
        base=112500;
      }else if(stats.ageGroup=="6080"){
        base=110000;
      }else{
        base=100000;
      }
      incometaxOld=base+taxable*0.3;
    }
    else if(taxableIncomeOld>500000){
      taxable=taxableIncomeOld-500000;
      if(stats.ageGroup=="0060"){
        base=12500;
      }else if(stats.ageGroup=="6080"){
        base=10000;
      }else{
        base=0;
      }
      if(taxable*0.1< base){
        incometaxOld=taxable*0.2;
      }else{
        incometaxOld=base+taxable*0.2;
      }
    }
  }
  const eduTaxOld=(0.04*incometaxOld).toFixed(2);
  const eduTaxNew=(0.04*incomeTaxNew).toFixed(2);
  const totalIncomeTaxOld=incometaxOld+Number(eduTaxOld);
  const totalIncomeTaxNew=incomeTaxNew+Number(eduTaxNew);

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
    document.getElementById("deductions").style.visibility="hidden";
    document.getElementById("deductions").style.position="absolute";
    document.getElementById("incomeTax").style.visibility="hidden";
      document.getElementById("incomeTax").style.position="absolute";
    return setPageNo(pg);
  }
  function handleDeduction(){
    var curr=document.getElementById("deductions").style.visibility;
    if(curr=="hidden"){
      document.getElementById("deductions").style.visibility="visible";
      document.getElementById("deductions").style.position="relative";
    }else{
      document.getElementById("deductions").style.visibility="hidden";
      document.getElementById("deductions").style.position="absolute";
    }
  }
  function handleIncomeTax(){
    var curr=document.getElementById("incomeTax").style.visibility;
    if(curr=="hidden"){
      document.getElementById("incomeTax").style.visibility="visible";
      document.getElementById("incomeTax").style.position="relative";
    }else{
      document.getElementById("incomeTax").style.visibility="hidden";
      document.getElementById("incomeTax").style.position="absolute";
    }
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
            value="(FY 2023-2024)"
            onClick={handleInput}
          />
          <InputRadio
            name="financialYear"
            label="FY 2022-2023 (Return to be filed between 1st April 2023 - 31st March 2024)"
            value="(FY 2022-2023)"
            onClick={handleInput}
          />

          <br />
          <div className="formQuestion">Your age</div>
          <InputRadio name="ageGroup" label="0 to 60" value="0060" onClick={handleInput}/>
          <InputRadio name="ageGroup" label="60 to 80" value="6080" onClick={handleInput}/>
          <InputRadio name="ageGroup" label="80 & above" value="8000" onClick={handleInput}/>
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
        <div id="section4" class="col-sm-8">
          {totalIncomeTaxOld - totalIncomeTaxNew>0?
          <div className="taxResult">XSeed Finance suggests you to opt for New Tax Regime as it save you tax of worth<br /> <b>Rs. {totalIncomeTaxOld - totalIncomeTaxNew}</b> over the Old Regime</div>
          :
          <div className="taxResult">XSeed Finance suggests you to opt for Old Tax Regime as it save you tax of worth<br /> <b>Rs. {stats.totalIncomeTaxNew - totalIncomeTaxOld}</b> over the New Regime</div>
          
        }
          <TableData3 col2={headingOld} col3={headingNew} bgColor="#91BCE5" fontWt2="600" fontWt3="600"/>
          <TableData3 col1="Total Income" col2={totalIncome} col3={totalIncome} bgColor="#add2f7" fontWt1="600"/>

          <div onClick={handleDeduction}>
          <TableData3 col1="Total Deductions" col2={totalDeductionsOld} col3={totalDeductionsNew} bgColor="#add2f7" fontWt1="600" fontWt2="600" fontWt3="600" icon={<i class="fa-sharp fa-solid fa-caret-down"></i>} cursor="pointer"/>
          </div>
          <div id="deductions">
          <TableData3  col1="Exempt Allowances" col2={stats.exemptAllowance} col3={0} bgColor="#91BCE5" />
          <TableData3  col1="Standard Deductions" col2={standardDeduction} col3={standardDeduction} bgColor="#add2f7" />
          <TableData3  col1="Chapter VI A Deductions" col2={VIAdeductions} col3={0} bgColor="#91BCE5" />
          </div>

          <TableData3 col1="Taxable Income" col2={taxableIncomeOld} col3={taxableIncomeNew} bgColor="#91BCE5" fontWt1="600" fontWt2="600" fontWt3="600"/>
          <div onClick={handleIncomeTax}>
          <TableData3 col1="Total Income Tax" col2={totalIncomeTaxOld} col3={totalIncomeTaxNew} bgColor="#54a2f0" fontWt1="600" fontWt2="600" fontWt3="600" icon={<i class="fa-sharp fa-solid fa-caret-down"></i>} cursor="pointer"/>
          </div>
          <div id="incomeTax">
          <TableData3 col1="Income Tax" col2={incometaxOld} col3={incomeTaxNew} bgColor="#add2f7" />
          <TableData3 col1="Education & Cess Tax" col2={eduTaxOld} col3={eduTaxNew} bgColor="#91BCE5" />
          </div>

          <BlackStrip bgcolor="#F7F7F7"  height="10rem" /> 

        </div>
        <br />
        <br />
        <button type="button" class="btn sectionbtn" id="button" onClick={handleSection}>
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
