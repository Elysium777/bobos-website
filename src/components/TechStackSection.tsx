'use client'
import React, { useState, useEffect } from 'react';
import TechCube from './TechCube';

const pointContents = [
  {
    title: "Input Module",
    description: "Voice/Text/Image input through Web/App/Telegram/Email/SMS to connect with your personal assistant anytime"
  },
  {
    title: "Data Storage",
    description: "Private storage ensuring user data security"
  },
  {
    title: "Intent Parser",
    description: "Utilizing advanced models to interpret user intent and find suitable Agents"
  },
  {
    title: "Wallet Module",
    description: "Pay corresponding Agents and authorize transactions"
  },
  {
    title: "Agent Store",
    description: "Any developer can develop Agents without permission and integrate with BobOS. Agents interact directly with blockchain in specific domains"
  }
];

const TechStackSection: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [currentContent, setCurrentContent] = useState({
    title: pointContents[0].title,
    description: pointContents[0].description
  });

  useEffect(() => {
    if (hoveredPoint !== null) {
      setIsTextVisible(false);
      setTimeout(() => {
        setCurrentContent({
          title: pointContents[hoveredPoint].title,
          description: pointContents[hoveredPoint].description
        });
        setIsTextVisible(true);
      }, 300); // Half of the transition duration
    } else {
      setIsTextVisible(false);
      setTimeout(() => {
        setCurrentContent({
          title: pointContents[0].title,
          description: pointContents[0].description
        });
        setIsTextVisible(true);
      }, 300);
    }
  }, [hoveredPoint]);

  const getOpacity = (pointIndex: number) => {
    if (hoveredPoint === null) {
      // 没有hover时，第一个点保持不透明，其他点根据距离变淡
      if (pointIndex === 0) return 1;
      return Math.max(0.2, 1 - pointIndex * 0.35);
    }
    if (hoveredPoint === pointIndex) return 1;
    // 计算距离，越远越透明
    const distance = Math.abs(hoveredPoint - pointIndex);
    return Math.max(0.2, 1 - distance * 0.5);
  };

  return (
    <section
      id="section2"
      className="min-h-screen flex flex-col items-center justify-center relative bg-[url('/bg/section2.png')] bg-contain bg-no-repeat bg-bottom overflow-hidden px-4 py-12 md:py-0"
    >
      <h2 className="text-white text-2xl sm:text-3xl text-center mb-8 md:mb-0">The BobOS Tech Stack</h2>
      <div className="flex flex-col md:flex-row items-center justify-center mt-4 md:mt-[115px] gap-20 md:gap-[108px] relative w-full max-w-6xl">


        <div className="relative w-full md:w-auto flex justify-center translate-x-8">
          <div className="relative size-60 scale-[0.6] md:scale-100" style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(0)',
            translate: '0 100px 0',
          }}>
            {[0, 1, 2, 3, 4].map((pointIndex) => (
              <TechCube
                key={pointIndex}
                pointIndex={pointIndex}
                hoveredPoint={hoveredPoint}
                title={pointContents[pointIndex].title}
                getOpacity={getOpacity}
                onMouseEnter={() => setHoveredPoint(pointIndex)}
                onMouseLeave={() => { }}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-[400px] px-4 md:px-0 relative pb-4 pr-4">
          <img src="/bg/vector-rb.png" className="absolute bottom-0 right-0 w-[80px] md:w-[140px] " alt="" />
          <div className={`transition-all duration-500 transform ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-medium pt-5 pb-2 text-[#14F46F] text-center md:text-left">
              {currentContent.title}
            </h3>
            <p className="text-base md:text-lg text-[#B7CBC1] mt-4 md:mt-[38px] text-center md:text-left">
              {currentContent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
