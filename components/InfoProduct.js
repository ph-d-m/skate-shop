import Image from "next/image"
import Logo from "./Logo"
import styles from "./modules/ProductDetails.module.css"

export default function InfoProduct() {
    return (
        
        <section className={styles.sectionInfoProduct}>
  <div className={styles.technicals}>
    <div className={styles.resizeLogo}>
      <Logo/>
    </div>
  </div>
</section> 
    )
}