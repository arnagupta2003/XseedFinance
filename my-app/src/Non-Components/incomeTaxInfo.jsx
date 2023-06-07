import React from "react";
import "../css/sipCalculator.css";

export default function Info1() {
  return (
    <div class="Info">
      <h5 class="infoHead"> What is Income Tax Calculator?</h5>
      The Income tax calculator is an easy-to-use online tool that helps you
      estimate your taxes based on your income after the Union Budget is
      presented. We have updated our tool in line with the income tax changes
      proposed in the Union Budget 2023-24.
      <br />
      <br />
      <h5 class="infoHead">
        {" "}
        How to use the Income tax calculator for FY 2023-24 (AY 2024-25)?
      </h5>
      Following are the steps to use the tax calculator: 1. Choose the financial
      year for which you want your taxes to be calculated.
      <br />
      2. Select your age accordingly. Tax liability in India differs based on
      the age groups.
      <br />
      3. Click on 'Go to Next Step'
      <br />
      4. Enter your taxable salary i.e. salary after deducting various
      exemptions such as HRA, LTA and so on. (if you want to know your tax
      liability under the old tax slabs)
      <br />
      Or else, just enter your salary i.e salary without availing exemptions
      such as HRA, LTA, professional tax and so on. (if you want to know your
      tax liability under the new tax slabs)
      <br />
      5. Along with taxable salary, you must enter other details such as
      interest income, rental income, interest paid on home loan for rented, and
      interest paid on loan for self occupied property.
      <br />
      6. For Income from Digital Assets, enter the net income ( Sale
      consideration less Cost of Acquisition), such income is taxed at 30% Plus
      applicable surcharge and cess.
      <br />
      7. Click on 'Go to Next Step' again.
      <br />
      8. In case, you want to calculate your taxes under the old tax slabs,you
      will have to enter your tax saving investments under section 80C, 80D,
      80G, 80E and 80TTA.
      <br />
      9. Click on 'Calculate' to get your tax liability. You will also be able
      to see a comparison of your pre-budget and post-budget tax liability (old
      tax slabs and new tax slabs).
      <br />
      Note: Whichever field is not applicable, you can enter "0".
      <br />
      You can even get your tax computation on your mail.
    </div>
  );
}

export function Info2() {
  return (
    <div class="Info">
      <h5 class="infoHead">Frequently Asked Questions (FAQs)</h5>
      <br />
      <div class="formQuestion">
        What is the maximum non-taxable income limit?
      </div>
      In the case of the old regime, The maximum limit of non-taxable income for
      an individual was set at Rs 2.5 lakh. However, you can also get a rebate
      of Rs 2,500 under section 87A if you have a total income of up to Rs 3.5
      lacs for FY 2018-19. From FY 2019-20 onwards, the rebate has been
      increased to Rs 12,500 for an income up to Rs 5 lakh. So, that means an
      individual earning up to 5 lakh will not be required to pay any income tax
      from FY 2019-20 onwards. If you have tax saving investments under section
      80C of up to Rs 1.5 lakh then you will not have to pay any taxes till Rs
      6.5 lakhs In the budget 2023, In case of New Regime, The maximum limit of
      non-taxable income for an individual is set at Rs 3 lakh. However, you can
      also get a rebate of Rs 25000 under section 87A if you have a total income
      of up to Rs 7 lacs for FY 2023-24. So, that means an individual earning up
      to 7 lakh will not be required to pay any income tax from FY 2023-24
      onwards. However, in the case of the old regime, the limit for rebate
      under section 87A is still 5 lakhs.
      <br />
      <br />
      <div class="formQuestion">
        Does everyone have to file their income tax returns?
      </div>
      If the income of an individual is below the basic exemption limit then he
      is not required to file income tax returns. Though those who have income
      less than Rs 2.5L(old regime) or 3L(New Regime) and want to claim an
      income tax refund can only claim the refund by filing an ITR. Otherwise,
      it is mandatory to file income tax returns in any other case.
      <br />
      <br />
      <div class="formQuestion">
        Does the income tax calculator calculate for TDS?
      </div>
      No, the income tax calculator does not compute the Tax Deducted at Source
      (TDS). However, it calculates your tax liability for the assessment year.
      <br />
      <br />
      <div class="formQuestion">
        What are the details you need when you're e-filing your income tax
        returns?
      </div>
      1. Basic information such as PAN, Aadhar Card details, and current
      address.
      <br />
      2. All the bank account details held in a financial year.
      <br />
      3. Income proofs like current salary details, income from investments
      (like FDs, savings bank account) etc.
      <br />
      4. All the deductions claimed under Section 80 or Chapter VI-A.
      <br />
      5. Tax payment details such as TDS and advance tax payments.
    </div>
  );
}
