
import styles from './modules/Video.module.css'
import Marquee from './Marquee'
import { useRef, useEffect } from "react";


export default function HeaderVideo() {

    // store a reference to the box div
  const boxRef = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.from(boxRef.current, { y: "+=100", autoAlpha: 0, delay: "500ms" });
  });

    return (
        <section className={styles.containerVideo}>
            <video className={styles.video} muted loop autoPlay ref={boxRef}>
               <source src="jaajskateboard-small.mp4" type="video/mp4" />
               <source src="jaajskateboard-small.webm" type="video/webm" />
             </video>
             <Marquee/>
        </section>
    )
}