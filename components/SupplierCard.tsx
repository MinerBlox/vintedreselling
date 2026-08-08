import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Supplier } from '@/data/suppliers'

export default function SupplierCard({ supplier }: { supplier: Supplier }) {
  return (
    <article className="group">
      <Link href={`/suppliers/${supplier.slug}`} className="block">
        <div className="relative aspect-[4/4.7] overflow-hidden rounded-[24px] bg-[#ecece7]">
          <img src={supplier.image} alt={supplier.title} className="product-image" />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] backdrop-blur">
              {supplier.category}
            </span>
            {supplier.badge && (
              <span className="rounded-full bg-ink px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                {supplier.badge}
              </span>
            )}
          </div>
        </div>
        <div className="pt-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-[18px] font-bold tracking-[-0.025em]">{supplier.title}</h3>
              <p className="mt-1.5 max-w-[34ch] text-sm leading-6 text-muted">{supplier.short}</p>
            </div>
            <ArrowUpRight size={18} className="mt-1 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
            <span className="text-xs font-semibold uppercase tracking-[0.09em] text-muted">One-time access</span>
            <strong className="text-[16px]">£{supplier.price.toFixed(2)}</strong>
          </div>
        </div>
      </Link>
    </article>
  )
}
