# PPI Design System

**Central de Suporte · Programa Piauí Primeira Infância · v1.0 · jun/2026**

A small, opinionated design system for the **Central de Suporte PPI** — the internal support tool used by the Programa Piauí Primeira Infância (PPI), the state of Piauí's early-childhood program. The system is **institutional, confiável e acessível**: navy blues for governmental seriousness, an emerald accent that nods to the early-childhood mission, dense but breathable information surfaces, and zero decorative flourish.

## Context

PPI is the early-childhood program for the state of Piauí (Brazil). The Central de Suporte is the internal back-office used by the program's team (visitadoras, supervisoras, coordenadores municipais, gestores estaduais, and the support team itself) to register, triage, route and resolve operational support tickets that come in via WhatsApp, phone, email, and forms.

There is **one product** in scope:

- **Central de Suporte** — a web app with a login screen and a single dense dashboard (intake form on the left, ticket queue + metrics + charts on the right).

### Sources used to author this system

- `uploads/DESIGN_SYSTEM.md` — the canonical brand & component spec (in Portuguese). Kept verbatim at `guidelines/source-spec.md`.
- `uploads/logo-ppi.png` — the program's master logo (multicolour hands forming the PPI mark). Copied to `assets/logo-ppi.png`.

No Figma, no code repo, no slide deck was provided — the spec doc + logo are the only source of truth.

---

## Content fundamentals

Copy is written in **Brazilian Portuguese (pt-BR)**, formal-but-warm, and almost always **action-first**.

- **Tone:** institutional, calm, plainspoken. Reads like a competent civil-service tool, not a SaaS product. No marketing hype, no exclamation marks, no emoji.
- **Casing:** sentence case in body and headings (e.g. `Registrar chamado`, not `Registrar Chamado`). Eyebrows and captions are **UPPERCASE** with letter-spacing.
- **Person:** prefer infinitives and noun phrases over personal pronouns — `Salvar atendimento`, `Encaminhar para TI`, `Nenhum chamado nesta fila` — rather than `Salve seu atendimento`. When direct address is needed, use `você` (informal-formal, the Brazilian default), never `tu`.
- **Domain vocabulary:** stay in the program's jargon. *Chamado* (ticket), *atendimento* (case/handling), *encaminhamento* (forwarding/routing), *visitadora*, *coordenadora municipal*, *fila*. Don't translate or anglicize these.
- **Numbers & dates:** `09/jun`, `1.245 chamados`, `12 nas últimas 24h`. pt-BR conventions throughout (`.` for thousands, `,` for decimals).
- **Status labels:** the four ticket states are canonical and must not be paraphrased: `Aberto`, `Em atendimento`, `Encaminhado para TI`, `Resolvido`.
- **Buttons:** infinitive verbs — `Salvar`, `Excluir`, `Encaminhar`, `Atender`, `Reabrir`, `Sair`, `Entrar`. Never `OK`, `Cancelar` is fine.
- **No emoji.** No unicode decoration. The brand reads as government infrastructure.
- **Examples (good):**
  - `Registrar chamado` · `Salvar atendimento` · `Exportar CSV` · `Nenhum chamado nesta fila no momento.` · `Encaminhar ao coordenador municipal de Floriano para avaliação local.`

---

## Visual foundations

### Palette & vibe

- **Brand primary:** navy `#143d73` (`--blue`) over a slightly lighter page background `#f4f8fb` (`--bg`). The topbar is a darker navy gradient (`#0c2b56 → #143d73`) capped with a `6px` emerald underline (`--green #009b77`) — that underline is the single most recognizable signature of the brand.
- **Accent:** emerald `#009b77` for the topbar underline, success/resolved states, priority chart bars, and the lower stop of the chart gradient.
- **Semantics:** mustard `#f2b31b` for recommendation/forwarding callouts; brick red `#ad3636` for destructive actions, always isolated on the right.
- **Imagery:** there is essentially none. No photography, no illustration beyond the logo. The visual interest comes from typographic rhythm, the topbar underline, and the green→blue chart gradient — nothing else. **Do not invent imagery, gradients, or background textures.**

