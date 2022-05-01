import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {

    return (
        <nav className="sticky top-0 z-50 bg-black px-4 md:px-8 py-2 text-orange flex items-center" >
            <div className='container hidden lg:block' >
                <ul className='justify-start gap-8 text-xl flex'>
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
            <div className='container lg:hidden block'>
                {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button </button>
                
                <div id="dropdown" className="hidden z-999 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div> */}
            </div>

            <div className='container flex justify-center'>
                <Link href="/">
                    <a>
                        <Image
                            src="/img/logo.svg"
                            width={150}
                            height={50}
                            className="navLogo"
                            alt='JAAJ'
                        />
                    </a>
                </Link>
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