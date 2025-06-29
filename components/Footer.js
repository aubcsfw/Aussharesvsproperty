import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>

    <a href="https://aubcsfw.github.io/clone1.html">Not working? Try clone 1. Each clone gets 300 uses/ mo</a>
    <a href="https://github.com/aubcsfw/aussharesvsproperty/pages/clone2.html">Still? Try clone 2. Each clone gets 300 uses/ mo</a>
    <a href="https://github.com/aubcsfw/aussharesvsproperty/pages/index.js">Back to index</a>
      <footer className={styles.footer}>
    <img src="https://raw.githubusercontent.com/aubcsfw/Aussharesvsproperty/refs/heads/main/Coffee.jpg" alt="Thanks" className={styles.logo} />
      </footer>
    </>
  )
}
