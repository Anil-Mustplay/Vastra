# VASTRA

Premium Indian ethnic-fashion storefront built from the supplied Vastra build specification.

## Run locally

Open `index.html` in a browser, or serve the folder with any static server. No build step is required for this prototype.

## Included

- Responsive Vastra storefront with premium maroon, gold and warm-neutral styling
- Home, collections, catalog filters, sort, seeded product cards, wishlist and persistent bag
- Cart drawer with quantities, remove controls and subtotal
- Newsletter success state and checkout integration point
- Accessible labels, semantic sections, responsive mobile layout

## Production integration points

The specification's PostgreSQL/Prisma, authentication, Cloudinary and Razorpay services should be connected behind server routes before launch. Never trust browser totals or expose provider secrets; recalculate order totals, stock and payment signatures server-side.

## Supabase

The new Supabase project is `Vastra` in `ap-south-1`. Its schema and seed data are applied, with RLS enabled on exposed tables. The storefront reads active products from Supabase using the publishable key. Copy `.env.example` to `.env.local` for server-side configuration and keep secret keys out of frontend code.

## Cloudinary development mode

`.env.local` contains temporary placeholder values with `CLOUDINARY_ENABLED=false`. These values are intentionally non-functional. Replace them with real Cloudinary credentials before enabling uploads; never expose `CLOUDINARY_API_SECRET` in browser code.
