import Image from "next/image"
import Marquee from "./Marquee"
import styles from "./modules/Infos.module.css"

export default function Content() {
    return (
        <>
        <section className={styles.sectionInfos}>
            <div>
            <Image
            src='/img/logo.svg'
            width={800}
            height={200}
            alt="Logo"
            className='object-fill aspect-auto'
            />
            </div>
            <Marquee />
        </section>
            
        <section className={styles.sectionAbout}>
            <div className={styles.aboutUs}>
                <h1 className={styles.aboutUsTitle}>About us</h1>
                <p className={styles.aboutUsText}>We are a belgian newcomer’s skate brand and we only have one rule: have fun.</p>
                <p className={styles.aboutUsText}>We are here to make a brand who can make everyone good about themself.</p>
            </div>
        </section>

        <section className={styles.sectionExplanation}>
                <div className={styles.containerHistory}>
                    <div className={styles.textHistory}>
                        <h1 className={styles.title}>What is JAAJ ?</h1>
                        <div className={styles.text}>
                        <p className={styles.paragraph}>Found during the COVID-19 pandemic, jaaj is the project of a group of friends which find piece
                           during this period by discovering to joy to go outside and surpass there limits.</p>

                        <p className={styles.paragraph}>The name on himself means nothing, it’s only a word that express something that we find cool,
                             like landing a trick we never did before.</p>

                        <p className={styles.paragraph}>We are inspired by the old school era of skate but also everything around that culture 
                            starting from music to fashion.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.visualInfos}></div>
         </section>
        </>
    )
}