import React from "react";
import '../css/sipCalculator.css'

export default function SipInfo(){
    return (
        <div class="Info">
        <h5 class="infoHead">What is SIP Calculator?</h5> 
        SIP calculator is a simulation, which allows you
        to estimate the return on mutual fund investments made through SIP.
        Investing through SIPs in mutual funds is a popular investment option
        for millennials. SIP calculators are designed to give potential
        investors a heads up on their mutual fund investments. However, the
        actual return from the mutual fund scheme varies depending on several
        factors. The SIP calculator does not account for the exit load and
        expense ratio (if any). It is an online tool to calculate the SIP amount
        to achieve your financial goals, based on an expected annual return. 
        <br /><br />
        <h5 class="infoHead">How does SIP Calculator work? </h5>
        A SIP plan calculator works by the values
        entered by the users. You must enter the amount of investment, frequency
        of investment, duration of investment, and the expected returns. The SIP
        return calculator is designed based on the compound interest formula.
        The compounded interest powers the mutual fund returns. ClearTax SIP
        Calculator shows the comparison of the returns offered by mutual funds
        with fixed deposits. 
        <br />You can understand the workings of a SIP calculator
        with this formula. <br /><br />
        <b>FV = P [ (1+i)^n-1 ] * (1+i)/i</b>
        <br />FV = Future value or
        the amount you get at maturity. 
        <br />P = Amount you invest through SIP 
        <br />i = Compounded rate of return 
        <br />n = Investment duration in months 
        <br />r = Expected rate of return 
        <br /><br />Take an example where you invest Rs 2,000 per month for a
        tenure of 24 months. You expect a 12% annual rate of return (r). You
        have i = r/100/12 or 0.01. 
        <br />FV = 2000 * [(1+0.01) ^24 - 1] *
        (1+0.01)/0.01 
        <br />You get Rs 54,486 at maturity.
      </div>
    );
}