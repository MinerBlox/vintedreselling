# SOURCE. — Supplier Directory Storefront

A premium, mobile-first ecommerce storefront for selling digital access to curated clothing supplier information.

## Stack

- Next.js 15 / App Router
- TypeScript
- Tailwind CSS
- Lucide icons
- Stripe Checkout architecture
- Vercel-ready deployment

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and add Stripe test credentials before testing checkout.

## Deploy to Vercel

1. Sign in to Vercel with GitHub.
2. Choose **Add New → Project**.
3. Import `MinerBlox/vintedreselling`.
4. Vercel should automatically detect **Next.js**. Keep the default build settings.
5. Deploy once without Stripe if you only want to preview the storefront.
6. For checkout, add these under **Project Settings → Environment Variables**:
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `NEXT_PUBLIC_SITE_URL` — your production Vercel URL or custom domain, e.g. `https://your-project.vercel.app`
7. Redeploy after adding/changing environment variables.
8. In Stripe, create a webhook endpoint pointing to:
   `https://YOUR-DOMAIN/api/webhooks/stripe`
9. Subscribe that endpoint to `checkout.session.completed`, then copy its `whsec_...` signing secret into `STRIPE_WEBHOOK_SECRET` in Vercel.

A `vercel.json` file is included so the repository is explicitly identified as a Next.js project. No static export is used because checkout/webhook routes require a server runtime.

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
