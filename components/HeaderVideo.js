import Marquee from './Marquee'
import Image from 'next/image'
import styles from './modules/Video.module.css'

export default function HeaderVideo({children}) {
    return (
        <section className={styles.containerVideo}>
            <video className={styles.video} muted loop autoPlay>
               <source src="jaajskateboard-small.mp4" type="video/mp4" />
               <source src="jaajskateboard-small.webm" type="video/webm" />
               Sorry, your browser doesn't support embedded videos.
             </video>
                {/* <div className="buttonVideo">
                    <Image src="/img/Pause.svg" width={28} height={28} alt="Play/Pause" />
                </div> 
             <Marquee />*/}
        </section>
    )
}