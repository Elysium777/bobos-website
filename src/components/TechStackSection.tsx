export default function TechStackSection() {
  return (
    <section
      id="section2"
      className="h-screen border flex flex-col items-center justify-center relative"
    >
      <h2 className="text-white text-3xl">The BobOS Tech Stack</h2>
      <div className="flex items-center mt-[115px] gap-[108px] relative px-10">
        <img src="/bg/vector-rb.png" className="absolute bottom-0 right-0 w-[140px]" alt="" />
        <img src="/stack.png" className="w-[433px]" alt="" />
        <div>
          <h3 className="text-3xl font-medium pt-5 pb-2 text-[#14F46F]">Agent Marketplace</h3>
          <p className="max-w-[400px] text-lg text-[#B7CBC1] mt-[38px]">
            Any developer can develop Agent without permission and connect to BobOS. Agent can directly interact with the blockchain in a certain field.
          </p>
        </div>
      </div>
    </section>
  );
}
