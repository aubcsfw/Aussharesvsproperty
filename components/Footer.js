import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
    <p className="description"> Assumptions. <br> </p>
    <p> You will invest. <br>For  Pay Down Debt  vs  Invest, see  getsmarteraboutmoney.ca/calculators/pay-down-debt-or-invest-calculator/ <br>
Initial funds include purchase costs, inc. stamp duty etc. <br>
Share dividends are reinvested. <br>
Property value growth based on  1992 - 2022 CoreLogic figures. <br>
Rental yield based on 2009 - 2025 SQM Research figures. <br>
You sell the whole investment at the end. <br>
For model fairness, if you need to additional funds regularly to pay the property loan, then the same amounts are added fortnightly to buy more shares.  These amounts vary fortnt to fortnt for property, but are kept consistent for shares. <br>
If cumulative property holding cashflow becomes positive, then from that fortnight on, the cashflow will be taxed, then invested in your selected ETF. <br> </p>
        <p><img src="https://raw.githubusercontent.com/aubcsfw/Aussharesvsproperty/refs/heads/main/Coffee.jpg" alt="Thanks" className={styles.logo} /></p>
      </footer>
    </>
  )
}
