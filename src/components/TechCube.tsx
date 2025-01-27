interface TechCubeProps {
  pointIndex: number;
  hoveredPoint: number | null;
  title: string;
  getOpacity: (pointIndex: number) => number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function TechCube({
  pointIndex,
  hoveredPoint,
  title,
  getOpacity,
  onMouseEnter,
  onMouseLeave
}: TechCubeProps) {
  return (
    <div
      className="absolute w-full h-full cursor-pointer touch-none"
      style={{
        transformStyle: 'preserve-3d',
        transform: `translateY(${-160 + pointIndex * 40}px) rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(${hoveredPoint === pointIndex ? 1 : 0.1})`,
        zIndex: 50 - pointIndex * 10,
        transition: 'transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
        opacity: getOpacity(pointIndex),
        willChange: 'transform'
      }}
      data-point={pointIndex}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={(e) => {
        e.preventDefault();
        onMouseEnter();
      }}
      onTouchEnd={(e) => {
        e.preventDefault();
        onMouseLeave();
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
            className="text-white font-medium text-center px-4"
            style={{
              transform: 'translateZ(20px)',
              textShadow: '0 0 10px rgba(0,0,0,0.3)'
            }}
          >
            {title}
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
  );
}
