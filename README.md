# Panda v2 design system demo

A small design system built with **Panda CSS v2** and **Ark UI**, published once and consumed by two apps with a single config line.

This is the Demo 2 project from **"Rebuilding Panda's Engine"** at SailsConf 2026, by [Adebesin Tolulope (Lope)](https://lope.adebesin.com). Tokens follow [BethelFlow](https://bethelflow.com)'s theme.

```
packages/
  ds/          @bethelflow/ds: tokens, recipes and Ark UI components (Switch, Avatar, ThemeToggle, Logo)
apps/
  showcase/    the design system board            → http://localhost:5180
  checkout/    Grace Chapel's event checkout       → http://localhost:5181
```

Each app adopts the design system with one line:

```ts
// apps/checkout/panda.config.ts
export default defineConfig({
  designSystem: '@bethelflow/ds',
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
})
```

## Get started

```bash
bun install
bun run dev      # publishes @bethelflow/ds, generates both apps, starts both dev servers
```

## Publish and consume by hand

```bash
cd packages/ds && bunx panda lib        # pack tokens, recipes and pre-extracted styles into dist/
cd apps/checkout && bunx panda codegen  # the app picks it all up through `designSystem`
```

## Try what the talk showed

1. **Change the design system, every app follows.** In `packages/ds/panda.config.ts`, change `control: { value: '14px' }` to `'24px'`. Restart `bun run dev` and refresh both apps: every input and button gets rounder.
2. **Override one token in one app.** In `apps/checkout/panda.config.ts`, uncomment the `theme` line. Restart `bun run dev`. Panda prints that the app's value wins, the checkout turns purple, and the showcase stays blue.
3. **Wrapper components.** Wrap a recipe component in your own (`MyButton`)? List it in the recipe's `jsx` option, or use a pattern: `jsx: [/Button$/]`. See [JSX tracking](https://panda-css.com/docs/recipes/jsx-tracking).

## Scripts

| Command          | What it does                                                |
| ---------------- | ----------------------------------------------------------- |
| `bun run dev`    | Run both apps (Turborepo publishes the design system first) |
| `bun run build`  | Build both apps                                             |
| `bun run lint`   | Lint with oxlint                                            |
| `bun run format` | Format with oxfmt                                           |

## Notes

- Dark mode is a `.dark` class on `<html>`. Every colour token has a light and a dark value.
- Components are built on Ark UI for behaviour and accessibility, and styled with Panda slot recipes.
- Tokens follow BethelFlow's production theme. Fonts: Rethink Sans.
- Photos from [Unsplash](https://unsplash.com).

## Learn more

- [Panda CSS v2 announcement](https://panda-css.com/blog/panda-css-v2)
- [Build a design system](https://panda-css.com/docs/design-systems/build-a-design-system) · [Publishing](https://panda-css.com/docs/design-systems/publishing) · [Consume with Panda](https://panda-css.com/docs/design-systems/consume-with-panda)
- [Ark UI](https://ark-ui.com)
