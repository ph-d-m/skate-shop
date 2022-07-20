import Link from "next/link"
import styles from "./modules/Gallery.module.css"


export default function Gallery() {
    return (
        <section className={styles.sectionLook}>
            <div className={styles.Look}>
                <h1 className={styles.titleLook}>
                 Take &#64; look</h1>  
                <p className={styles.textLook}> 
                Sometimes we like to take sick pictures and sometimes some videos</p>
                <Link href="#" passHref>
                   <button type="button"><span>Youtube</span></button>
                 </Link>
            </div>
        </section>
    )
}