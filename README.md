# SOURCE. — Supplier Directory Storefront

A premium, mobile-first ecommerce storefront for selling digital access to curated clothing supplier information.

## Stack

- Next.js 15 / App Router
- TypeScript
- Tailwind CSS
- Lucide icons
- Stripe Checkout architecture

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add Stripe test credentials before testing checkout.

## Routes

- `/` — full storefront homepage
- `/suppliers` — filterable supplier catalogue
- `/suppliers/[slug]` — supplier product pages with locked supplier details
- `/dashboard` — customer dashboard UI / entitlement-ready account area
- `/api/checkout` — server-side Stripe Checkout session creation
- `/api/webhooks/stripe` — Stripe webhook verification and entitlement integration point

## Before production launch

The storefront and checkout boundary are implemented, while three business-specific integrations are deliberately provider-agnostic:

1. **Authentication** — connect Clerk, Auth.js, Supabase Auth, Firebase Auth, or your chosen provider.
2. **Database / entitlements** — persist purchases as `userId + supplierSlug` records when `checkout.session.completed` fires.
3. **Transactional email** — send purchase confirmation and supplier-access email from the Stripe webhook flow.

Do not expose real supplier URLs in `data/suppliers.ts`. Store sensitive supplier details in your database and return them only after entitlement checks.

## Legal model

Customers purchase access to supplier information. They do not purchase the physical products displayed on the storefront. Physical inventory is purchased separately and directly from third-party suppliers. The site does not guarantee profit or resale prices and should not imply affiliation with Vinted or referenced clothing brands.
