import React, { useEffect } from "react";
import "../css/sipCalculator.css";
import { InputNumberLeft, InputNumberRight } from "../Components/formInput";
import NavBar from "../Components/navbar";
import DoughnutChart from "../Components/doughnut";
import Footer from "../Components/footer";
import BlackStrip from "../Components/blackStrip";
import TableData from "../Components/tableData";
import DreamCalInfo from "./dreamCalInfo";

export default function DreamCal() {
  const [stats, setStats] = React.useState({
    dreamPrice: 0,
    initialSaving: 0,
    monthlySaving: 0,
    interestRate: 1,
  });
  const timePeriod = 2;
  // data for doughnut chart
  const monthlyContri = stats.monthlySaving * 2,
    interestEarned = (stats.initialSaving * stats.interestRate * 2) / 100;
  const data = {
    labels: ["Initial Saving", "Monthly Contribution", "Interest Earned"],
    datasets: [
      {
        label: "Dream Come True Calculation",
        data: [stats.initialSaving, monthlyContri, interestEarned],
        borderColor: ["black"],
        backgroundColor: ["#2D4D76", "#74ADD1", "#4575B4"],
        pointBackgroundColor: "red",
      },
    ],
  };
  // options for doughnut chart
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Dream Come True Calculator",
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
  function handlClick() {
    if (
      stats.dreamPrice < 0 ||
      stats.initialSaving < 0 ||
      stats.monthlySaving < 0 ||
      stats.interestRate < 0
    ) {
      alert("Please enter valid input");
    }
    if (stats.dreamPrice < stats.initialSaving) {
      alert("You already have enough money");
    }
  }
  function handleInput(event) {
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
          <h4 class="calHeading">Dream Come True Calculator</h4>
          <h6 class="calTagline">How long do I have to save to afford my dreams?</h6>
        </div>
        <div class="row stats">
          <div class="col-sm-12 col-md-5 align-self-center">
            <InputNumberLeft
              label="Price Tag on Your Dream"
              id="customRange4"
              name="dreamPrice"
              unit="₹"
              onInput={handleInput}
              min="0"
              value={stats.dreamPrice}
            />
            <InputNumberLeft
              label="Initial Saving"
              id="customRange3"
              name="initialSaving"
              unit="₹"
              onInput={handleInput}
              min="0"
              value={stats.initialSaving}
            />
            <InputNumberLeft
              label="Monthly Saving"
              id="customRange1"
              name="monthlySaving"
              unit="₹"
              onInput={handleInput}
              min="0"
              value={stats.monthlySaving}
            />

            <InputNumberRight
              label="Expected return rate (p.a.)"
              id="customRange2"
              name="interestRate"
              unit="%"
              onInput={handleInput}
              min="1"
              value={stats.interestRate}
            />

            <InputNumberRight
              label="Time Period Required"
              id="customRange5"
              name="timePeriod"
              unit="months"
              onInput={handleInput}
              min="1"
              value={timePeriod}
            />

            <br />
            <button type="button" class="btn dreambtn" onClick={handlClick}><b>Calculate</b></button>
          </div>

          {/* for chart--> */}
          <div class="col-sm-12 col-md-6" id="pie">
            <DoughnutChart data={data} options={options} />
          </div>
        </div>
      </div>
      <DreamCalInfo />
      <Footer />
    </div>
  );
}
