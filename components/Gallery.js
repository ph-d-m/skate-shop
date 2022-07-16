import Link from "next/link"
import styles from "./modules/Gallery.module.css"


export default function Gallery() {
    return (
        <>
        <section className={styles.sectionLook}>
            <div className={styles.Look}>
                <h1 className={styles.titleLook}>
                  &#35;Just go and sk&#64;te&nbsp;!</h1>  
                <p className={styles.textLook}> 
                We're an european skate brand located in Belgium 
                 and we want to share our passion to you</p>
                <Link href="#" passHref>
                   <button><span>Youtube</span></button>
                 </Link>
            </div>
        </section>
        
        </>
    )
}