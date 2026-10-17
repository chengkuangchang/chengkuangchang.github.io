# Cheng-Kuang Chang — academic website

This is a static edition of the standard [al-folio](https://github.com/alshedivat/al-folio) academic template. The default template structure and upstream compiled CSS are retained. Personal changes are the content, a smaller profile photo, regular/light text weights as requested, and removal of unused sample sections.

Intended address: https://chengkuangchang.github.io/
Personal GitHub profile: https://github.com/penguinfish1688

## Publish

Place every file in this folder at the root of the `chengkuangchang/chengkuangchang.github.io` repository. Select Settings → Pages → Deploy from a branch → main → / (root). No Jekyll or other build step is needed for this static edition.

## Edit

- `index.html`: biography, news, publications (NeurIPS first), contact links.
- `site.css`: only personal overrides; `al-folio-main.css` and `al-folio-tailwind.css` are upstream theme assets.
- `CV_Cheng_Kuang_Chang.pdf`: the supplied CV, unchanged.
- `profile.jpg`: the owner's public Google Scholar profile photo.
- `state-inertia.bib` and `d2.bib`: downloadable arXiv citations.
- `site.js`: accessible BibTeX show/hide controls.
- `nav-toggle.js`: upstream al-folio mobile navigation.

## Provenance and licenses

Default rendered template and styles retrieved from https://alshedivat.github.io/al-folio/ on October 17, 2026. Runtime source: https://github.com/al-org-dev/al-folio-core . The MIT license is retained in `LICENSE-al-folio.txt`.

Roboto font files come from Google Fonts and are bundled locally; their license is in `LICENSE-Roboto.txt`. Font Awesome and Academicons use the pinned CDNs referenced in the default template. They require network access to display icons.

Biography and affiliations follow the owner's request. Education and honors follow the supplied CV. Publication title and author order were checked against arXiv. The NeurIPS 2026 venue follows the owner's CV and Google Scholar profile. Both BibTeX entries cite the publicly available arXiv versions.

- https://arxiv.org/abs/2606.11386
- https://arxiv.org/abs/2610.17124
- https://scholar.google.com/citations?user=_HGkGyIAAAAJ&hl=en

For a local preview, run `python -m http.server 8000 --bind 127.0.0.1` in this folder.
