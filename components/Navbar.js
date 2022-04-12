import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
    return (
        <nav className=" bg-black" >
            <div className=" flex justify-between xs:justify-center items-center">
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center mr-3 md:hidden" aria-controls="mobile-menu" aria-expanded="false">
                    <svg width="32" height="13" viewBox="0 0 32 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="6.5" x2="32" y2="6.5" stroke="#F87C3D" strokeWidth="3" />
                        <line y1="1.5" x2="32" y2="1.5" stroke="#F87C3D" strokeWidth="3" />
                        <line y1="11.5" x2="32" y2="11.5" stroke="#F87C3D" strokeWidth="3" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link href="/shop">
                                <a className='text-lg text-orange'>
                                    Shop All
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a className='text-lg text-orange'>
                                    Lookbook
                                </a>
                            </Link>
                        </li>
                        <li >
                            <Link href="/shop">
                                <a className='text-lg text-orange'>
                                    Infos
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <Image
                    src="/img/logo.svg"
                    width={150}
                    height={50}
                    className="navLogo"
                    alt='JAAJ'
                />
                
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