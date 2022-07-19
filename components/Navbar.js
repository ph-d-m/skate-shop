import Link from 'next/link'
import Image from 'next/image'
import Dropdown from './Dropdown'
import styles from './modules/Navbar.module.css'
import Logo from './Logo'


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
                <Image
                    src="/img/icons/Basket.svg"
                    width={24}
                    height={24}
                    alt="Cart"
                />
                <div className={styles.basketNumber}>
                    <span className={styles.number}>0</span>
                </div>
            </div>
        </nav>
    )
}