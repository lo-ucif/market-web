export default function MostLoved() {
  return (
    <section className="w-full bg-white px-6 py-10 lg:px-16 lg:py-14">
      {/* Section Badge */}
      <div className="mb-4">
        <span className="inline-block rounded-[20px] bg-black px-5 py-2 font-baloo text-[18px] font-normal text-white">
          Best Sellers
        </span>
      </div>

      {/* Main heading */}
      <h2 className="mb-8 font-baloo text-[42px] font-bold leading-[1.2] text-black lg:text-[48px] lg:max-w-[600px]">
        Our most loved shoes this season.
      </h2>

      {/* Content: image left, text right */}
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
        {/* Large shoe image */}
        <div className="h-[380px] w-full max-w-[580px] overflow-hidden rounded-[30px] bg-[#f7f7f7] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80"
            alt="Best Seller Shoe"
            className="h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
          />
        </div>

        {/* Right text block */}
        <div className="flex max-w-[580px] flex-col items-center gap-4 text-center">
          {/* Shoe icon flipped */}
          <div className="flex h-16 w-16 -scale-y-100 rotate-180 items-center justify-center">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 45C10 45 5 35 10 25C15 15 25 12 35 15C45 18 52 28 50 38C48 48 38 52 28 50C18 48 10 45 10 45Z" fill="black"/>
              <path d="M14 48L50 42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="font-baloo text-[42px] font-bold leading-[1.2] text-black lg:text-[48px]">
            Our most loved shoes this season.
          </h3>
          <p className="font-baloo text-[20px] font-normal leading-[1.5] text-[#727272]">
            Discover premium shoes designed for comfort, performance, and modern street style.
          </p>
        </div>
      </div>
    </section>
  )
}
