import SuppliersCatalogue from '@/components/SuppliersCatalogue'
import { suppliers } from '@/data/suppliers'

export default function SuppliersPage() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="max-w-3xl">
          <div className="eyebrow">Supplier directory</div>
          <h1 className="mt-4 text-5xl font-black tracking-[-0.06em] md:text-7xl">Find the right source.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">Browse clothing suppliers selected for resale-focused stock. Each purchase unlocks the supplier information — physical products are bought separately from the supplier.</p>
        </div>
        <SuppliersCatalogue suppliers={suppliers} />
      </div>
    </section>
  )
}
