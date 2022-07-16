import styles from "./modules/Marquee.module.css"

export default function Marquee() {

    return (
    <div className={styles.marquee}>
          <div className={styles.marqueeAnimation}>
            <span>jaaj, for everything!</span>
            <span>jaaj, for everything!</span>
            <span>jaaj, for everything!</span>
            <span>jaaj, for everything!</span>
            <span>jaaj, for everything!</span>
          </div>
        </div>
    )
}