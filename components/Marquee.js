export default function Marquee() {

    return (
    <div className="relative text-4xl lg:text-6xl flex overflow-x-hidden w-full uppercase text-orange font-bold italic">
          <div className="md:py-12 py-6 animate-marquee whitespace-nowrap">
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
          </div>

          <div className="absolute top-0 md:py-12 py-6 animate-marquee2 whitespace-nowrap">
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
          </div>
        </div>
        )
}