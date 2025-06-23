import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
    <p className="description"> Assumptions </p>
    <p className="description"> You will invest. For  Pay Down Debt  vs  Invest, see  getsmarteraboutmoney.ca/calculators/pay-down-debt-or-invest-calculator/
Initial funds include purchase costs, inc. stamp duty etc.
Share dividends are reinvested.
Property value growth based on  1992 - 2022 CoreLogic figures.
Rental yield based on 2009 - 2025 SQM Research figures.
You sell the whole investment at the end.
For model fairness, if you need to additional funds regularly to pay the property loan, then the same amounts are added fortnightly to buy more shares.  These amounts vary fortnt to fortnt for property, but are kept consistent for shares.
If cumulative property holding cashflow becomes positive, then from that fortnight on, the cashflow will be taxed, then invested in your selected ETF. </p>
        <img src="https://raw.githubusercontent.com/aubcsfw/Aussharesvsproperty/refs/heads/main/Coffee.jpg" alt="Thanks" className={styles.logo} />
      </footer>
    </>
  )
}
