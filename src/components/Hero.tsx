

const Hero = () => {
  return (
    <section className="h-auto flex items-center justify-center pt-6 pb-12 md:py-28 mt-[100px]  md:mx-44">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1  text-center lg:text-left">
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-6 ">
              Mriganka Barman
            </h1>
            <div className="space-y-4 text-lg md:text-2xl text-black font-bold mb-8">
              <p className="leading-relaxed">
                I write GPU accelerated code to train Neural Networks.
              </p>
              <div className="flex flex-row gap-10">
                <p className="text-black font-semibold italic">
                + Apps (sometimes) 
              </p>
              <button className="w-auto text-lg border px-3 py-1 rounded-xl font-semibold bg-orange-300 hover:bg-orange-500">
                <a href="google.com" target="_blank">
                  Resume
                </a>
              </button>
              </div>
              
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 md:w-[280px] md:h-[290px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="profile.png"
                  alt="Mriganka Barman"
                  className="w-[280px] h-[290px] object-cover p-5"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;