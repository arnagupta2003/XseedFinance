import React, { useEffect } from "react";
import "../css/sipCalculator.css";
import { InputNumberLeft, InputNumberRight } from "../Components/formInput";
import NavBar from "../Components/navbar";
import DoughnutChart from "../Components/doughnut";
import Footer from "../Components/footer";
import BlackStrip from "../Components/blackStrip";
import TableData from "../Components/tableData";
import CryptoInfo from "./cryptoInfo";

export default function CryptoCal() {
  const [stats, setStats] = React.useState({
    salePrice: 1500000,
    purchasePrice: 1000000,
    monthlySaving: 0,
    interestRate: 1,
  });
  var profit = stats.salePrice-stats.purchasePrice;
  var profitLossColor="green";
  var tax=profit*0.3;
  var netReturn=profit-tax;
  if(profit<=0){
    tax=0;
    profitLossColor="red";
    netReturn=0;
  }
  // data for doughnut chart
  const data = {
    labels: ["Investment", "Net Return"],
    datasets: [
      {
        label: "Crypto Tax Calculation",
        data: [stats.purchasePrice,netReturn],
        borderColor: ["black"],
        backgroundColor: ["#2D4D76", "#74ADD1"],
        pointBackgroundColor: "red",
      },
    ],
  };
  // options for doughnut chart
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Crypto Tax Calculator",
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
          <h4 class="calHeading">Crypto Assets Tax Calculator</h4>
          <h6 class="calTagline">Crypto is the new currency</h6>
        </div>
        <div class="row stats">
          <div class="col-sm-12 col-md-7 align-self-center">
            <InputNumberLeft
              label="Enter sale price of Crypto Assets"
              id="customRange4"
              name="salePrice"
              unit="₹"
              onInput={handleInput}
              // min="0"
              value={stats.salePrice}
            />
            <InputNumberLeft
              label="Enter purchase price of Crypto Assets"
              id="customRange3"
              name="purchasePrice"
              unit="₹"
              onInput={handleInput}
              min="0"
              value={stats.purchasePrice}
            />

            <br />
            <TableData title="Profit/Loss from the transfer of Crypto Assets" unit="₹" data={profit} style={{color:profitLossColor}}/>
            <TableData title="The tax you need to pay" unit="₹" data={tax} />
            <TableData title="The net return from Crypto" unit="₹" data={netReturn} />
          </div>

          {/* for chart--> */}
          <div class="col-sm-12 col-md-4" id="pie">
            <DoughnutChart data={data} options={options} />
          </div>
        </div>
      </div>
      <CryptoInfo />
      <Footer />
    </div>
  );
}
