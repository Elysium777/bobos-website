export default function Navbar() {
  return (
    <nav className="flex justify-between items-center container mx-auto py-6">
      <div className="text-white font-bold text-2xl">LOGO</div>
      <div className="flex justify-between gap-5">
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <div className="w-8 h-8 bg-white rounded-full"></div>
      </div>
    </nav>
  )
}