### Typography

Single typeface: **Inter** (400 / 700 / 800 / 900). Scale ranges from `0.72rem` (eyebrow) up to `2.4rem` (display, login). Headings sit at `font-weight: 800`; pills and metric values push to `900`. Body is `1rem / 1.6`, muted text drops to `0.9rem / 1.55`. Eyebrows are uppercase with `letter-spacing: 0.08em` and `opacity: 0.72`. Display has `letter-spacing: -0.02em`.

### Backgrounds

- Page = `--bg #f4f8fb` (almost-white blue-tinted neutral).
- Cards = pure white `--surface`.
- No gradients except: (1) the topbar (135° navy), (2) the column-chart fill (180° green→blue).
- No background images, no patterns, no texture. Surfaces are flat with a 1px line border.

### Borders, radii, shadows

- Borders are always `1px solid var(--line) #d7e4ec`.
- Radii follow a tight scale: `6` for the logo, `7` for inputs/buttons, `8` for cards/panels/tabs, `999` for pills. **Don't introduce new radii.**
- Shadows are soft and blue-tinted, never grey:
  - `--shadow: 0 16px 40px rgba(0, 63, 115, .09)` for cards & panels
  - `--shadow-sm: 0 4px 14px rgba(0, 63, 115, .07)` for hover
- No inner shadows, no neumorphism, no protection gradients.

### Layout

- Main desktop grid: `[300–390px intake] [1fr workspace]` with `gap: 20px` and `padding: 20px clamp(16px, 4vw, 42px) 42px`.
- The left intake column is `position: sticky; top: 16px` until ≤1080px, where the layout collapses to a single column.
- Forms use a 2-column grid for short paired fields (município + perfil, área + canal); the description and forwarding fields go full-width.
- The submit button stretches `fullWidth` at the end of a stacked form.

### Interaction & motion

- **Animation:** none decorative. Transitions are `.15s ease` on `background-color`, `border-color`, and `box-shadow`; chart fills tween over `.4s ease`. No bounces, no scale-on-load, no spinners with motion paths.
- **Hover (buttons):** primary → `--blue-dark`; ghost → slightly deeper `#e2eef6`; delete → `#ffecec`; light (topbar) → bumps to `rgba(255,255,255,.22)`.
- **Press:** no scale or color shift beyond hover state.
- **Focus:** the ring is `box-shadow: 0 0 0 3px rgba(0, 94, 168, 0.16)` plus `border-color: var(--blue)`. Always visible — accessibility floor.
- **Transparency & blur:** transparency is only used inside the topbar (`rgba(255,255,255,.14/.22/.26)` for the `light` button). No `backdrop-filter`, no glassmorphism.

### Iconography (see ICONOGRAPHY below)

Minimal. No icon font ships with the system. Inline glyph fallback (`↻`, `×`) is used in component examples; production should adopt a Lucide-style outline set if/when needed.

---

## Iconography

The brand spec does **not** define an icon set. Today:

- The Topbar carries the **logo** (`assets/logo-ppi.png`) and nothing else — no settings cog, no notification bell.
- The `IconButton` component is included for refresh / close actions and uses **unicode glyphs** (`↻`, `×`) as placeholders in the demo card.
- There is no emoji usage anywhere. There is no decorative icon usage in the dashboard.

### Recommendation for icon needs

