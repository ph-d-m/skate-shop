import Link from "next/link"
import styles from "./modules/Section.module.css"
export default function CtaLinks() {
    return (
        <section className={styles.sectionCtaInfos}>
         <div className={styles.sectionCtaLearnMore}>
          <div className={styles.sectionCtaContainer}>
            <h1 className={styles.titleCtaInfos}>
              &#35;Just go and sk&#64;te&nbsp;!</h1>  
            <p className={styles.textCtaInfos}> 
            We're an european skate brand located in Belgium 
             and we want to share our passion to you</p>
            <Link href="/infos" passHref>
               <button><span>LEARN MORE</span></button>
             </Link>
             </div>
        </div>

      <Link href="/shop" passHref>
        <div className={styles.sectionCtaShop}>
            <div className={styles.sectionCtaContainer}>
            <h1 className={styles.titleCtaInfos}>
            New collection&nbsp;?</h1>  
            <p className={styles.textCtaInfos}> 
            Discover the new collection including new designs 
            created by ourself and with love&nbsp;&#9825;
            </p>
            <Link href="/shop" passHref>
               <button><span>VIEW</span></button>
             </Link>
             </div>
        </div> 
      </Link>
    </section>
    )
}