import Image from "next/image"


export default function Footer() {
    return (

      <footer className="p-4 bg-black sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="mb-6 md:mb-0">
              <Image
                src="/img/logo.svg"
                width={200}
                height={70}
                className="navLogo "
              />
          </div>
            <div>
              <label htmlFor="email">Subscribe to our newsletter:
              <input htmlFor="email" type="text" placeholder="E-mail:" required/>
              </label>
                <button type="button" className=" text-orange bg-black hover:bg-orange hover:text-black px-8 py-0.5 rounded-full border-orange">Send</button>
            </div>
            
          </div>
        
        <hr className="my-6 border-orange sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Conditions générales</li>
            <li>Cookies</li>
          </ul>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <span className="text-sm text-orange sm:text-center">© JAAJ SKATEBOARD 2022.</span>
          </div>
        </div>
      </footer>

    )
}