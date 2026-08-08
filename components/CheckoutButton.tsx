'use client'

import { useState } from 'react'
import { ArrowRight, LoaderCircle } from 'lucide-react'

export default function CheckoutButton({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function checkout() {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Checkout is unavailable.')
      if (data.url) window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Checkout is unavailable.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={checkout} disabled={loading} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? <><LoaderCircle size={16} className="animate-spin" /> Preparing checkout</> : <>Get Supplier Access <ArrowRight size={16}/></>}
      </button>
      {error && <p role="alert" className="mt-2 text-xs leading-5 text-[#9c3939]">{error}</p>}
    </div>
  )
}
