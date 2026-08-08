import { notFound } from 'next/navigation'
import { Check, Clock3, LockKeyhole, PackageCheck, ShieldCheck } from 'lucide-react'
import CheckoutButton from '@/components/CheckoutButton'
import { getSupplier, suppliers } from '@/data/suppliers'

export function generateStaticParams() {
  return suppliers.map((supplier) => ({ slug: supplier.slug }))
}

export default async function SupplierProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supplier = getSupplier(slug)
  if (!supplier) notFound()

  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 aspect-[1.25] overflow-hidden rounded-[28px] bg-[#ecece7]">
                <img src={supplier.gallery[0]} alt={supplier.title} className="h-full w-full object-cover" />
              </div>
              {supplier.gallery.slice(1, 3).map((image, index) => (
                <div key={image} className="aspect-square overflow-hidden rounded-[22px] bg-[#ecece7]">
                  <img src={image} alt={`${supplier.title} example ${index + 2}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-[104px] lg:self-start">
            <div className="eyebrow">{supplier.category} supplier</div>
            <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.055em] md:text-5xl">{supplier.title}</h1>
            <p className="mt-5 text-base leading-7 text-muted">{supplier.short}</p>

            <div className="mt-7 flex items-end justify-between border-y border-line py-5">
              <div><div className="text-xs font-semibold uppercase tracking-[.09em] text-muted">One-time access</div><div className="mt-1 text-3xl font-black tracking-[-0.04em]">£{supplier.price.toFixed(2)}</div></div>
              <div className="flex items-center gap-2 text-xs font-bold"><Clock3 size={15}/> Instant digital delivery</div>
            </div>

            <div className="mt-5"><CheckoutButton slug={supplier.slug} /></div>
            <p className="mt-3 text-center text-xs leading-5 text-muted">This purchase unlocks supplier information only. Stock is purchased independently from the third-party supplier.</p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-line bg-white p-4"><ShieldCheck size={18}/><p className="mt-3 text-xs font-bold">Clear supplier information</p></div>
              <div className="rounded-2xl border border-line bg-white p-4"><PackageCheck size={18}/><p className="mt-3 text-xs font-bold">Added to your account</p></div>
            </div>
          </aside>
        </div>

        <div className="mt-16 grid gap-12 border-t border-line pt-14 lg:grid-cols-[.72fr_1.28fr]">
          <div><div className="eyebrow">Supplier details</div><h2 className="mt-4 text-3xl font-black tracking-[-0.045em]">What you’ll receive.</h2></div>
          <div className="space-y-3">
            <div className="rounded-[22px] border border-line bg-white p-5 sm:p-6">
              <div className="text-xs font-bold uppercase tracking-[.1em] text-muted">Supplier URL</div>
              <div className="mt-3 flex items-center justify-between rounded-xl bg-[#f2f2ee] px-4 py-4 font-mono text-sm tracking-[.16em] text-[#85877f]">•••••••••••••••••• <LockKeyhole size={17}/></div>
              <p className="mt-3 text-xs text-muted">Supplier details unlock after purchase and are available from your account.</p>
            </div>

            <Detail title="Supplier overview" body={supplier.overview} />
            <Detail title="Typical products" body={supplier.typicalProducts.join(' · ')} />
            <Detail title="Typical pricing" body={supplier.typicalPricing} />
            <Detail title="Minimum order" body={supplier.minimumOrder} />
            <Detail title="Shipping" body={supplier.shipping} />
            <Detail title="Who this supplier is best for" body={supplier.bestFor} />
          </div>
        </div>

        <div className="mt-12 rounded-[24px] border border-line bg-[#f4f4f0] p-6 md:p-8">
          <h2 className="text-xl font-black tracking-[-0.03em]">Important information</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              'Supplier stock, prices and availability can change.',
              'We do not guarantee profit or any resale price.',
              'Physical inventory is purchased separately from the supplier.',
              'We are not affiliated with Vinted or the brands referenced.',
            ].map((item) => <div key={item} className="flex items-start gap-3 text-sm leading-6 text-muted"><Check size={16} className="mt-1 shrink-0 text-ink"/>{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Detail({ title, body }: { title: string; body: string }) {
  return <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[200px_1fr]"><h3 className="text-sm font-bold">{title}</h3><p className="text-sm leading-6 text-muted">{body}</p></div>
}
