import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getSupplier } from '@/data/suppliers'

export async function POST(request: Request) {
  try {
    const { slug } = await request.json()
    const supplier = typeof slug === 'string' ? getSupplier(slug) : undefined

    if (!supplier) {
      return NextResponse.json({ error: 'Supplier not found.' }, { status: 404 })
    }

    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
      return NextResponse.json({
        error: 'Checkout is ready to connect. Add STRIPE_SECRET_KEY before launch.'
      }, { status: 503 })
    }

    const stripe = new Stripe(secretKey)
    const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'gbp',
            unit_amount: Math.round(supplier.price * 100),
            product_data: {
              name: `${supplier.title} — Supplier Access`,
              description: 'Digital access to third-party supplier information. No physical goods are included.',
            },
          },
        },
      ],
      metadata: {
        supplierSlug: supplier.slug,
        purchaseType: 'supplier_access',
      },
      success_url: `${origin}/dashboard?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/suppliers/${supplier.slug}`,
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json({ error: 'Unable to create checkout session.' }, { status: 500 })
  }
}
