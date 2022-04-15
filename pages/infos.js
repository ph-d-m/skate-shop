import Image from 'next/image'
import Header from '../components/Header'
import Marquee from '../components/Marquee'



export default function Infos() {
    return (
        <>
        <Header>
            <div className='max-w-full h-full pb-10'>
            <Image
            src='/img/logo.svg'
            width={1200}
            height={400}
            alt="Logo"
            className='aspect-auto object-cover'
            />
            </div>
            <Marquee/>
        </Header>
            <section className="max-w-full h-auto p-12 bg-gradient-to-br from-indigo-800 via-pink-500 to-orange">
                <div className='text-center py-16'>
                    <h1 className=' text-6xl uppercase'>About us</h1>
                    <p className='text-4xl uppercase'>We are a belgian newcomer’s skate brand and we only have one rule: have fun.
                        We are here to make a brand who can make everyone good about themself.</p>
                </div>

            </section>

            <section className='max-w-full'>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full h-full py-5 px-10 lg:order-first order-last">
                        <h1 className=' text-6xl uppercase'>Why Jaaj ?</h1>
                        <div className=' text-4xl'>
                            <p className=' py-6'>Found during the COVID-19 pandemic, jaaj is the project of a group of friends which find piece during this period by discovering to joy to go outside and surpass there limits.</p>
                            <p className=' py-6'> The name on himself means nothing, it’s only a word that express something that we find cool, like landing a trick we never did before.</p>
                            <p className=' py-6'>We are inspired by the old school era of skate but also everything around that culture starting from music to fashion.</p>
                        </div>

                    </div>
                    <div className="max-w-full h-full">
                        <Image
                        src="/img/Infos.jpg"
                        layout='responsive'
                        width={800}
                        height={1000}
                        alt="Why Jaaj"
                        className='object-cover h-full'
                        priority
                        />
                    </div>
                </div>
            </section>

        </>
    )
}