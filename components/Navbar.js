import Link from 'next/link'
import Dropdown from './Dropdown'
import styles from './modules/Navbar.module.css'
import Logo from './Logo'
import Basket from './Basket'


export default function Navbar() {

    return (
        <nav className={styles.navBar} >
            <div className='container hidden lg:block' >
                <ul className={styles.navBarLinks}>
                    <li>
                        <Link href="/shop">
                            <a>
                                Shop All
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/lookbook">
                            <a>
                                Lookbook
                            </a>
                        </Link>
                    </li>
                    <li >
                        <Link href="/infos">
                            <a>
                                Infos
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>

            <Dropdown/>
            
            <div className='container flex justify-center'>
                <Link href="/" passHref>
                    <a className="logo" aria-label="Home">
                        <Logo/>
                    </a>
                </Link>
            </div>
            <div className='container flex justify-end relative'>
                <Basket/>
                <div className={styles.basketNumber}>
                    <span className={styles.number}>0</span>
                </div>
            </div>
        </nav>
    )
}