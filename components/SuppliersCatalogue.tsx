'use client'

import { useMemo, useState } from 'react'
import SupplierCard from '@/components/SupplierCard'
import type { Supplier } from '@/data/suppliers'

const categories = ['All', 'Vintage', 'Streetwear', 'Sportswear', 'Designer', 'Mixed']

type Sort = 'Popular' | 'Newest' | 'Price: Low to high' | 'Price: High to low'

export default function SuppliersCatalogue({ suppliers }: { suppliers: Supplier[] }) {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState<Sort>('Popular')

  const visible = useMemo(() => {
    const filtered = category === 'All' ? [...suppliers] : suppliers.filter((s) => s.category === category)
    if (sort === 'Price: Low to high') filtered.sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to low') filtered.sort((a, b) => b.price - a.price)
    if (sort === 'Newest') filtered.sort((a, b) => Number(Boolean(b.badge === 'New')) - Number(Boolean(a.badge === 'New')))
    if (sort === 'Popular') filtered.sort((a, b) => Number(Boolean(b.badge === 'Popular')) - Number(Boolean(a.badge === 'Popular')))
    return filtered
  }, [category, sort, suppliers])

  return (
    <>
      <div className="mt-8 flex flex-col gap-4 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((item) => (
            <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold transition-colors ${category === item ? 'bg-ink text-white' : 'border border-line bg-white text-[#555752] hover:border-[#bbb]'}`}>
              {item}
            </button>
          ))}
        </div>
        <label className="flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-[.08em] text-muted">
          Sort
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold normal-case tracking-normal text-ink outline-none focus:border-[#aaa]">
            <option>Popular</option><option>Newest</option><option>Price: Low to high</option><option>Price: High to low</option>
          </select>
        </label>
      </div>
      {visible.length ? (
        <div className="mt-9 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{visible.map((supplier) => <SupplierCard key={supplier.slug} supplier={supplier} />)}</div>
      ) : (
        <div className="my-16 rounded-[24px] border border-dashed border-[#ccc] py-16 text-center"><p className="font-bold">No suppliers in this category yet.</p><p className="mt-2 text-sm text-muted">Try another category.</p></div>
      )}
    </>
  )
}
