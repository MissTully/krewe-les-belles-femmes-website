# Architecture & SQL capture (Les Belles Femmes)

Companion to [`BUILD_PLAN.md`](../BUILD_PLAN.md).

## Why two sources

| Source | Role |
|---|---|
| **This repo** (`migrations/`, `src/lib/*`) | Living LBF implementation (Neon + Better Auth + TanStack) |
| **Shamrock** `sql/kos_*.sql` + `SOFTWARE_ARCHITECTURE.md` | Proven krewe-portal behaviors to port |

Do not paste Shamrock SQL unchanged. Translate tables/RPCs into LBF migrations and server actions.

## Shamrock SQL inventory (reference)

| File | Capability to port |
|---|---|
| `sql/kos_role_approvals_onboarding.sql` | Applications → officer approve → member |
| `sql/kos_member_profiles_and_titles.sql` | Roster fields / titles |
| `sql/kos_rich_member_profiles.sql` | Richer profile cards |
| `sql/kos_public_events_and_rsvp.sql` | Public events + RSVP |
| `sql/kos_event_studio.sql` | Officer event tools |
| `sql/kos_payments.sql` | Payments ledger patterns |
| `sql/kos_shop_studio.sql` | Shop (optional for LBF) |
| `sql/kos_raffles.sql` | Skip for LBF v1 |
| `supabase/functions/zeffy-webhook` | Webhook → ledger pattern (swap provider if ACH ≠ Zeffy) |

## LBF migration status

| File | Status |
|---|---|
| `migrations/auth/0001_auth.sql` | Present (Better Auth) — copy/apply when Stage Door on |
| `migrations/0002_member_profiles.sql` | Present (edit-code comp cards) |
| `0003+` applications, profiles v2, events, payments, soirée, producers, officers | **Planned** in BUILD_PLAN §6.2 |

## Config surface to extract later (`krewe.config`)

- `name`, `short`, `founded`, `motto`, `colors`, `domain`
- Social + role emails
- Payment provider keys / ACH form IDs
- Feature flags: `soireeTickets`, `duesReminders`, `producersPage`, `shopPortal`
