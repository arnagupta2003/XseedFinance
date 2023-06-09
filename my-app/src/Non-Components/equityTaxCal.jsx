import React, { useState } from "react";
import BlackStrip from "../Components/blackStrip";
import NavBar from "../Components/navbar";
import Footer from "../Components/footer";
import EquityTaxInfo from "./equityTaxInfo";
import { InputNumberLeft, InputRadio } from "../Components/formInput";

export default function EquityTaxCal() {
  const [stats, setStats] = useState({
    sellYear: "",
    holdingPeriod: "",
    salePrice: 0,
    purchasePrice: 0,
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
  var result = "";
  var tax = 10;
  var exemption = 0;
  var profit = Number(stats.salePrice) - Number(stats.purchasePrice);
  console.log(profit);
  if (profit > 0) {
    if (stats.holdingPeriod == "less") {
      tax = profit * 0.15;
      result =
        "Short Term Capital Gain of ₹" +
        profit +
        " is chargeable to tax @ 15% i.e ₹" +
        tax;
    } else {
      if (stats.sellYear == "before") {
        result =
          "Long Term Capital Gain of ₹" + profit + " is exempt u/s 10(38)";
      } else {
        if (profit > 100000) {
          profit = profit - 100000;
          tax = profit * 0.1;
          exemption = 100000;
          result =
            "Exemption of ₹" +
            exemption +
            " provided.\nLong Term Capital Gain of ₹" +
            profit +
            " is chargeable to tax @ 10% i.e ₹" +
            tax;
        } else {
          exemption = profit;
          result =
            "Exemption of ₹" +
            exemption +
            " provided.\nLong Term Capital Gain of ₹" +
            profit +
            " is free from taxes";
        }
      }
    }
  } else {
    result = "No tax to be paid as there is no gain";
  }

  return (
    <div>
      <BlackStrip bgcolor="#1e1b1b" height="2.2em" />
      <NavBar />
      <div className="sipContainer">
        <div class="heading">
          <h4 class="calHeading">
            LTCG Calculator – Long Term Capital Gains Calculator
          </h4>
          <h6 class="calTagline">
            Find how much tax you need to pay on Shares
          </h6>
        </div>
        <br />
        <br />

        <div className="row">
          <div>
            <div className="formQuestion">
              When did you sell the Equity Shares or Units
            </div>

            <InputRadio
              name="sellYear"
              label="Before 31st March 2018"
              value="before"
              onClick={handleInput}
            />
            <InputRadio
              name="sellYear"
              label="After 1st April 2018"
              value="after"
              onClick={handleInput}
            />
          </div>
          {/* <br /> */}

          <div>
            <div className="formQuestion">
              Holding Period (No of Years Between date of Purchase and sale)
            </div>

            <InputRadio
              name="holdingPeriod"
              label="Less than 1 year"
              value="less"
              onClick={handleInput}
            />
            <InputRadio
              name="holdingPeriod"
              label="1 year or more"
              value="more"
              onClick={handleInput}
            />
          </div>
        </div>

        <br />
        <div class="col-sm-5">
          <InputNumberLeft
            label="Selling Price of the shares/assets"
            id="salePrice"
            name="salePrice"
            unit="₹"
            onInput={handleInput}
            min="0"
            value={stats.salePrice}
          />
          <InputNumberLeft
            label="Purchasing Price of the shares/assets"
            id="purchasePrice"
            name="purchasePrice"
            unit="₹"
            onInput={handleInput}
            min="0"
            value={stats.purchasePrice}
          />
        </div>
        <br />
        <br />
        <br />
        <div class="calTagline">{result}</div>
      </div>
      <br />
      <br />

      <EquityTaxInfo />
      <Footer />
    </div>
  );
}
