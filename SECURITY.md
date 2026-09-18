# Vastra security status

The static storefront is suitable for a preview, not for handling production orders or admin access by itself.

Before production:

1. Add Supabase Auth and require an authenticated user for `/admin`.
2. Store admin authorization in Supabase `app_metadata` or a protected profile table, never editable `user_metadata`.
3. Keep RLS enabled. Public users may read active catalog rows only; orders, order items, reviews, coupons, and inventory mutations must require authenticated policies.
4. Create orders through a server-side route or Edge Function. Recalculate prices, discounts, shipping, stock, and totals there.
5. Verify Razorpay signatures server-side. Never accept payment status from browser input.
6. Keep Cloudinary API secrets, Supabase service-role keys, and payment secrets in Vercel environment variables only.
7. Add rate limits to auth, payment, coupon, review, and order endpoints.

The browser-safe Supabase publishable key may be exposed to the frontend; the service-role key must never be exposed.
