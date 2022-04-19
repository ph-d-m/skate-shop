import Image from 'next/image'
import Header from '../components/Header'
import Marquee from '../components/Marquee'



export default function Infos() {
    return (
        <>
        <Header>
            <div className='max-w-full h-full pb-10 px-5'>
            <Image
            src='/img/logo.svg'
            width={1200}
            height={400}
            alt="Logo"
            className='object-cover aspect-auto '
            />
            </div>
            <Marquee/>
        </Header>
            <section className="max-w-full h-auto p-12 bg-gradient-to-br from-indigo-600 via-pink-400  to-amber-400">
                <div className='text-center py-8'>
                    <h1 className=' xl:text-6xl text-4xl uppercase'>About us</h1>
                    <p className='xl:text-4xl text-2xl mt-8 uppercase'>We are a belgian newcomer’s skate brand and we only have one rule: have fun.
                        We are here to make a brand who can make everyone good about themself.</p>
                </div>

            </section>

            <section className='max-w-full'>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="w-full h-full  lg:order-first order-last md:text-left text-center pt-6 xl:pt-12 px-12">
                        <h1 className=' xl:text-5xl text-3xl uppercase'>Why Jaaj ?</h1>
                        <div className=' xl:text-4xl text-2xl'>
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
                        className='object-cover'
                        priority
                        />
                    </div>
                </div>
            </section>

        </>
    )
}