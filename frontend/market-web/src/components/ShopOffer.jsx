const saleProducts = [
  {
    id: 1,
    name: 'Stride Air Max',
    price: 120,
    oldPrice: 150,
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&q=80',
  },
  {
    id: 2,
    name: 'Stride Air Max',
    price: 120,
    oldPrice: 150,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80',
  },
  {
    id: 3,
    name: 'Stride Air Max',
    price: 120,
    oldPrice: 150,
    img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=300&q=80',
  },
  {
    id: 4,
    name: 'Stride Air Max',
    price: 120,
    oldPrice: 150,
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&q=80',
  },
]

function SaleCard({ product }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-[30px] bg-white p-4 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:shadow-[0px_0px_24px_4px_rgba(0,0,0,0.2)]">
      <div className="h-[160px] w-full overflow-hidden rounded-[20px] bg-[#f7f7f7]">
        <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
      </div>
      <div className="w-full px-1">
        <p className="font-baloo text-[22px] font-bold text-black">{product.name}</p>
        <div className="flex items-center justify-between">
          <span className="font-manrope text-[18px] font-bold text-[#777] line-through">
            $ {product.oldPrice}.00
          </span>
          <span className="font-baloo text-[20px] font-bold text-red-600">
            {product.price}$
          </span>
        </div>
      </div>
    </div>
  )
}

export default function ShopOffer() {
  return (
    <section className="w-full bg-white px-6 py-10 lg:px-16 lg:py-14">
      {/* Section Header */}
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <span className="inline-block rounded-[20px] bg-black px-5 py-2 font-baloo text-[18px] font-normal text-white">
          Limited Time Offer
        </span>
        <p className="font-baloo text-[22px] font-bold text-[#808080]">
          Up to 30% Off Selected Styles
        </p>
      </div>

      {/* Grid + Large Feature Image */}
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        {/* 2x2 Smaller Product Grid */}
        <div className="grid grid-cols-2 gap-10 lg:gap-10">
          {saleProducts.map((p) => (
            <SaleCard key={p.id} product={p} />
          ))}
        </div>

        {/* Large Feature Card */}
        <div className="flex flex-col items-start gap-2">
          <div className="h-[560px] w-full overflow-hidden rounded-[30px] bg-white shadow-[0px_0px_16px_1px_rgba(0,0,0,0.25)] lg:w-[580px]">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80"
              alt="Stride Air Max - Featured"
              className="h-full w-full rotate-[20deg] scale-110 object-cover"
            />
          </div>
          <div className="w-full px-2 lg:w-[300px]">
            <p className="font-baloo text-[26px] font-bold text-black">Stride Air Max</p>
            <div className="flex items-center justify-between">
              <span className="font-manrope text-[18px] font-bold text-[#777] line-through">$ 150.00</span>
              <span className="font-baloo text-[22px] font-bold text-red-600">120$</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
