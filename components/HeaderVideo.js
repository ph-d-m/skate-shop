
import styles from './modules/Video.module.css'
import Marquee from './Marquee'


export default function HeaderVideo() {

    return (
        <section className={styles.containerVideo}>
            <video className={styles.video} muted loop autoPlay preload='metadata' playsInline>
               <source src="jaajskateboard-small.mp4" type="video/mp4" />
               <source src="jaajskateboard-small.webm" type="video/webm" />
             </video>
             <Marquee/>
        </section>
    )
}