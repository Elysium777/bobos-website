interface InfoCardProps {
  icon: string;
  title: string;
  content: string;
}

export default function InfoCard({ icon, title, content }: InfoCardProps) {
  return (
    <div className="flex justify-start">
      <img src={icon} className="w-[72px] h-[72px]" alt="" />
      <div className="ml-[12px]">
        <h3 className="text-2xl font-medium pt-5 pb-2 ">{title}</h3>
        <p className="max-w-[252px] text-sm text-[#B7CBC1]">{content}</p>
      </div>
    </div>
  );
}
