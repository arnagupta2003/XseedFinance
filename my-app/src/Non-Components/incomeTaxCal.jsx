import React, { useState,useEffect } from "react";
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


    const [flag,setFlag]=useState(1);
    const [pageNo,setPageNo]=useState(1);

    useEffect(() => {
        if(pageNo<=3){
            document.getElementById("button").innerHTML="Next";
        }else{
            document.getElementById("button").innerHTML="Try Again";
        }
    });

    function handleSection(event){
        console.log("Clicked");
        var pg=event.target.value;
        if(flag){
            setFlag(0);
            pg=1;
        }
        if(pg>4){
            pg=1;
        }
        setPageNo(pg);
        console.log(pg+"click")
        console.log(pageNo+"ad");
        for(var i=1;i<=4;i++){
            var sec="section"+i;
            if(i==pg){
                document.getElementById(sec).style.visibility="visible";
            }else{
                document.getElementById(sec).style.visibility="hidden";
            }
        }
        // return setPageNo(pg);
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
                        <li class="page-item page-link pagno" onClick={handleSection} value={1}>1</li>
                        <li class="page-item page-link pagno" onClick={handleSection} value={2}>2</li>
                        <li class="page-item page-link pagno" onClick={handleSection} value={3}>3</li>
                        <li class="page-item page-link pagno" onClick={handleSection} value={4}>4</li>
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
                <div id="section2" style={{position:"absolute"}} class="col-md-4">
                    {incomeDetails.map((data)=>(
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

                <div id="section3" style={{position:"absolute"}} class="col-md-4">
                    {deductions.map((data)=>(
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

                <div id="section4" class="col-md-6" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro fuga dignissimos, obcaecati illum esse. Quasi obcaecati ducimus ea id accusamus nobis architecto iste. Soluta est natus ea ut perferendis necessitatibus magnam nihil maiores eius laborum iure vitae voluptate amet laboriosam explicabo in, perspiciatis aliquam tempora veniam, facilis aperiam eveniet! Numquam in, vel iure modi tenetur harum magni molestiae, non cum nam ad possimus optio inventore? Debitis doloribus blanditiis quos magnam sunt eum tempora suscipit, dicta maxime totam sed obcaecati perspiciatis, adipisci modi autem dolor quae! Dolore earum, reiciendis magnam numquam placeat minus maxime fugiat, dolorum inventore hic pariatur accusamus? Suscipit in voluptatibus repellendus optio. Assumenda error odit maiores numquam temporibus sequi nesciunt, illo facere fugiat obcaecati mollitia non at, vel adipisci et in voluptas quasi commodi? Ullam tenetur quae non temporibus veniam deserunt architecto libero soluta consequuntur, alias earum ducimus quod accusamus doloribus, autem fugit aliquam voluptate quo atque ratione quas. Enim, illo nihil. Alias at quo vero quis non officia eius qui commodi rem saepe minima reprehenderit eaque quas dicta molestiae laborum, voluptatem amet quidem ipsum sed quam. Voluptatum, unde neque? Eaque deserunt, neque, voluptatibus eligendi numquam saepe repellendus a nulla distinctio quae vel consequatur deleniti porro similique.
                </div>
                <br /><br />
                <button type="button" class="btn btn-primary" id="button" onClick={handleSection} value={pageNo+1}>Next</button>
                <br /><br />
                

            </div>
            <br /><br /><br /><br />
            <Footer />
        </div>
    );

    
}
