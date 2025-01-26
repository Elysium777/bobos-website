'use client'
import React, { useState, useEffect } from 'react';

const TechStackSection: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(0);

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

  const resetToFirstPoint = () => {
    // 重置所有点的状态
    for (let i = 0; i < 5; i++) {
      const point = document.querySelector(`[data-point="${i}"] > div`) as HTMLElement;
      if (point) {
        point.style.transform = 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1)';
      }
    }
    // 设置第一个点为激活状态
    const firstPoint = document.querySelector(`[data-point="0"] > div`) as HTMLElement;
    if (firstPoint) {
      firstPoint.style.transform = 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(1)';
    }
    setHoveredPoint(null);
  };

  useEffect(() => {
    resetToFirstPoint();
  }, []);

  const getOpacity = (pointIndex: number) => {
    if (hoveredPoint === null) {
      // 没有hover时，第一个点保持不透明，其他点根据距离变淡
      if (pointIndex === 0) return 1;
      return Math.max(0.2, 1 - pointIndex * 0.35);
    }
    if (hoveredPoint === pointIndex) return 1;
    // 计算距离，越远越透明
    const distance = Math.abs(hoveredPoint - pointIndex);
    return Math.max(0.2, 1 - distance * 0.35);
  };

  return (
    <section
      id="section2"
      className="h-screen border flex flex-col items-center justify-center relative bg-[url('/bg/section2.png')] bg-contain bg-no-repeat bg-bottom overflow-hidden"
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
          {/* Point 1 (最上面) */}
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateY(-160px)',
              zIndex: 50,
              transition: 'opacity 0.5s ease-in-out',
              opacity: getOpacity(0)
            }}
            data-point="0"
          >
            <div
              className="w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1)',
                transition: 'transform 0.5s ease-in-out',
              }}
              onMouseEnter={() => {
                const target = document.querySelector(`[data-point="0"] > div`) as HTMLElement;
                if (target) target.style.transform = 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(1)';
                setHoveredPoint(0);
              }}
              onMouseLeave={() => {
                const target = document.querySelector(`[data-point="0"] > div`) as HTMLElement;
                if (target) target.style.transform = 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1)';
                setHoveredPoint(null);
              }}
            >
              {/* Front */}
              <div
                className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80"
                style={{
                  transform: 'translateZ(10px)',
                  opacity: getOpacity(0),
                  pointerEvents: hoveredPoint === 0 ? 'auto' : 'none'
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
                    {pointContents[0].title}
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
          </div>

          {/* Point 2 */}
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateY(-120px)',
              zIndex: 40,
              transition: 'opacity 0.5s ease-in-out',
              opacity: getOpacity(1)
            }}
            data-point="1"
          >
            <div
              className="w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1)',
                transition: 'transform 0.5s ease-in-out',
              }}
              onMouseEnter={() => {
                const target = document.querySelector(`[data-point="1"] > div`) as HTMLElement;
                if (target) target.style.transform = 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(1)';
                setHoveredPoint(1);
              }}
              onMouseLeave={resetToFirstPoint}
            >
              {/* Front */}
              <div
                className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80"
                style={{
                  transform: 'translateZ(10px)',
                  opacity: getOpacity(1),
                  pointerEvents: hoveredPoint === 1 ? 'auto' : 'none'
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
                    {pointContents[1].title}
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
          </div>

          {/* Point 3 */}
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateY(-80px)',
              zIndex: 30,
              transition: 'opacity 0.5s ease-in-out',
              opacity: getOpacity(2)
            }}
            data-point="2"
          >
            <div
              className="w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1)',
                transition: 'transform 0.5s ease-in-out',
              }}
              onMouseEnter={() => {
                const target = document.querySelector(`[data-point="2"] > div`) as HTMLElement;
                if (target) target.style.transform = 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(1)';
                setHoveredPoint(2);
              }}
              onMouseLeave={resetToFirstPoint}
            >
              {/* Front */}
              <div
                className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80"
                style={{
                  transform: 'translateZ(10px)',
                  opacity: getOpacity(2),
                  pointerEvents: hoveredPoint === 2 ? 'auto' : 'none'
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
                    {pointContents[2].title}
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
          </div>

          {/* Point 4 */}
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateY(-40px)',
              zIndex: 20,
              transition: 'opacity 0.5s ease-in-out',
              opacity: getOpacity(3)
            }}
            data-point="3"
          >
            <div
              className="w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1)',
                transition: 'transform 0.5s ease-in-out',
              }}
              onMouseEnter={() => {
                const target = document.querySelector(`[data-point="3"] > div`) as HTMLElement;
                if (target) target.style.transform = 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(1)';
                setHoveredPoint(3);
              }}
              onMouseLeave={resetToFirstPoint}
            >
              {/* Front */}
              <div
                className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80"
                style={{
                  transform: 'translateZ(10px)',
                  opacity: getOpacity(3),
                  pointerEvents: hoveredPoint === 3 ? 'auto' : 'none'
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
                    {pointContents[3].title}
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
          </div>

          {/* Point 5 (最底下) */}
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateY(0)',
              zIndex: 10,
              transition: 'opacity 0.5s ease-in-out',
              opacity: getOpacity(4)
            }}
            data-point="4"
          >
            <div
              className="w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1)',
                transition: 'transform 0.5s ease-in-out',
              }}
              onMouseEnter={() => {
                const target = document.querySelector(`[data-point="4"] > div`) as HTMLElement;
                if (target) target.style.transform = 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(1)';
                setHoveredPoint(4);
              }}
              onMouseLeave={resetToFirstPoint}
            >
              {/* Front */}
              <div
                className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80"
                style={{
                  transform: 'translateZ(10px)',
                  opacity: getOpacity(4),
                  pointerEvents: hoveredPoint === 4 ? 'auto' : 'none'
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
                    {pointContents[4].title}
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
          </div>

        </div>
        <div className="right-10 w-[400px] transition-opacity duration-500">
          <h3 className="text-3xl font-medium pt-5 pb-2 text-[#14F46F]">{hoveredPoint !== null ? pointContents[hoveredPoint].title : pointContents[0].title}</h3>
          <p className="max-w-[400px] text-lg text-[#B7CBC1] mt-[38px]">
            {hoveredPoint !== null ? pointContents[hoveredPoint].description : pointContents[0].description}
          </p>
        </div>
      </div>
    </section >
  );
};

export default TechStackSection;