If iconography becomes needed (filter chips, sidebar nav, etc.), adopt **[Lucide](https://lucide.dev)** via CDN — outline, 1.5px stroke, square-corner caps, 24px default. Lucide's geometry matches the brand's flat-line aesthetic (no fills, no rounded "friendly" curves) and reads as institutional.

> ⚠️ **Flagged substitution:** No icon set was provided. The `palma-da-mao` UI kit adopts **Lucide 0.454.0 via CDN** (outline, matching the institutional aesthetic); the rest of the system still uses unicode glyph placeholders. Please attach the official PPI icon set if one exists.

> ⚠️ **Flagged substitution:** No Inter font binaries were provided. Inter is loaded from **Google Fonts** in `tokens/fonts.css`. If your deployment context requires self-hosted webfonts, please upload the Inter TTF/WOFF2 files and I'll wire them into `@font-face` rules in this same file.

---

## Index

```
PPI Design System/
├─ readme.md                       ← you are here
├─ styles.css                      ← single entry point — link this from consumers
├─ tokens/
│  ├─ fonts.css                    ← Inter via Google Fonts
│  ├─ colors.css                   ← brand, neutrals, semantics, aliases
│  ├─ typography.css               ← size / weight / line-height / letter-spacing tokens
│  ├─ spacing.css                  ← 8-base scale + layout vars
│  ├─ radius.css                   ← 6 / 7 / 8 / 999
│  ├─ shadow.css                   ← --shadow, --shadow-sm
│  └─ base.css                     ← minimal reset + .eyebrow utility + :focus-visible
├─ assets/
│  └─ logo-ppi.png                 ← master logo (225×225 PNG, no transparency)
├─ guidelines/
│  ├─ source-spec.md               ← original Portuguese spec, verbatim
│  ├─ colors-blues.card.html       ← Design System tab — Colors group
│  ├─ colors-greens.card.html
│  ├─ colors-neutrals.card.html
│  ├─ colors-semantic.card.html
│  ├─ colors-pills.card.html
│  ├─ type-headings.card.html      ← Type group
│  ├─ type-body.card.html
│  ├─ type-eyebrow.card.html
│  ├─ spacing-scale.card.html      ← Spacing group
│  ├─ spacing-radius.card.html
│  ├─ spacing-shadow.card.html
│  ├─ brand-logo.card.html         ← Brand group
│  └─ brand-topbar.card.html
├─ components/
│  ├─ core/                        ← Button, IconButton
│  ├─ forms/                       ← Field, Input, Select, Textarea
│  ├─ surfaces/                    ← Card, MetricCard, TicketCard
│  ├─ feedback/                    ← StatusPill, RecommendationBlock, EmptyState
│  ├─ navigation/                  ← Topbar, Tabs
│  └─ charts/                      ← BarChart, ColumnChart
├─ ui_kits/
│  ├─ palma-da-mao/                ← Home da aplicação "Primeira Infância na Palma da Mão"
│  │  ├─ index.html
│  │  ├─ Sidebar.jsx · HomePage.jsx · image-slot.js
│  │  └─ README.md
│  └─ central-de-suporte/          ← Login + Dashboard, interactive
│     ├─ index.html
│     ├─ Login.jsx
│     ├─ IntakePanel.jsx
│     ├─ TicketsBoard.jsx
│     ├─ Workspace.jsx
│     ├─ Dashboard.jsx
│     └─ README.md
└─ SKILL.md                        ← Agent Skill manifest (cross-compat with Claude Code)
```

### Component inventory

| Group | Components |
|-------|------------|
| `core` | `Button` · `IconButton` |
| `forms` | `Field` · `Input` · `Select` · `Textarea` |
| `surfaces` | `Card` · `MetricCard` · `TicketCard` |
| `feedback` | `StatusPill` · `RecommendationBlock` · `EmptyState` |
| `navigation` | `Topbar` · `Tabs` |
| `charts` | `BarChart` · `ColumnChart` |

All components consume tokens from `styles.css` — they don't ship their own colors or sizes.

---

## Caveats

- **Inter** loads from Google Fonts. Self-host if your environment requires.
- **No icon set** is defined; Lucide is recommended if/when needed.
- The UI kit is a **single-product** kit — there's only one product surface in the brand. If the program adds (e.g.) a public-facing portal or a mobile app, those would warrant their own kits in `ui_kits/`.
