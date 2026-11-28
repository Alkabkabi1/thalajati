-- ثلاجتي — user_recipes (shared public, no auth)
-- Run in Supabase SQL Editor, then paste URL + anon key into js/supabase-config.js

create table if not exists public.user_recipes (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  category text not null default 'main',
  cuisine text not null default 'خليجي',
  minutes int not null default 30,
  servings_adult int not null default 4,
  ingredients jsonb not null,
  steps jsonb not null default '[]'::jsonb,
  image text
);

alter table public.user_recipes enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert on table public.user_recipes to anon, authenticated;

create policy "anon can select user_recipes"
  on public.user_recipes
  for select
  to anon
  using (true);

create policy "anon can insert user_recipes"
  on public.user_recipes
  for insert
  to anon
  with check (true);

-- Sample user recipes (optional seed; safe to re-run if you dedupe by name yourself)
insert into public.user_recipes (name, category, cuisine, minutes, servings_adult, ingredients, steps)
values
(
  'بيض بالطماطم والبصل (-add by me)',
  'main',
  'خليجي',
  15,
  2,
  '[{"key":"egg","label":"بيض"},{"key":"tomato","label":"طماطم"},{"key":"onion","label":"بصل"}]'::jsonb,
  '["اقلي البصل والطماطم","أضف البيض وغطِّ حتى ينضج"]'::jsonb
),
(
  'عدس أحمر سريع (-add by me)',
  'soup',
  'خليجي',
  25,
  4,
  '[{"key":"lentils","label":"عدس"},{"key":"onion","label":"بصل"},{"key":"garlic","label":"ثوم"},{"key":"lemon","label":"ليمون"}]'::jsonb,
  '["اسلقي العدس مع البصل والثوم","هرسي وقدّمي مع ليمون"]'::jsonb
),
(
  'معكرونة بالدجاج والجبن (-add by me)',
  'main',
  'إيطالي',
  30,
  3,
  '[{"key":"pasta","label":"معكرونة"},{"key":"chicken","label":"دجاج"},{"key":"cheese","label":"جبن"},{"key":"garlic","label":"ثوم"}]'::jsonb,
  '["اسلقي المعكرونة","اقلي الدجاج مع الثوم","اخلطي مع الجبن وقدّمي"]'::jsonb
),
(
  'بطاطا بالجبن بالفرن (-add by me)',
  'side',
  'خليجي',
  40,
  4,
  '[{"key":"potato","label":"بطاطس"},{"key":"cheese","label":"جبن"},{"key":"butter","label":"زبدة"},{"key":"milk","label":"حليب"}]'::jsonb,
  '["اسلقي البطاطا واهرسيها مع الحليب والزبدة","غطّي بالجبن وادخلي الفرن"]'::jsonb
),
(
  'سموذي موز وحليب (-add by me)',
  'juice',
  'خليجي',
  5,
  1,
  '[{"key":"banana","label":"موز"},{"key":"milk","label":"حليب"}]'::jsonb,
  '["اخفقي الموز والحليب حتى يصير ناعمًا"]'::jsonb
);
