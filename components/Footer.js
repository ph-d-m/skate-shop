import Image from "next/image"
import styles from "./modules/Footer.module.css"


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerTop}>
          <div className={styles.footerLogoSocials}>
            <Image 
            src="/img/logo.svg"
            width={150}
            height={80}
            alt="Logo"
            />
              <ul className={styles.footerSocials}>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Discord</li>
              </ul>
          </div>

         
            <form method="post" className={styles.footerNewsletter}>
                <label htmlFor="email" >Subscribe to our newsletter&nbsp;:</label>
                <div className={styles.inputMail}>
                <input type="email" id="email" name="email" required placeholder="E-mail&nbsp;: " size="30"></input>
                <button type="submit" className={styles.submitButton}><span>SEND</span></button>
                </div>
            </form>
        </div>

        <hr className={styles.footerHrOrange}></hr>

        <div className={styles.footerContainerBottom}>
          <div className={styles.footerUtils}>
            <ul className={styles.footerUtilsLinks}>
                  <li>Contact</li>
                  <li>Cookies</li>
                  <li>Legal Notice</li>
                  <li>Terms & conditions</li>
            </ul>
          </div>

          <div className={styles.footerUtilsRight}>
            <span>&copy; jaaj skateboards 2022</span>
            <div className={styles.footerPayement}>
              <Image src="/img/payement/mastercard.svg" width={100} height={15} alt="Payement"/>
              <Image src="/img/payement/Bancontact.svg" width={100} height={15} alt="Payement"/>
              <Image src="/img/payement/Paypal.svg" width={60} height={15} alt="Payement"/>
              <Image src="/img/payement/Visa.svg" width={50} height={15} alt="Payement"/>
            </div>
          </div>
        </div>

      </div>
    </footer>

  )
}