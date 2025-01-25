export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen relative bg-[url('/bg/section1.png')] bg-cover bg-center"
    >
      <img src="/bg/blur1.png" className="absolute w-[784px] left-0 top-[100px]" alt="" />
      <img src="/bg/blur2.png" className="absolute w-[784px] right-0 top-0" alt="" />
      <img src="/bg/circle.png" className="absolute w-[780px] bottom-[150px] right-0" alt="" />
      <div className="bg-[url('/bg/vector.png')] bg-[length:140px_140px] bg-no-repeat bg-left-top pt-8 pl-6 relative top-[180px] left-[248px]">
        <h1 className="text-6xl font-bold mb-6">
          Onboarding the next billion<br />
          <span className="mt-6">
            <del className="text-4xl">USERS</del>
            <span>&nbsp;</span>
            <span className="text-[#00FF85]">AGENTS.</span>
          </span>
        </h1>
        <button className="bg-[#00FF85] text-black px-8 py-3 rounded-full font-semibold mt-4">
          Join Waitlist
        </button>
      </div>
    </section>
  )
}
