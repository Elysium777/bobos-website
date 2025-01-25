import InfoCard from "@/components/InfoCard";

export default function IntroSection() {
  return (
    <section
      id="section1"
      className="h-screen border flex flex-col items-center justify-center relative"
    >
      <h2 className="text-white text-3xl">Meet Bob：Your Personal AI Agent,Onchain</h2>
      <div className="flex items-center mt-[115px] gap-[38px]">
        <div className="flex flex-col gap-[230px]">
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
        <div className="w-[250px] h-[544px]"></div>
        <div className="flex flex-col gap-[230px]">
          <InfoCard
            icon="/icon/copy.svg"
            title="Composability"
            content="Support different frameworks, Eliza, G.A.M.E and more."
          />
          <InfoCard
            icon="/icon/route.svg"
            title="Data protection"
            content="All your data in BobOS are not sharing with other agents, powered by TEE."
          />
        </div>
      </div>
    </section>
  );
}
