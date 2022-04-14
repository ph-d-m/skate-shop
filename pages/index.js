import Marquee from "../components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
    <>      
        <section className="h-auto grid place-items-center pt-5 pb-10 bg-black overflow-x-hidden">
      
          <video className="video md:w-40 w-72 max-w-full md:h-40 h-72 top-0 left-0 object-cover z-10 rounded-full aspect-auto shadow-inner " muted>
            <source src="/img/video.mp4" type="video/mp4"/>
         </video>
        <Marquee/>
        </section>

      <section>
        <div className="container flex flex-col lg:flex-row max-w-full">
          <Image
            src="/img/Home.jpg"
            width={750}
            height={600}
            className="aspect-auto object-cover"
            alt="Home"
          />

          <div className="text-black uppercase lg:w-1/2 px-10 w-full my-auto py-5">
            <h1 className="text-6xl ">It’s Jaaaaaaaaj !</h1>
            <h2 className="text-4xl ">We are a belgian newcomer’s skate brand and we only have one rule: have fun.</h2>
            <button className="mt-4 text-orange bg-black hover:bg-orange hover:text-black rounded-full  w-full sm:w-auto px-8 pt-2 pb-1 text-center hover:transition-all"><a>Learn more</a></button>
          </div>
        </div>
        </section>

        <section className="container-xl flex flex-wrap justify-around p-12 h-auto bg-gradient-to-br from-indigo-800 via-pink-500 to-orange">
          <div className="">

            <button className="mt-4 text-orange bg-black hover:bg-orange hover:text-black rounded-full  w-full sm:w-auto px-8 pt-2 pb-1 text-center hover:transition-all"><a>Shop All</a></button>

          </div>
          <div className="">
          <button className="mt-4 text-orange bg-black hover:bg-orange hover:text-black rounded-full  w-full sm:w-auto px-8 pt-2 pb-1 text-center hover:transition-all"><a>Decks</a></button>

          </div>
        </section>

      <section>
        <h2 className="text-center text-4xl uppercase">Each member of jaaj is unique in their own way.
          <br /> Maybe you can recognize one of them.  </h2>
        <div>
          <div className=" rounded"><h3>Lionel</h3></div>
          <div><h3>Lionel</h3></div>
          <div><h3>Lionel</h3></div>
          <div><h3>Lionel</h3></div>
        </div>
      </section>
      
    </>
  )
}
