import Image from 'next/image'

export default function Lookbook() {
    return (
        <>
        <section className='max-w-full'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="w-full h-full py-10 px-10 bg-gradient-to-br from-indigo-800 via-pink-500 to-orange">
                    <p>Here is a Selection of photos & videos of our daily routine and our recent collection.</p>
                    <p>You can also watch our videos on youtube.</p>
                </div>
                <div className="w-full h-full py-10 px-10">

                </div>
            </div>

        </section>

        <section className='max-w-full'>
            <h1>Gallery</h1>
            

        </section>
        </>
    )
}