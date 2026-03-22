export default function Hero() {
  return (
    <section className="relative flex min-h-[520px] w-full items-center justify-between overflow-hidden bg-white px-12 py-8 lg:px-20 lg:py-10">
      {/* Left: Text content */}
      <div className="z-10 max-w-[580px] flex-1">
        <span className="mb-6 inline-block rounded-[20px] bg-black px-5 py-2 font-baloo text-[18px] font-normal text-white">
          NEW COLLECTION 2026
        </span>
        <h1 className="mb-4 font-baloo text-[52px] font-bold leading-[1.15] text-black lg:text-[64px]">
          Move With Confidence.{' '}
          <span className="block">Step With Style.</span>
        </h1>
        <p className="mb-10 font-baloo text-[20px] font-normal leading-[1.5] text-[#727272]">
          Discover premium shoes designed for comfort, performance, and modern street style.
        </p>
        <button
          type="button"
          className="rounded-[20px] bg-black px-8 py-3 font-baloo text-[18px] font-normal text-white transition hover:opacity-80"
        >
          Shop Now
        </button>
      </div>

      {/* Right: Shoe image rotated */}
      <div className="relative hidden flex-1 items-center justify-center lg:flex">
        {/* Scroll indicator dots */}
        <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3">
          <span className="block h-2.5 w-2.5 rounded-full bg-black" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#e0e0e0]" />
          <span className="block h-2.5 w-2.5 rounded-full bg-[#e0e0e0]" />
        </div>
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80"
          alt="Stride Air Max - New Collection 2026"
          className="w-[520px] max-w-full rotate-[20deg] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]"
        />
      </div>
    </section>
  )
}
