import { useRef, useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'



export default function Dropdown() {
    // we using useState to controll the component
    // useRef is to be able to reference the menu itself
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    //setting up the onClick function
    const onClick = () => setIsActive(!isActive);

    // useEffect to perform logic when the state isActive changes
    useEffect(() => {
       const pageClickEvent = (e) => {
           console.log(e);
           if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
               
           }
       };
        //we need a function to determine if our menu has been clicked or not

        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
        return () => {
            window.removeEventListener('click', pageClickEvent)
        }
    }, [isActive]);

    // set up our dropdown mennu
    return (
        <div className='container lg:hidden block relative'>
                <a onClick={onClick} className='p-0 border-0 border-none'>
                    <Image src="/img/ToggleMenu.svg" width={32} height={32} alt="Menu"/>
                </a>
                <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                    <ul className="menu-trigger">
                    <li><Link href="/shop"><a>Shop All</a></Link></li>
                    <li><Link href="/lookbook"><a>Lookbook</a></Link></li>
                    <li><Link href="/infos"><a>Infos</a></Link></li>
                    </ul>
                </nav>
        </div>
    )
}