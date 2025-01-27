/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <nav className="flex fixed top-0 justify-between items-center w-full px-4 sm:px-6 md:px-8 lg:px-[2rem] mx-auto py-4 md:py-6 z-10">
      <div className="text-white font-bold text-xl md:text-2xl transition-all duration-300 hover:opacity-80">LOGO</div>
      <div className="flex justify-between gap-3 md:gap-5">
        <a href="#" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-opacity-90 hover:scale-105">
          <img className="w-5 md:w-6" src="/icon/discord.png" alt="Discord" />
        </a>
        <a href="#" className="w-7 h-7 md:w-8 md:h-8 cursor-pointer bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:bg-opacity-90 hover:scale-105">
          <img className="w-5 md:w-6" src="/icon/twitter.png" alt="Twitter" />
        </a>
      </div>
    </nav>
  )
}
