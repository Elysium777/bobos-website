import InfoCard from "@/components/InfoCard";

export default function IntroSection() {
  return (
    <section
      id="section1"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-8 md:py-0"
    >
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl text-center px-4 max-w-[90%] md:max-w-none">
        Meet Bob：Your Personal AI Agent, Onchain
      </h2>
      
      <div className="flex flex-col md:flex-row items-center mt-8 md:mt-[115px] gap-8 md:gap-[38px] px-4 md:px-8 w-full max-w-6xl">
        <div className="flex flex-col gap-8 md:gap-0 md:justify-between md:h-[500px] w-full md:w-auto">
          <InfoCard
            icon="/icon/chat.svg"
            title="Agent to Agent"
            content="Bob is your assistance and will find you the best agent service provider."
          />
          <InfoCard
            icon="/icon/route.svg"
            title="Seamless"
            content="BobBob helps transform your intent into onchain transactions, you do not even need to know anything about wallet."
          />
        </div>
        
        <div className="hidden md:block w-[250px] h-[544px]"></div>
        
        <div className="flex flex-col gap-8 md:gap-0 md:justify-between md:h-[500px] w-full md:w-auto">
          <InfoCard
            icon="/icon/copy.svg"
            title="Composability"
            content="Support different frameworks, Eliza, G.A.M.E and more."
          />
          <InfoCard
            icon="/icon/safe.svg"
            title="Data protection"
            content="All your data in BobOS are not sharing with other agents, powered by TEE."
          />
        </div>
      </div>
    </section>
  );
}
