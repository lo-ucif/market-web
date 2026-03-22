import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Stride Air Max',
    brand: 'Sport shoes',
    price: 120,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
  },
  {
    id: 2,
    name: 'Stride Air Max',
    brand: 'Sport shoes',
    price: 120,
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80',
  },
  {
    id: 3,
    name: 'Stride Air Max',
    brand: 'Sport shoes',
    price: 120,
    img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&q=80',
  },
]

export default function FeaturedProducts() {
  const [active, setActive] = useState(0)

  return (
    <section className="w-full bg-white py-10 lg:py-14">
      {/* Section Header */}
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <span className="inline-block rounded-[20px] bg-black px-5 py-2 font-baloo text-[18px] font-normal text-white">
          Featured Products
        </span>
        <p className="font-baloo text-[22px] font-bold text-[#808080]">
          Handpicked styles just for you.
        </p>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap items-center justify-center gap-10 px-6 lg:px-20">
        {products.map((p) => (
          <div
            key={p.id}
            className="relative h-[350px] w-[415px] max-w-full overflow-hidden rounded-[40px] bg-white shadow-[0px_0px_16px_1px_rgba(119,118,123,0.25)] transition hover:-translate-y-1 hover:shadow-[0px_0px_24px_4px_rgba(119,118,123,0.35)]"
          >
            {/* Price badge top-left */}
            <div className="absolute left-8 top-12 z-10">
              <span className="font-baloo text-[28px] font-bold text-black">{p.price}$</span>
            </div>

            {/* Shoe image - rotated, positioned */}
            <div className="absolute left-[80px] top-[-15px] flex h-[376px] w-[367px] items-center justify-center">
              <div className="rotate-[20deg]">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-[298px] w-[282px] rounded-[22px] object-cover"
                />
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 left-8 flex w-[calc(100%-4rem)] items-center justify-between">
              <div>
                <p className="font-baloo text-[26px] font-bold leading-[1.1] text-black">{p.name}</p>
                <p className="font-baloo text-[18px] font-normal text-[#727272]">{p.brand}</p>
              </div>
              <button
                type="button"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:scale-110"
                aria-label={`Add ${p.name} to cart`}
              >
                <svg width="17" height="20" viewBox="0 0 17 20" fill="white" aria-hidden>
                  <path d="M2 7V5.5C2 2.46 4.69 0 8 0s6 2.46 6 5.5V7H16l1 13H0L1 7h1zm2 0h8V5.5C12 3.57 10.21 2 8 2S4 3.57 4 5.5V7z"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`h-2.5 w-2.5 rounded-full transition-colors ${active === i ? 'bg-black' : 'bg-[#e0e0e0]'}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
