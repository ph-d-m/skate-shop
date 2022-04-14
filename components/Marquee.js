export default function Marquee() {

    return (
    <div className="relative flex overflow-x-hidden w-full uppercase text-orange text-6xl font-bold italic">
          <div className="py-8 animate-marquee whitespace-nowrap">
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
          </div>

          <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap">
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
            <span className=" mx-4">jaaj, for everything!</span>
          </div>
        </div>
        )
}