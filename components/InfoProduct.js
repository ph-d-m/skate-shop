import Image from "next/image"
import Logo from "./Logo"
import styles from "./modules/ProductDetails.module.css"

export default function InfoProduct() {
    return (
        <>
        <section className={styles.sectionInfoProduct}>
  <div className={styles.technicals}>
    <div className={styles.technicalsContainer}>
      <h1>Product Info</h1>
      <div className={styles.listInfosContainer}>
        <div className={styles.listInfos1}>
          <div className={styles.listInfosText}>
            <Image src="/img/icons/t-shirt.png" width={40} height={40} />
            <p>Made in Portugal. <br/>95% organic coton and weight 180grs.</p>
          </div>
          <div className={styles.listInfosText}>
            <Image src="/img/icons/shipping.png" width={40} height={40} />
              <p>Only in Europe<br/>Delivery time: Minimum 3 - 5 days</p>
          </div>
          <div className={styles.listInfosText}>
            <Image src="/img/icons/return.png" width={40} height={40} />
              <p>We accept returns and repayments<br/>See the conditions</p>
          </div>
          <div className={styles.listInfosText}>
            <Image src="/img/icons/recycle.png" width={40} height={40} />
              <p>For responsable living</p>
          </div>
        </div>

        <div className={styles.listInfos2}>
            <div className={styles.listInfosText}>
              <Image src="/img/icons/bleaching.png" width={40} height={40} />
                <p>Do not use chlorine-based bleach</p>
            </div>
            <div className={styles.listInfosText}>
              <Image src="/img/icons/dry-clean.png" width={40} height={40}/>
                <p>Do not dry clean <br/>or use solvents to remove stains</p>
            </div>
            <div className={styles.listInfosText}>
              <Image src="/img/icons/ironing.png" width={40} height={40} />
                <p>Max. ironing temperature (110° C)<br/>Take care when steam ironing</p>
            </div>
            <div className={styles.listInfosText}>
              <Image src="/img/icons/wash.png" width={40} height={40} />
                <p>Machine wash on wool/delicates cycle<br/>Maximum. 30° C</p>
            </div>
        </div>
      </div>
    </div>
    <div className={styles.resizeLogo}>
      <Logo/>
    </div>
  </div>
</section> 
        </>
    )
}