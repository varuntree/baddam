
const CornerEdgeCard = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto p-12 bg-black/30 backdrop-blur-sm rounded-lg">
      <div className="absolute top-0 left-0">
        <img src="/top-left.svg" alt="Top Left Corner" className="w-10 h-10" />
      </div>
      <div className="absolute bottom-0 right-0">
        <img src="/bottom-right.svg" alt="Bottom Right Corner" className="w-10 h-10" />
      </div>
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">
          Transforming <span className="text-primary">Businesses</span> with AI-Driven <span className="text-primary">Automation</span>.
        </h1>
        <p className="text-xl text-white/90">
          Empowering you to streamline workflows, enhance customer engagement, and drive measurable growth.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-white/90 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CornerEdgeCard;
