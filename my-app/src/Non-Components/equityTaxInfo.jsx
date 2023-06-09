import React from "react";

export default function EquityTaxInfo() {
  return (
    <div className="Info">
      <h5 class="infoHead">What is LTCG? </h5>
      <ul>
        <li>
          Long-term capital gains tax is levied on the capital gains from shares
          and equity-oriented mutual funds, that are held for one year or more.
        </li>
        <li>
          The long-term capital gains tax is charged at the rate of 10%, on the
          gains above Rs 1 lakh in a financial year. Short-term capital gains
          tax is charged at the rate of 15%.
        </li>
        <li>
          The LTCG or long-term capital gains tax is charged on the profit
          generated from an asset such as shares, bonds, commodities, or real
          estate that is held for the long-term.
        </li>
        <li>
          The period of holding, which is ‘short term’ or ‘long term’ differs
          across various assets. It is defined as per the Income Tax Act, 1961.
        </li>
      </ul>
      <br />
      <br />
      <h5 class="infoHead">How Does LTCG Calculators Work? </h5>
      You can understand the working of an LTCG calculator with this example.
      You purchased 200 shares of XYZ Company Ltd at Rs 1,000 per share in May
      2018. You sold all the 200 shares at Rs 1,800 per share in January 2020.
      <br />
      You have held the shares for more than one year. The profit of Rs 1,60,000
      (200*1800 – 200*1000) is called long-term capital gains.
      <br />
      You have to pay the long-term capital gains tax on the gains that are
      above Rs 1 lakh in a financial year. You have the LTCG tax on Rs 60,000.
      (Rs 1,60,000 – Rs 1,00,000) at 10%. You pay a long-term capital gains tax
      of Rs 6,000. (Rs 60,000@10%).
      <br />
      Suppose you sold the 200 shares in January 2019 when the share price was
      Rs 1,500 per share. The total purchase value of your 200 shares in May
      2018 was Rs 2,00,000. You have held the shares for less than one year. The
      profit of Rs 1,00,000 (200*1500 – 200*1000) is called short-term capital
      gains.
      <br />
      You must pay short-term capital gains tax at 15% on the short-term capital
      gains which is Rs 1,00,000 *15% = Rs 15,000.
      <br />
      The announcement for the introduction of the long-term capital gains tax
      on equity-oriented instruments and shares was made during the Union Budget
      2018. The new rule was applicable for all the transactions that are made
      on or after 01 April 2018.
      <br />
      <br />
      <br />
      <h5 class="infoHead">How to Use the Xseed Finance LTCG Calculator?</h5>
      <ul>
        <li>
          You must choose the period when you sold the shares or equity-oriented
          mutual fund units. If you select before 31 March 2018, there is no
          long-term capital gains tax on the investment. If you choose after 01
          April 2018, you will incur a long-term capital gains tax.
        </li>
        <li>
          You then select the holding period as less than one year if you have
          held the investment for the requisite period.
        </li>
        <li>
          You must enter the sale value and the purchase value of the
          investment.
        </li>
        <li>
          The Xseed Finance LTCG Calculator will show you the short-term capital
          gain and STCG taxes.
        </li>
        <li>
          You must select the holding period as more than one year if you have
          invested for this duration.
        </li>
        <li>You then select the sale value of the investment.</li>
        <li>
          You must select the date of purchase of the units as after 31 January
          2018 or before 31 January 2018 as applicable.
        </li>
        <li>
          If you select the latter option, the calculator will ask you for the
          fair market value.
        </li>
        <li>
          The Xseed Finance LTCG Calculator will show you the long-term capital
          gain and LTCG taxes.
        </li>
      </ul>
    </div>
  );
}
