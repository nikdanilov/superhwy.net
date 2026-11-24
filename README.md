# superhwy.net

**An open-source database of Superintelligence.**

A minimal, database-free directory of frontier and open-weight models, labs, and verified inference providers with static JSON endpoints.

## Endpoints

All catalog endpoints are statically generated and served as open JSON:

- `GET /api.json` — provider-grouped catalog schema
- `GET /models.json` — canonical provider-agnostic models dictionary
- `GET /api/v1/models` — OpenAI-compatible `/v1/models` list

## Routes

- `/` — sortable 10-column models catalog (lab, providers, context, output, input modalities, weights, `$input / $output` pricing, release & updated dates)
- `/models/[slug]` — canonical model spec sheet and sortable provider breakdown with copyable provider model IDs
- `/providers` & `/providers/[slug]` — verified inference providers and their supported models
- `/labs` & `/labs/[slug]` — frontier & open-weight labs and their models
- `⌘K` / `Ctrl+K` — instant keyboard search across models, providers, and labs

## Project Structure

```text
superhwy/
├── app/                     # Next.js 16 + React 19 + Tailwind v4 web app & static JSON APIs
│   ├── src/
│   │   ├── app/             # App Router pages & /api.json, /models.json, /api/v1/models
│   │   ├── components/      # Header, CommandSearch, HowToUseModal, ModelsTable, ModelProvidersTable
│   │   └── lib/catalog.ts   # Typed single source of truth for labs, providers, and models
│   └── public/icons/        # Provider and lab SVGs
├── docs/
│   └── THEME.md             # Vice Obsidian theme, typography & brand mark guide
└── package.json             # Root script runner delegating to app/
```

## Quick Start

```bash
# Install dependencies (if not already installed)
npm --prefix app install

# Run the development server (http://localhost:3000)
npm run dev
```

## Scripts

Run from the repository root (or inside `app/`):

- `npm run dev` — start the Next.js dev server
- `npm run build` — create a production build
- `npm run lint` — run ESLint inside `app/`
- `npm run typecheck` — run `tsc --noEmit` inside `app/`

## License

[MIT](./LICENSE)
