# DIMARDI

A frontend prototype built with Next.js App Router, TypeScript and Tailwind CSS. It includes a homepage, watch catalogue, new arrivals, watch detail previews, about, sell your watch, contact and draft information pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. If Turbopack is restricted by your environment, use `npm run dev -- --webpack`.

## Checks

```bash
npm run lint
npm run build
```

If Turbopack cannot open its local worker port, `npm run build -- --webpack` builds the same application with webpack.

## Editing

- **Contact information:** `lib/siteConfig.ts` contains `email`, `phoneDisplay` and `phoneHref`. All contact components and watch enquiries use these values. Update this file to change the email or phone number across the site.
- **Navigation:** `mainNavigation` in `lib/siteConfig.ts`.
- **Watch preview IDs:** `lib/watches.ts`. These are placeholders, not actual inventory.
- **Watch cards and image placeholders:** `components/ProductCard.tsx` and `components/WatchPlaceholder.tsx`.
- **Page content:** `app/<route>/page.tsx`. Watch details use `app/watches/[slug]/page.tsx`.
- **Shared styling:** `app/globals.css`. Existing typography uses local system fonts and requires no external font downloads.
- **Header/footer:** shared through `app/layout.tsx`.

## Prototype behaviour

All product names, specifications and prices are placeholders. Filter/sort controls are disabled and labelled as a collection preview. The sell enquiry form validates required fields and displays a demonstration confirmation; it does not send or save data, and photo upload is a visual placeholder. Social links remain placeholders.

Shipping, returns, terms and privacy content is draft information. No database, authentication, backend submission service, payments or cart is included.
