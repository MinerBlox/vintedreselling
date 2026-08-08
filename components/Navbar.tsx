'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['Suppliers', '/suppliers'],
  ['How It Works', '/#how-it-works'],
  ['Reviews', '/#reviews'],
  ['FAQ', '/#faq'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-[#fbfbf8]/90 backdrop-blur-xl">
      <div className="container-shell flex h-[72px] items-center justify-between">
        <Link href="/" className="text-[17px] font-black tracking-[-0.04em]">SOURCE.</Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-sm font-medium text-[#555752] transition-colors hover:text-ink">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/dashboard" className="px-3 text-sm font-semibold">Sign In</Link>
          <Link href="/suppliers" className="btn-primary">Browse Suppliers</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center md:hidden" aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-[#fbfbf8] md:hidden">
          <div className="container-shell flex flex-col py-5">
            {links.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} className="border-b border-line py-4 text-base font-semibold">
                {label}
              </Link>
            ))}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link href="/dashboard" className="btn-secondary">Sign In</Link>
              <Link href="/suppliers" className="btn-primary">Browse</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
