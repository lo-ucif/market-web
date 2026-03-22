import { useState } from 'react'

export default function CreateAccount() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Subscribed with: ${email}`)
    setEmail('')
  }

  return (
    <section className="w-full bg-white px-6 py-16 text-center lg:px-20 lg:py-20">
      <div className="mx-auto flex max-w-[768px] flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-baloo text-[52px] font-semibold leading-[1.2] tracking-[-0.6px] text-black lg:text-[60px]">
            Create Your Account
          </h2>
          <p className="font-baloo text-[18px] font-normal leading-[1.5] text-[#050906]">
            Create an account using your email to start shopping and manage your orders
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[513px] flex-col items-center gap-4"
        >
          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-[6px] border border-[rgba(5,9,6,0.15)] bg-[rgba(5,9,6,0.05)] px-3 py-2 font-inter text-[18px] font-normal text-[rgba(5,9,6,0.6)] outline-none transition-colors focus:border-black"
            />
            <button
              type="submit"
              className="shrink-0 rounded-[20px] bg-black px-6 py-2.5 font-inter text-[18px] font-medium text-white transition hover:opacity-80"
            >
              Subscribe
            </button>
          </div>
          <p className="font-inter text-[12px] font-normal text-[#050906] text-center">
            By subscribing you agree to receive updates and promotional content from us.
          </p>
        </form>
      </div>
    </section>
  )
}
