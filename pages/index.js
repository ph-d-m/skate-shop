import Marquee from "../components/Marquee";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header>
        <video className="bg-orange video md:w-40 w-72 max-w-full md:h-40 h-72 top-0 left-0 object-cover z-10 rounded-full aspect-auto shadow-inner " muted>
          <source src="#" type="video/mp4" />
        </video>
        <Marquee />
      </Header>

      <section>
        <div className="container flex flex-col lg:flex-row max-w-full aspect-auto">
          <Image
            src="/img/Home.jpg"
            width={750}
            height={600}
            className=" object-cover"
            alt="Home"
          />

          <div className="text-center md:text-left text-black uppercase lg:w-1/2 px-10 w-full my-auto py-5">
            <h1 className="mb-2 lg:mb-6 text-3xl lg:text-4xl xl:text-6xl">It’s Jaaaaaaaaj !</h1>
            <h2 className="text-lg lg:text-2xl xl:text-4xl">We are a belgian newcomer’s skate brand and we only have one rule: have fun.</h2>
            <button className="mt-4 text-orange bg-black hover:bg-orange hover:text-black rounded-full  w-full sm:w-auto px-8 pt-2 pb-1 text-center hover:transition-all"><a>Learn more</a></button>
          </div>
        </div>
      </section>

      <section className="max-w-full h-auto text-center bg-gradient-to-br from-indigo-600 via-pink-400  to-amber-400">
        <h1 className=" text-4xl lg:text-6xl uppercase pt-12">New collection !</h1>
        <div className="flex flex-wrap justify-evenly align-end p-6">
        <div className="p-5">
          <Image
            src="/img/LinkShop.jpg"
            width={100}
            height={160}
            alt="Shop All"
            className=" object-cover rounded-full aspect-auto"
            layout="responsive"
          />

          <button className="mt-4 text-orange bg-black hover:bg-orange hover:text-black rounded-full  w-full sm:w-auto px-8 pt-2 pb-1 text-center hover:transition-all"><a>Shop All</a></button>

        </div>
        <div className="p-5">
          <Image
            src="/img/Deck.png"
            width={200}
            height={400}
            alt="Shop Decks"
            className="object-cover aspect-auto"
            layout="responsive"
          />
          <button className="mt-4 text-orange bg-black hover:bg-orange hover:text-black rounded-full  w-full sm:w-auto px-8 pt-2 pb-1 text-center hover:transition-all"><a>Decks</a></button>

        </div>
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-center text-2xl sm:text-4xl uppercase p-5">Each member of jaaj is unique in their own way.
          <br /> Maybe you can recognize one of them.  </h2>
        <div className="flex flex-wrap justify-center text-4xl uppercase">
          <div className="member1 rounded-full w-52 h-80 m-5 ">
          </div>
          <div className="member2 rounded-full w-52 h-80 m-5 ">
          </div>
          <div className="member3 rounded-full w-52 h-80 m-5 ">
          </div>
          <div className="member4 rounded-full w-52 h-80 m-5 ">
          </div>
        </div>
      </section>

    </>
  )
}
