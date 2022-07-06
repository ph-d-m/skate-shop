
import styles from './modules/Video.module.css'

export default function HeaderVideo({children}) {
    return (
        <section className={styles.containerVideo}>
            <video className={styles.video} muted loop autoPlay>
               <source src="jaajskateboard-small.mp4" type="video/mp4" />
               <source src="jaajskateboard-small.webm" type="video/webm" />
             </video>
        </section>
    )
}