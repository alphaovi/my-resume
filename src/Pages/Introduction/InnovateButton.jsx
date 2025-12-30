const InnovateButton = () => {
  return (
    <div>
      <div className="inline-block animate-bounce">
        <div className="relative">
          <div
            className="absolute -inset-0.5 
                bg-linear-to-r from-[#6366f1] to-[#a855f7] 
                rounded-full blur opacity-30 w-full"
          ></div>

          <div
            className="relative px-4 py-2 w-40 text-center text-xl  
                rounded-full 
                bg-black/40 backdrop-blur-xl 
                border border-white/10"
          >
            <button
              className="bg-linear-to-r from-[#6366f1] to-[#a855f7] 
                   bg-clip-text text-transparent text-sm cursor-pointer"
            >
              Ready to Innovate
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovateButton;
