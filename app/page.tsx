import Link from 'next/link'
import { ArrowRight, Check, Clock3, LockKeyhole, PackageCheck, Search, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react'
import SupplierCard from '@/components/SupplierCard'
import { suppliers } from '@/data/suppliers'

const faqs = [
  ['What am I buying?', 'You are purchasing access to supplier information, not the physical products shown on this website.'],
  ['Do you ship the products?', 'No. We provide supplier access. Any stock you want to buy is purchased separately and directly from the third-party supplier.'],
  ['How do I receive the supplier?', 'After a successful purchase, the supplier information is designed to appear in your account immediately and can also be included in your order confirmation email.'],
  ['Can I resell the items?', 'You choose what stock to buy from the supplier and where to resell it, subject to the rules of the marketplace you use.'],
  ['Are profits guaranteed?', 'No. Results depend on what you buy, your purchase price, demand, condition, fees and how you list and sell the items.'],
  ['Do suppliers ever change?', 'Yes. Supplier availability, pricing and stock can change. Supplier information should be reviewed and updated regularly.'],
]

const reviews = [
  ['“The vintage supplier gave me a much better starting point than scrolling through wholesale sites for hours.”', 'Jamie R.'],
  ['“Simple purchase, clear information and I knew exactly what I was getting before paying.”', 'Alex T.'],
  ['“I found a few pieces I actually wanted to test rather than buying a huge random bundle.”', 'Sam K.'],
]

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden border-b border-line">
        <div className="container-shell grid min-h-[720px] items-center gap-14 py-16 md:grid-cols-[1.02fr_.98fr] md:py-20 lg:min-h-[760px]">
          <div>
            <div className="eyebrow mb-6">Curated supplier access</div>
            <h1 className="max-w-[9ch] text-[58px] font-black leading-[.94] tracking-[-0.065em] sm:text-[72px] lg:text-[88px]">
              Find stock worth reselling.
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-7 text-muted md:text-lg">
              Carefully selected clothing suppliers for vintage, streetwear, sportswear and more. Skip the endless searching and go straight to sources worth checking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/suppliers" className="btn-primary">
                Browse Suppliers <ArrowRight size={16} />
              </Link>
              <Link href="#how-it-works" className="btn-secondary">How It Works</Link>
            </div>
            <p className="mt-5 text-xs leading-5 text-muted">You are purchasing supplier information. Physical stock is ordered separately from each supplier.</p>
          </div>

          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 pt-14 sm:space-y-4">
                <div className="aspect-[.82] overflow-hidden rounded-[28px] bg-[#ecece7]">
                  <img src={suppliers[0].image} alt="Vintage clothing stock" className="h-full w-full object-cover" />
                </div>
                <div className="rounded-[22px] border border-line bg-white p-4 shadow-soft">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[.1em] text-muted">Vintage</span>
                    <span className="text-sm font-bold">£19.99</span>
                  </div>
                  <div className="mt-2 text-[15px] font-bold">Ralph Lauren supplier</div>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-[22px] border border-line bg-[#f0f0eb] p-5">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.1em] text-muted"><LockKeyhole size={14}/> Supplier details</div>
                  <div className="mt-5 h-2 w-4/5 rounded-full bg-[#d6d6cf]" />
                  <div className="mt-2 h-2 w-full rounded-full bg-[#deded8]" />
                  <div className="mt-2 h-2 w-2/3 rounded-full bg-[#deded8]" />
                  <div className="mt-5 rounded-xl bg-white px-3 py-3 text-xs font-semibold text-muted">URL unlocks after purchase</div>
                </div>
                <div className="aspect-[.82] overflow-hidden rounded-[28px] bg-[#ecece7]">
                  <img src={suppliers[1].image} alt="Streetwear clothing stock" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-xs font-bold shadow-soft">
              <PackageCheck size={15} /> Instant digital access
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-[#f4f4f0]">
        <div className="container-shell grid grid-cols-2 gap-px py-0 md:grid-cols-4">
          {[['Curated suppliers', Search], ['Instant access', Clock3], ['One-time payment', ShoppingBag], ['Reseller focused', ShieldCheck]].map(([label, Icon]: any) => (
            <div key={label} className="flex items-center gap-3 border-line px-1 py-6 text-sm font-semibold md:justify-center md:border-r last:border-r-0">
              <Icon size={17} strokeWidth={1.8} /> {label}
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow">Featured suppliers</div>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">Suppliers worth knowing.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted">Selected around the categories people actually search for when sourcing resale stock.</p>
            </div>
            <Link href="/suppliers" className="btn-secondary self-start md:self-auto">View all suppliers <ArrowRight size={15}/></Link>
          </div>
          <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {suppliers.slice(0, 6).map((supplier) => <SupplierCard key={supplier.slug} supplier={supplier} />)}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-pad border-y border-line bg-[#f4f4f0]">
        <div className="container-shell">
          <div className="eyebrow">How it works</div>
          <div className="mt-4 grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <h2 className="max-w-md text-4xl font-black tracking-[-0.05em] md:text-5xl">Find suppliers. Source stock. Start selling.</h2>
            <div className="divide-y divide-[#dcdcd6] border-y border-[#dcdcd6]">
              {[
                ['01', 'Choose a supplier', 'Browse curated suppliers based on the kind of stock you want to resell.'],
                ['02', 'Purchase access', 'Pay once to unlock the supplier information. No recurring membership required.'],
                ['03', 'Start sourcing', 'Visit the supplier, buy stock independently, then list your items on the marketplaces you choose.'],
              ].map(([number, title, copy]) => (
                <div key={number} className="grid gap-4 py-7 sm:grid-cols-[70px_1fr]">
                  <div className="text-sm font-black tracking-[.1em] text-muted">{number}</div>
                  <div><h3 className="text-xl font-bold tracking-[-0.025em]">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-muted">{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[30px] bg-[#e9e9e3]">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85" alt="Clothing store stock" className="aspect-[1.05] h-full w-full object-cover" />
          </div>
          <div className="lg:pl-8">
            <div className="eyebrow">Why SOURCE.</div>
            <h2 className="mt-4 max-w-lg text-4xl font-black tracking-[-0.05em] md:text-5xl">Better stock starts with better suppliers.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {['Save hours searching', 'Sources selected for resellers', 'Simple one-time purchases', 'Instant digital delivery', 'Clear supplier information', 'New suppliers added regularly'].map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-line pt-4 text-sm font-semibold"><Check size={17} className="mt-0.5 shrink-0" />{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <div className="eyebrow !text-[#a7aaa3]">What you receive</div>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">More than a link.</h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-[#b8bab4]">Each listing is structured so you can understand what the supplier offers before you buy access.</p>
            <ul className="mt-8 space-y-3 text-sm text-[#e1e2de]">
              {['Supplier website / direct link', 'Product categories and typical pricing', 'Minimum-order information', 'Shipping notes', 'Ordering tips', 'Example resale opportunities'].map((item) => <li key={item} className="flex items-center gap-3"><Check size={16}/>{item}</li>)}
            </ul>
          </div>
          <div className="rounded-[30px] border border-white/10 bg-white p-5 text-ink shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div><span className="text-xs font-bold uppercase tracking-[.1em] text-muted">Vintage supplier</span><h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">Vintage Branded Clothing Supplier</h3></div>
              <span className="rounded-full bg-[#eef0ea] px-3 py-1.5 text-xs font-bold">£12.99</span>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[['Typical pricing', '£3–£15 / piece'], ['Minimum order', 'Small test bundles'], ['Shipping', 'UK + selected intl.'], ['Stock', 'Mixed vintage']].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-line bg-[#fafaf7] p-4"><div className="text-xs font-semibold text-muted">{label}</div><div className="mt-1 text-sm font-bold">{value}</div></div>
              ))}
            </div>
            <div className="mt-3 rounded-2xl border border-line p-4">
              <div className="text-xs font-semibold text-muted">Supplier URL</div>
              <div className="mt-2 flex items-center justify-between gap-4 rounded-xl bg-[#f2f2ee] px-4 py-3 font-mono text-sm tracking-[.15em] text-[#85877f]">•••••••••••••••• <LockKeyhole size={16}/></div>
              <p className="mt-3 text-xs text-muted">Supplier details unlock after purchase.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="section-pad">
        <div className="container-shell">
          <div className="flex items-end justify-between gap-6"><div><div className="eyebrow">Customer feedback</div><h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-5xl">Straightforward, by design.</h2></div><Sparkles className="hidden md:block" size={28} strokeWidth={1.4}/></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map(([quote, name]) => (
              <figure key={name} className="flex min-h-[230px] flex-col justify-between rounded-[24px] border border-line bg-white p-6">
                <blockquote className="text-[17px] font-semibold leading-7 tracking-[-0.02em]">{quote}</blockquote>
                <figcaption className="mt-8 text-xs font-bold uppercase tracking-[.1em] text-muted">{name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad border-y border-line bg-[#f4f4f0]">
        <div className="container-shell grid gap-10 lg:grid-cols-[.6fr_1.4fr]">
          <div><div className="eyebrow">FAQ</div><h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">Before you buy.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-muted">Clear answers about what supplier access is, and what it is not.</p></div>
          <div className="divide-y divide-[#d8d8d2] border-y border-[#d8d8d2]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-[17px] font-bold tracking-[-0.02em]"><span>{question}</span><span className="text-xl font-light transition-transform group-open:rotate-45">+</span></summary>
                <p className="max-w-2xl pt-3 text-sm leading-6 text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell rounded-[32px] bg-[#dfe4dc] px-6 py-14 text-center sm:px-10 md:py-20">
          <div className="eyebrow">Start sourcing</div>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black tracking-[-0.055em] md:text-6xl">Ready to find your next supplier?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#5f655f]">Browse the current directory and choose the stock category that fits what you want to sell.</p>
          <Link href="/suppliers" className="btn-primary mt-7">Browse Suppliers <ArrowRight size={16}/></Link>
        </div>
      </section>
    </>
  )
}
