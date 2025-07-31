const Hero = () => {
  return (
    <>
      <section className="noisy absolute inset-0 size-full z-10 min-h-dvh w-full border border-transparent">
        <h1 className="md:mt-32 mt-40 text-8xl md:text-[20vw] leading-none text-center font-modern-negra">
          MOJITO
        </h1>

        <img
          src="/images/hero-left-leaf.png"
          className="absolute left-0 md:top-20 xl:top-36 2xl:top-52 md:bottom-auto -bottom-20 md:w-fit w-1/3"
          alt=""
        />
        <img
          src="/images/hero-right-leaf.png"
          className="absolute right-0 md:bottom-0 xl:top-0 2xl:top-12 top-1/2 md:w-fit w-24"
          alt=""
        />
        <div className="container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20 top-auto md:top-[30vh] flex justify-between items-end px-5">
          <div className="flex lg:flex-row flex-col w-full gap-10 justify-between items-center lg:items-end mx-auto">
            <div className="space-y-5 hidden md:block">
              <p className="font-modern-negra text-6xl text-yellow max-w-xl">
                Cool Crisp Classic
              </p>
              <p className="2xl:text-start text-center">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="space-y-5 text-lg lg:max-w-2xs md:max-w-xs w-full">
              <p className="text-left">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a
                href=""
                className="font-semibold opacity-80 2xl:text-start text-center hover:text-yellow"
              >
                {" "}
                View cocktails
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
