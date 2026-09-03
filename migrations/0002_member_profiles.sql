-- Member profile cards for The Circle.
-- One row per email. The edit_code_hash lets a member update later
-- without a full login system (that comes in Phase 2).
create table if not exists member_profiles (
  id text primary key,
  email text not null unique,
  edit_code_hash text not null,
  preferred_name text not null,
  role text not null,
  year_joined text,
  city text,
  bio text not null,
  photo_data_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists member_profiles_name_idx
  on member_profiles (preferred_name);
