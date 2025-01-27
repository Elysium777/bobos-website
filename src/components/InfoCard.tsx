interface InfoCardProps {
  icon: string;
  title: string;
  content: string;
}

export default function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className="flex justify-start h-auto sm:h-[300px] w-full">
      <img src={icon} className="w-[48px] h-[48px] sm:w-[72px] sm:h-[72px]" alt="" />
      <div className="ml-2 sm:ml-[12px]">
        <h3 className="text-xl sm:text-2xl font-medium pt-3 sm:pt-5 pb-2">{title}</h3>
        <p className="max-w-full sm:max-w-[252px] text-xs sm:text-sm text-[#B7CBC1] leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
