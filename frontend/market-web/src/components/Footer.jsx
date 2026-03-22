export default function Footer() {
  return (
    <footer className="w-full bg-white px-16 pb-10 pt-10 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6">
        {/* Logo + Nav Links */}
        <div className="flex flex-col items-center gap-8">
          {/* Shoe icon */}
          <div className="-scale-y-100 rotate-180">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 45C10 45 5 35 10 25C15 15 25 12 35 15C45 18 52 28 50 38C48 48 38 52 28 50C18 48 10 45 10 45Z" fill="black"/>
              <path d="M14 48L50 42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-8 font-inter text-[16px] font-semibold text-[#050906]">
              <li><a href="#" className="transition-opacity hover:opacity-60">shop</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-60">about us</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-60">contact</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-60">cart</a></li>
              <li><a href="#" className="transition-opacity hover:opacity-60">login</a></li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#e0e0e0]" />

        {/* Bottom credits row */}
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-inter text-[14px] font-normal text-[#050906]">
            © 2026 loucif tamer ahmes. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 font-inter text-[14px] font-normal text-[#050906] underline">
            <a href="#" className="hover:opacity-70">Privacy Policy</a>
            <a href="#" className="hover:opacity-70">Terms of service</a>
            <a href="#" className="hover:opacity-70">Cookie settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
