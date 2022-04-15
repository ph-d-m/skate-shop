import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-black px-8 py-2 text-orange flex items-center" >
            <div className='container' >
                <ul className='justify-start gap-4 text-lg flex'>
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
            <div className='container flex justify-center'>
                <Image
                    src="/img/logo.svg"
                    width={150}
                    height={50}
                    className="navLogo"
                    alt='JAAJ'
                />
            </div>
            <div className='container flex justify-end'>
                <Image
                    src="/img/Basket.svg"
                    width={24}
                    height={24}
                    alt="Cart"
                />

            </div>
        </nav>
    )
}