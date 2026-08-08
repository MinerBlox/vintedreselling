import Link from 'next/link'

const footerLinks = ['Suppliers', 'How It Works', 'FAQ', 'Contact', 'Terms', 'Privacy', 'Refund Policy']

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#f4f4f0]">
      <div className="container-shell py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-start">
          <div>
            <div className="text-lg font-black tracking-[-0.04em]">SOURCE.</div>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted">
              Curated supplier information for people sourcing clothing to resell. Buy access once, then purchase stock directly from the third-party supplier.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 md:justify-self-end">
            {footerLinks.map((label) => {
              const href = label === 'Suppliers' ? '/suppliers' : label === 'How It Works' ? '/#how-it-works' : label === 'FAQ' ? '/#faq' : '#'
              return <Link key={label} href={href} className="text-sm font-medium text-[#555752] hover:text-ink">{label}</Link>
            })}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs leading-5 text-muted md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl">We are an independent supplier-directory service and are not affiliated with Vinted or any brands shown on this website.</p>
          <p>© {new Date().getFullYear()} SOURCE.</p>
        </div>
      </div>
    </footer>
  )
}
