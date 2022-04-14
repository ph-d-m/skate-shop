import Image from "next/image"


export default function Footer() {
  return (

    <footer className="px-8 py-12 bg-black text-orange text-xl uppercase">
      <div className="sm:flex sm:items-start sm:justify-between">
        <div className="mb-6 md:mb-0">
          <Image
            src="/img/logo.svg"
            width={200}
            height={70}
            className="navLogo "
            alt="Jaaj Logo"
          />
        </div>

        <form>
          <div className="relative z-0 mb-2 w-full group">
            <h2 className="  ">Subscribe to our newsletter:</h2>
          </div>
          <div className="grid xl:grid-cols-2 xl:gap-36 items-center">
            <div className="relative z-0 mb-6 w-full group">
              <input type="email" name="newsletter" id="newsletter" className="block py-2.5 px-0 w-full  bg-transparent border-0 border-b-2  border-orange appearance-none  focus:outline-none focus:ring-0 peer placeholder:text-orange uppercase " placeholder="e-mail:" required />
              <label htmlFor="newsletter" className="absolute   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
            <button type="submit" className=" bg-black hover:bg-orange hover:text-black rounded-full  w-full sm:w-auto px-8 pt-2 pb-1 text-center hover:transition-all">Send</button>
            </div>

          </div>
        </form>
      </div>

      <hr className="my-6 border-orange sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-end sm:justify-between   ">
        <ul>
          <li className="hover:underline">Instagram</li>
          <li className="hover:underline">Facebook</li>
          <li  className="hover:underline">Conditions générales</li>
          <li  className="hover:underline">Cookies</li>
        </ul>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <span className="  sm:text-center">© JAAJ SKATEBOARD 2022.</span>
        </div>
      </div>
    </footer>

  )
}