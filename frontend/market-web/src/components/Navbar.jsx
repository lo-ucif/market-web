import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-[1000] flex w-full items-center justify-between bg-white px-8 py-6 shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
          <path d="M4 28 C4 28 16 4 28 4 L28 28 Z" fill="black" />
        </svg>
        <span className="font-baloo text-[20px] font-bold text-black tracking-tight">StepStyle</span>
      </div>

      {/* Nav Links - Desktop */}
      <ul className={`absolute left-0 top-full z-[999] w-full list-none flex-col gap-3 bg-white px-8 py-5 shadow-md md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
        <li>
          <a href="#" className="rounded-[20px] bg-black px-5 py-2 font-baloo text-[18px] font-normal text-white transition-opacity hover:opacity-85">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="px-2 font-baloo text-[18px] font-normal text-black transition-opacity hover:opacity-60">
            SHOP
          </a>
        </li>
        <li>
          <a href="#" className="px-2 font-baloo text-[18px] font-normal text-black transition-opacity hover:opacity-60">
            ABOUT US
          </a>
        </li>
        <li>
          <a href="#" className="px-2 font-baloo text-[18px] font-normal text-black transition-opacity hover:opacity-60">
            CONTACT
          </a>
        </li>
        <li>
          <a href="#" className="px-2 font-baloo text-[18px] font-normal text-black transition-opacity hover:opacity-60">
            CART
          </a>
        </li>
      </ul>

      {/* Cart Icon */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:scale-105"
          aria-label="Open cart"
        >
          {/* Shopping bag icon matching Figma */}
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none" aria-hidden>
            <path d="M3 5.5C3 2.46 5.24 0 8.5 0C11.76 0 14 2.46 14 5.5V6H16L17 20H0L1 6H3V5.5Z" fill="white" opacity="0.9"/>
            <path d="M3 8V5.5C3 2.74 5.46 0.5 8.5 0.5C11.54 0.5 14 2.74 14 5.5V8" stroke="black" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex flex-col gap-1.5 border-none bg-transparent p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-[22px] rounded-sm bg-black" />
          <span className="block h-0.5 w-[22px] rounded-sm bg-black" />
          <span className="block h-0.5 w-[22px] rounded-sm bg-black" />
        </button>
      </div>
    </nav>
  )
}
