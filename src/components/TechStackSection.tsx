'use client'
import React, { useState, useEffect } from 'react';

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
      className="h-screen flex flex-col items-center justify-center relative bg-[url('/bg/section2.png')] bg-contain bg-no-repeat bg-bottom overflow-hidden"
    >
      <h2 className="text-white text-3xl">The BobOS Tech Stack</h2>
      <div className="flex items-center mt-[115px] gap-[108px] relative px-10">
        <img src="/bg/vector-rb.png" className="absolute bottom-0 right-0 w-[140px]" alt="" />
        <div className="relative size-60" style={{
          transformStyle: 'preserve-3d',
          // perspective: '1000px',
          transform: 'translateZ(0)',
          translate: '0 100px 0',

        }}>
          {[0, 1, 2, 3, 4].map((pointIndex) => (
            <div
              key={pointIndex}
              className="absolute w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateY(${-160 + pointIndex * 40}px) rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(${hoveredPoint === pointIndex ? 1 : 0.1})`,
                zIndex: 50 - pointIndex * 10,
                transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                opacity: getOpacity(pointIndex),
                willChange: 'transform'
              }}
              data-point={pointIndex}
              onMouseEnter={() => {
                setHoveredPoint(pointIndex);
              }}
              onMouseLeave={() => {
                setHoveredPoint(null);
              }}
            >
              {/* Front */}
              <div
                className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80"
                style={{
                  transform: 'translateZ(10px)',
                  opacity: getOpacity(pointIndex),
                  pointerEvents: hoveredPoint === pointIndex ? 'auto' : 'none'
                }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <div
                    className="text-white font-medium"
                    style={{
                      transform: 'translateZ(20px)',
                      textShadow: '0 0 10px rgba(0,0,0,0.3)'
                    }}
                  >
                    {pointContents[pointIndex].title}
                  </div>
                </div>
              </div>

              {/* Back */}
              <div
                className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80"
                style={{
                  transform: 'translateZ(-10px) rotateY(180deg)',
                }}
              />

              {/* Right */}
              <div
                className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80"
                style={{
                  transform: 'rotateY(90deg) translateZ(190px)',
                }}
              />

              {/* Left */}
              <div
                className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80"
                style={{
                  transform: 'rotateY(-90deg) translateZ(10px)',
                }}
              />

              {/* Top */}
              <div
                className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80"
                style={{
                  transform: 'rotateX(90deg) translateZ(-190px)',
                }}
              />

              {/* Bottom */}
              <div
                className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80"
                style={{
                  transform: 'rotateX(-90deg) translateZ(-10px)',
                }}
              />
            </div>
          ))}
        </div>
        <div className="right-10 w-[400px]">
          <div className={`transition-all duration-500 transform ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-3xl font-medium pt-5 pb-2 text-[#14F46F]">
              {currentContent.title}
            </h3>
            <p className="max-w-[400px] text-lg text-[#B7CBC1] mt-[38px]">
              {currentContent.description}
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default TechStackSection;
