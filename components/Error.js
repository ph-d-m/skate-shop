import Link from "next/link"
import styles from './modules/CustomError.module.css'

export default function CustomError() {
    return (
        <section className={styles.error}>
            <div className={styles.return}>
                <h1 className={styles.errorTitle}>ERROR 404</h1>
                <Link href="/" passHref><button type="button"><span>Home</span></button></Link>
            </div>
        </section>
    )
}