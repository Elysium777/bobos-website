/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <nav className="flex fixed top-0 justify-between items-center w-full px-[2rem] mx-auto py-6 z-10">
      <div className="text-white font-bold text-2xl">LOGO</div>
      <div className="flex justify-between gap-5">
        <div className="w-8 h-8 cursor-pointer bg-white rounded-full flex items-center justify-center">
          <img className="w-6" src="/icon/discord.png" alt="" />
        </div>
        <div className="w-8 h-8 cursor-pointer bg-white rounded-full flex items-center justify-center">
          <img className="w-6" src="/icon/twitter.png" alt="" />
        </div>
      </div>
    </nav>
  )
}
