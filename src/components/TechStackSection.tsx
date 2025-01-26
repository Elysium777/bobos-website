export default function TechStackSection() {
  return (
    <section
      id="section2"
      className="h-screen border flex flex-col items-center justify-center relative"
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
              transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1) translateZ(2000px)',
            }}
          >
            {/* Front */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(10px)',
              }}
            >
              Point 1
            </div>
            {/* Back */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(-10px) rotateY(180deg)',
              }}
            >
              {/* Back */}
            </div>
            {/* Right */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(90deg) translateZ(190px)',
              }}
            >
              {/* Right */}
            </div>
            {/* Left */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(-90deg) translateZ(10px)',
              }}
            >
              {/* Left */}
            </div>
            {/* Top */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(90deg) translateZ(-190px)',
              }}
            >
              {/* Top */}
            </div>
            {/* Bottom */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(-90deg) translateZ(-10px)',
              }}
            >
              {/* Bottom */}
            </div>
          </div>

          {/* Point 2 */}
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1) translateZ(1600px)',
            }}
          >
            {/* Front */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(10px)',
              }}
            >
              Point 2
            </div>
            {/* Back */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(-10px) rotateY(180deg)',
              }}
            >
              {/* Back */}
            </div>
            {/* Right */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(90deg) translateZ(190px)',
              }}
            >
              {/* Right */}
            </div>
            {/* Left */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(-90deg) translateZ(10px)',
              }}
            >
              {/* Left */}
            </div>
            {/* Top */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(90deg) translateZ(-190px)',
              }}
            >
              {/* Top */}
            </div>
            {/* Bottom */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(-90deg) translateZ(-10px)',
              }}
            >
              {/* Bottom */}
            </div>
          </div>

          {/* Point 3 */}
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1) translateZ(1200px)',
            }}
          >
            {/* Front */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(10px)',
              }}
            >
              Point 3
            </div>
            {/* Back */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(-10px) rotateY(180deg)',
              }}
            >
              {/* Back */}
            </div>
            {/* Right */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(90deg) translateZ(190px)',
              }}
            >
              {/* Right */}
            </div>
            {/* Left */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(-90deg) translateZ(10px)',
              }}
            >
              {/* Left */}
            </div>
            {/* Top */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(90deg) translateZ(-190px)',
              }}
            >
              {/* Top */}
            </div>
            {/* Bottom */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(-90deg) translateZ(-10px)',
              }}
            >
              {/* Bottom */}
            </div>
          </div>

          {/* Point 4 */}
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1) translateZ(800px)',
            }}
          >
            {/* Front */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(10px)',
              }}
            >
              Point 4
            </div>
            {/* Back */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(-10px) rotateY(180deg)',
              }}
            >
              {/* Back */}
            </div>
            {/* Right */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(90deg) translateZ(190px)',
              }}
            >
              {/* Right */}
            </div>
            {/* Left */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(-90deg) translateZ(10px)',
              }}
            >
              {/* Left */}
            </div>
            {/* Top */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(90deg) translateZ(-190px)',
              }}
            >
              {/* Top */}
            </div>
            {/* Bottom */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(-90deg) translateZ(-10px)',
              }}
            >
              {/* Bottom */}
            </div>
          </div>

          {/* Point 5 (最底下) */}
          <div
            className="absolute w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateZ(-90deg) rotateY(45deg) rotateZ(45deg) scaleZ(0.1) translateZ(400px)',
            }}
          >
            {/* Front */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(10px)',
              }}
            >
              Point 5
            </div>
            {/* Back */}
            <div
              className="absolute w-[200px] h-[200px] bg-green-400 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'translateZ(-10px) rotateY(180deg)',
              }}
            >
              {/* Back */}
            </div>
            {/* Right */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(90deg) translateZ(190px)',
              }}
            >
              {/* Right */}
            </div>
            {/* Left */}
            <div
              className="absolute w-[20px] h-[200px] bg-green-500 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateY(-90deg) translateZ(10px)',
              }}
            >
              {/* Left */}
            </div>
            {/* Top */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(90deg) translateZ(-190px)',
              }}
            >
              {/* Top */}
            </div>
            {/* Bottom */}
            <div
              className="absolute w-[200px] h-[20px] bg-green-300 bg-opacity-80 flex items-center justify-center text-white font-medium"
              style={{
                transform: 'rotateX(-90deg) translateZ(-10px)',
              }}
            >
              {/* Bottom */}
            </div>
          </div>

        </div>
        <div>
          <h3 className="text-3xl font-medium pt-5 pb-2 text-[#14F46F]">Agent Marketplace</h3>
          <p className="max-w-[400px] text-lg text-[#B7CBC1] mt-[38px]">
            Any developer can develop Agent without permission and connect to BobOS. Agent can directly interact with the blockchain in a certain field.
          </p>
        </div>
      </div>
    </section >
  );
}
