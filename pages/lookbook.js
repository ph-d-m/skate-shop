import Image from 'next/image'
import { useState, useEffect } from "react";
import { getQueryPhotos } from '../utils/pexels';
import Gallery from '../components/Gallery';


export async function getServerSideProps(context) {
    const data = await getQueryPhotos(context);
    return {
      props: {
        data,
      },
    };
  }


export default function Lookbook({data}) {
    const [photos, setPhotos] = useState(data);
    
    return (
        <>
        <Gallery/>
        <section className='max-w-full text-center -z-10'>
            <h1 className='text-2xl lg:text-4xl uppercase m-4'>Gallery</h1>
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
                        {
                            photos.map((pic) => (
                                <div key={pic.id}>
                                <Image
                                    src={pic.src.portrait}
                                    height={450}
                                    width={400}
                                    alt={pic.url}
                                    className="object-cover aspect-auto"
                                />
                                </div>
                            ))
                        }
                    
                </div>
        </section>
        </>
    )
}