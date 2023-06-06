import React, { useState } from "react";
import "../css/sipCalculator.css";
import NavBar from "../Components/navbar";
import BlackStrip from "../Components/blackStrip";
import { InputNumberLeft, InputRadio } from "../Components/formInput";
import { incomeDetails } from "../dataset/incomeSection2";
import { deductions } from "../dataset/incomeSection3";
import Footer from "../Components/footer";


export default function IncomeTaxCal(){
    const [stats,setStats]=useState({
        // financialYear:1,
        // ageGroup:1,
        incomeSalary:0,
        exemptAllowance:0,
        interestIncome:0,
        interestHomeLoanSelfOccupied:0,
        incomeRental:0,
        interestHomeLoanLetOut:0,
        incomeDigitalAssets:0,
        incomeOthers:0,
        deduc80C:0,
        deduc80TTB:0,
        deduc80D:0,
        deduc80G:0,
        deduc80E:0,
        deduc80EEA:0,
        deduc80CCD:0,
    });
    function handleInput(event) {
        const { name, value } = event.target;
        return setStats((prevValue) => {
          return {
            ...prevValue,
            [name]: value,
          };
        });
    }
    
    function handleSection(event){
        console.log("Clicked")
        const id=event?event.target.innerHTML:1;
        console.log(id==3);
        for(var i=1;i<=3;i++){
            var sec="section"+i;
            // console.log(sec);
            if(i==id){
                // console.log(document.getElementById(sec));
                document.getElementById(sec).style.visibility="visible";
            }else{
                // console.log(document.getElementById(sec));
                document.getElementById(sec).style.visibility="hidden";
            }
        }
    }

    return(
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
                        <li class="page-item page-link" onClick={handleSection}>1</li>
                        <li class="page-item page-link" onClick={handleSection}>2</li>
                        <li class="page-item page-link" onClick={handleSection}>3</li>
                        <li class="page-item page-link" onClick={handleSection}>4</li>
                    </ul>
                </nav>
                {/* Section 1 */}
                <div id="section1" style={{position:"absolute"}}>
                    <i>See how the latest budget impacts your tax calculation. Updated as per latest budget on 1 February, 2023.</i>
                    <br /><br />
                    <div className="formQuestion">Which Financial Year do you want to calculate taxes for?</div>
                    <InputRadio name="financialYear" label="FY 2023-2024 Latest Budget (Return to be filed between 1st April 2024 - 31st March 2025)" />
                    <InputRadio name="financialYear" label="FY 2022-2023 (Return to be filed between 1st April 2023 - 31st March 2024)" />
                    
                    <br />
                    <div className="formQuestion">Your age</div>
                    <InputRadio name="ageGroup" label="0 to 60" />
                    <InputRadio name="ageGroup" label="60 to 80" />
                    <InputRadio name="ageGroup" label="80 & above" />
                </div>
                
                
                
                
                {/* Section 2 */}
                <div id="section2" style={{position:"absolute"}}>
                    {incomeDetails.map((data)=>(
                        <InputNumberLeft
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
                {/* {console.log(incomeDetails[0].id)} */}
                

                {/* Section 3 */}

                <div id="section3" >
                    {deductions.map((data)=>(
                        <InputNumberLeft
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
                <br /><br /><br /><br />
                

            </div>
            <br /><br /><br /><br />
            <Footer />
        </div>
    );

    
}
