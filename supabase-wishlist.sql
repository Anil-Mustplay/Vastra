-- Run this once in Supabase SQL Editor.
create table if not exists public.wishlists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_sku text not null,
  created_at timestamptz not null default now(),
  unique(user_id, product_sku)
);

alter table public.wishlists enable row level security;
create policy "Users read own wishlist" on public.wishlists for select using ((select auth.uid()) = user_id);
create policy "Users add own wishlist" on public.wishlists for insert with check ((select auth.uid()) = user_id);
create policy "Users remove own wishlist" on public.wishlists for delete using ((select auth.uid()) = user_id);
