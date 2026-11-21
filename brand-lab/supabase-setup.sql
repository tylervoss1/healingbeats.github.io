-- Healing Beats Brand Lab: run this once in Supabase > SQL Editor > New query > Run.
-- Creates the shared board (combos), the logo list (logos), a public "logos" file bucket,
-- and opens them to anyone with the page link (no logins).

create extension if not exists pgcrypto;

create table if not exists public.combos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null default 'Untitled',
  note text not null default '',
  author text,
  likes jsonb not null default '{}'::jsonb,
  data jsonb not null default '{}'::jsonb
);

create table if not exists public.logos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  url text not null,
  author text
);

alter table public.combos enable row level security;
alter table public.logos enable row level security;

drop policy if exists "open read combos" on public.combos;
drop policy if exists "open write combos" on public.combos;
drop policy if exists "open update combos" on public.combos;
drop policy if exists "open delete combos" on public.combos;
create policy "open read combos"   on public.combos for select using (true);
create policy "open write combos"  on public.combos for insert with check (true);
create policy "open update combos" on public.combos for update using (true) with check (true);
create policy "open delete combos" on public.combos for delete using (true);

drop policy if exists "open read logos" on public.logos;
drop policy if exists "open write logos" on public.logos;
drop policy if exists "open delete logos" on public.logos;
create policy "open read logos"   on public.logos for select using (true);
create policy "open write logos"  on public.logos for insert with check (true);
create policy "open delete logos" on public.logos for delete using (true);

-- Live updates so everyone sees new combos without refreshing
do $$ begin
  alter publication supabase_realtime add table public.combos;
exception when duplicate_object then null; end $$;
do $$ begin
  alter publication supabase_realtime add table public.logos;
exception when duplicate_object then null; end $$;

-- Public bucket for logo files (5 MB cap, images only)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('logos', 'logos', true, 5242880, array['image/svg+xml','image/png','image/jpeg','image/webp'])
on conflict (id) do update set public = true, file_size_limit = 5242880,
  allowed_mime_types = array['image/svg+xml','image/png','image/jpeg','image/webp'];

drop policy if exists "open upload logos" on storage.objects;
drop policy if exists "open read logo files" on storage.objects;
create policy "open upload logos"    on storage.objects for insert with check (bucket_id = 'logos');
create policy "open read logo files" on storage.objects for select using (bucket_id = 'logos');
