const reviews = [
  {
    id: 1,
    name: 'Ahmed',
    text: 'I recently purchased a pair of shoes from this store and I am incredibly happy!',
  },
  {
    id: 2,
    name: 'Ahmed',
    text: 'I recently purchased a pair of shoes from this store and I am incredibly happy!',
  },
  {
    id: 3,
    name: 'Ahmed',
    text: 'I recently purchased a pair of shoes from this store and I am incredibly happy!',
  },
]

export default function Testimonials() {
  return (
    <section className="w-full bg-white px-6 py-10 text-center lg:px-20 lg:py-14">
      {/* Header */}
      <div className="mb-10 flex flex-col items-center gap-2">
        <span className="inline-block rounded-[20px] bg-black px-5 py-2 font-baloo text-[18px] font-normal text-white">
          Reviews
        </span>
        <p className="font-baloo text-[22px] font-bold text-[#808080]">
          testimony OF OUR CUSTOMERS
        </p>
      </div>

      {/* Review Cards */}
      <div className="flex flex-wrap items-stretch justify-center gap-16 lg:gap-24">
        {reviews.map((r) => (
          <div
            key={r.id}
            className="flex w-[320px] max-w-full flex-col items-center gap-2 py-8"
          >
            <p className="font-baloo text-[24px] font-normal leading-[1.3] text-black">
              {r.name}
            </p>
            <p className="font-baloo text-[22px] font-normal leading-[1.3] text-black text-center">
              {r.text}
            </p>
            <button
              type="button"
              className="mt-2 inline-block rounded-[20px] bg-black px-5 py-2 font-baloo text-[18px] font-normal text-white transition hover:opacity-80"
            >
              Reviews
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
