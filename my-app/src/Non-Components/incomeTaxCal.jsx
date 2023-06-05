import React from "react";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";
import IncomeTaxInfo from "./IncomeTaxInfo";
import BlackStrip from "../Components/blackStrip";
import { Link } from "react-router-dom";

export default function IncomeTax(){
    return (
        <div>
            <BlackStrip bgcolor="#1e1b1b" height="2.2em" />
            <NavBar />
            <div class="sipContainer">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {/* <li class="page-item"><Link class="page-link" to="">Previous</Link></li> */}
                        <li class="page-item"><Link class="page-link" to="/incomeTax">1</Link></li>
                        <li class="page-item"><Link class="page-link" to="/incomeTax/section2">2</Link></li>
                        <li class="page-item"><Link class="page-link" to="/incomeTax/section3">3</Link></li>
                        <li class="page-item"><Link class="page-link" to="/incomeTax/section4">4</Link></li>
                    </ul>
                </nav>
            </div>
            <IncomeTaxInfo />
            <Footer />
        </div>
    );
}

// function 