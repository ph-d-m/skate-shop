import Image from 'next/image'
import { useState, useEffect } from "react";
import { getQueryPhotos } from '../utils/pexels';
import Gallery from '../components/Gallery';

import styles from '../components/modules/Gallery.module.css'
import { Navigation, Pagination, A11y, Thumbs, FreeMode} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Layout from '../components/Layout';



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
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    
    return (
    <Layout title="Lookbook">
        <Gallery/>
            <section  className={styles.gallery}>
                <div className={styles.galleryTitle}>
                    <h1 className={styles.title}>Gallery</h1>
                </div>
            <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, A11y, Thumbs, FreeMode]}
            navigation={true}
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper }}
            className={styles.galleryImages}
            >
                <SwiperSlide >
                    <video muted loop autoPlay controls className={styles.video} preload='metadata' playsInline>
                        <source src="jaajskateboard-small.mp4"></source>
                    </video>
                </SwiperSlide> 
                    {   photos.map((pic) => (
                        <SwiperSlide key={pic.id}>
                            <Image
                            src={pic.src.portrait}
                            height={450}
                            width={400}
                            alt={pic.url}
                            className="object-cover aspect-auto"
                            />
                        </SwiperSlide>
                        ))
                    }
            </Swiper>

            <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={7}
            freeMode={true}
            watchSlidesProgress={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.galleryThumbsDesktop }
            >
                <SwiperSlide>
                    <video paused="true" preload='metadata' playsInline>
                        <source src="jaajskateboard-small.mp4"></source>
                    </video>
                </SwiperSlide>
                    {   photos.map((pic) => (
                            <SwiperSlide key={pic.id}>
                                <Image
                                src={pic.src.portrait}
                                height={225}
                                width={200}
                                alt={pic.url}
                                className="object-cover aspect-auto"
                                />
                            </SwiperSlide>
                        ))
                    }
            </Swiper>


            <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={styles.galleryThumbsMobile}
            >
                <SwiperSlide>
                    <video paused="true" preload='metadata' playsInline>
                        <source src="jaajskateboard-small.mp4"></source>
                    </video>
                </SwiperSlide>
                    {   photos.map((pic) => (
                            <SwiperSlide key={pic.id}>
                                <Image
                                src={pic.src.portrait}
                                height={225}
                                width={200}
                                alt={pic.url}
                                className="object-cover aspect-auto"
                              />
                            </SwiperSlide>
                        ))
                    }
            </Swiper>
        </section>
    </Layout>
    )
}