import React from "react";
import "../css/sipCalculator.css";
import InputRangeLeft, { InputRangeRight } from "../Components/rangeInput";
import NavBar from "../Components/navbar";
import DoughnutChart from "../Components/doughnut";
import Footer from "../Components/footer";
import BlackStrip from "../Components/blackStrip";
import TableData from "../Components/tableData";
import SipInfo from "./sipCalInfo";

function SipCal() {
  const [stats, setStats] = React.useState({
    monthlyInvestment: 500,
    interestRate: 1,
    timePeriod: 1,
  });
  const rate = stats.interestRate / 1200;
  const totalInvestment = stats.monthlyInvestment * stats.timePeriod * 12;
  var returnAmt =
    stats.monthlyInvestment *
    (Math.pow(1 + rate, stats.timePeriod * 12) - 1) *
    ((1 + rate) / rate);

  // data for doughnut chart
  const data = {
    labels: ["Invested Amount", "Estd. Return"],
    datasets: [
      {
        label: "SIP Calculation",
        data: [totalInvestment, returnAmt - totalInvestment],
        borderColor: ["black"],
        backgroundColor: ["#91BCE5", "#0E2A40"],
        pointBackgroundColor: "red",
      },
    ],
  };
  // options for doughnut chart
  const options = {
    plugins: {
      title: {
        display: true,
        text: "SIP Calculator",
        color: "black",
        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };

  function handleChange(event) {
    const { name, value } = event.target;
    return setStats((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <BlackStrip bgcolor="#1e1b1b" height="2.2em" />
      <NavBar />

      <div class="sipContainer">
        <div class="heading">
          <h4>SIP Calculator</h4>
          <h6>Find your maturity amount easily !!</h6>
        </div>
        <div class="row stats">
          <div class="col-sm-12 col-md-5 align-self-center">
            <InputRangeLeft
              label="Monthly Investment"
              id="customRange1"
              name="monthlyInvestment"
              unit="₹"
              rangeOutput={stats.monthlyInvestment}
              onChange={handleChange}
              min="500"
              max="100000"
              step="500"
            />
            
            <InputRangeRight
              label="Expected return rate (p.a.)"
              id="customRange2"
              name="interestRate"
              unit="%"
              rangeOutput={stats.interestRate}
              onChange={handleChange}
              min="1"
              max="30"
              step="1"
            />
            
            <InputRangeRight
              label="Time Period"
              id="customRange3"
              name="timePeriod"
              unit="Yr"
              rangeOutput={stats.timePeriod}
              onChange={handleChange}
              min="1"
              max="40"
              step="1"
            />
            <br />
            <TableData title="Investment Amount" unit="₹" data={totalInvestment} />
            <TableData title="Est. Returns" unit="₹" data={(returnAmt - totalInvestment).toFixed(2)} />
            <TableData title="Total Value" unit="₹" data={returnAmt.toFixed(2)} />
          </div>

          {/* for chart--> */}
          <div class="col-sm-12 col-md-6" id="pie">
            <DoughnutChart data={data} options={options} />
          </div>
        </div>
      </div>
      <SipInfo />
      <Footer />
    </div>
  );
}

export default SipCal;
