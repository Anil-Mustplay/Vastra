# Vastra implementation status

The repository now includes a Next.js App Router foundation with TypeScript, Tailwind CSS, React and Lucide icons. Prisma models cover users, categories, products, orders, order items and coupons using PostgreSQL through `DATABASE_URL`.

Cloudinary is represented by a server-only configuration adapter and remains disabled until real credentials are added. Razorpay is intentionally a dummy payment adapter at `lib/payments/razorpay.ts`; it returns a test payment order and does not process money. Replace this adapter only after adding the official Razorpay plugin/credentials and server-side signature verification.

The admin route has a temporary demo session boundary so it is not publicly open by default. The login page is intentionally marked demo-only; replace it with Supabase Auth/Auth.js or a real bcrypt/JWT implementation before production. Never trust client totals, expose service-role keys, or accept payment success without server-side verification.
