# CV source (LaTeX / AltaCV)

Source files for `Louis_Robinet_CV.pdf` (served at `public/Louis_Robinet_CV.pdf`).
Built from the [AltaCV](https://github.com/liantze/AltaCV) template.

## Files

- `main.tex` — main document (header, education, work experience)
- `page1sidebar.tex` / `page2sidebar.tex` — sidebar content (about, skills, languages, publications, certifications)
- `altacv.cls` — the AltaCV document class
- `sample.bib` — bibliography (publications)
- `loulou_pro.jpg` — profile photo used in the header (`lulu.jpg` is an unused alternate)

## Compile

Requires a LaTeX distribution (TeX Live) with `pdflatex`, `biber` and the AltaCV
dependencies (fontawesome, academicons, lato, ...).

```sh
pdflatex main.tex
biber main
pdflatex main.tex
pdflatex main.tex
```

The resulting `main.pdf` should be copied to `../public/Louis_Robinet_CV.pdf`.
