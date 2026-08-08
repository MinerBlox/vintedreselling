import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!secretKey || !webhookSecret) {
    return NextResponse.json({ error: 'Stripe webhook is not configured.' }, { status: 503 })
  }

  const signature = request.headers.get('stripe-signature')
  if (!signature) return NextResponse.json({ error: 'Missing Stripe signature.' }, { status: 400 })

  const stripe = new Stripe(secretKey)
  const body = await request.text()

  try {
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      const supplierSlug = session.metadata?.supplierSlug

      // Production integration point:
      // 1. Resolve the signed-in customer from session.customer_details/session.client_reference_id.
      // 2. Persist an entitlement keyed by customer + supplierSlug.
      // 3. Send the purchase confirmation email.
      // Authentication/database/email providers are intentionally adapter-ready rather than hard-coded.
      console.info('Supplier access purchased', { supplierSlug, sessionId: session.id })
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Stripe webhook signature error:', error)
    return NextResponse.json({ error: 'Invalid webhook signature.' }, { status: 400 })
  }
}
