<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- Shared site chrome (header, footer) lives in src/routes/__root.tsx via src/components/site-*.tsx, so every page shares one nav.
- Marketing content lists (e.g. services) live in src/data/*.ts so pages reuse one source.
- Brand colors and reusable button/section styles are tokens and @utility rules in src/styles.css; components use semantic classes only.
- Shared logo URLs live in src/data/brand-assets.ts and resolve against the published Lovable origin because the custom-domain host does not serve relative Lovable asset paths.
