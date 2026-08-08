import Link from 'next/link'
import { ArrowUpRight, CheckCircle2, ExternalLink, Package, ReceiptText, UserRound } from 'lucide-react'
import { suppliers } from '@/data/suppliers'

const purchased = suppliers.slice(0, 2)

export default async function DashboardPage({ searchParams }: { searchParams: Promise<{ checkout?: string }> }) {
  const { checkout } = await searchParams

  return (
    <section className="section-pad min-h-[70vh]">
      <div className="container-shell">
        {checkout === 'success' && (
          <div className="mb-7 flex items-start gap-3 rounded-[18px] border border-[#cfd8cb] bg-[#edf2e9] p-4 text-sm">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0"/><div><strong>Payment complete.</strong><p className="mt-1 text-[#5f655d]">In production, the Stripe webhook adds the purchased supplier to the signed-in account automatically.</p></div>
          </div>
        )}

        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div><div className="eyebrow">Customer account</div><h1 className="mt-4 text-5xl font-black tracking-[-0.055em] md:text-6xl">My Suppliers</h1><p className="mt-4 max-w-xl text-sm leading-6 text-muted">Everything you have purchased, kept in one place.</p></div>
          <span className="self-start rounded-full border border-line bg-white px-3 py-2 text-xs font-bold uppercase tracking-[.08em] text-muted">Demo dashboard</span>
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-[230px_1fr]">
          <aside className="self-start rounded-[22px] border border-line bg-white p-3 lg:sticky lg:top-[104px]">
            <nav className="space-y-1">
              <div className="flex items-center gap-3 rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white"><Package size={17}/> My Suppliers</div>
              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-muted"><ReceiptText size={17}/> Orders</div>
              <div className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-muted"><UserRound size={17}/> Account</div>
            </nav>
          </aside>

          <div className="space-y-5">
            {purchased.map((supplier, index) => (
              <article key={supplier.slug} className="overflow-hidden rounded-[26px] border border-line bg-white">
                <div className="grid md:grid-cols-[220px_1fr]">
                  <img src={supplier.image} alt="" className="h-52 w-full object-cover md:h-full" />
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div><div className="eyebrow">{supplier.category}</div><h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">{supplier.title}</h2></div>
                      <span className="self-start rounded-full bg-[#eef0ea] px-3 py-1.5 text-xs font-bold">Purchased</span>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-[#f5f5f1] p-4"><div className="text-xs font-semibold text-muted">Supplier URL</div><div className="mt-2 flex items-center justify-between gap-2 text-sm font-bold">supplier-example-{index + 1}.com <ExternalLink size={14}/></div></div>
                      <div className="rounded-2xl bg-[#f5f5f1] p-4"><div className="text-xs font-semibold text-muted">Last updated</div><div className="mt-2 text-sm font-bold">8 August 2026</div></div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3"><button className="btn-primary">Open supplier <ArrowUpRight size={15}/></button><Link href={`/suppliers/${supplier.slug}`} className="btn-secondary">View information</Link></div>
                  </div>
                </div>
              </article>
            ))}
            <p className="text-xs leading-5 text-muted">Demo supplier URLs are placeholders. Connect authentication and your database before launching customer accounts.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
