# My github page

This repository host the scripts and files necessary to build my [personal website](https://louislenezet.github.io).
It is based on the [jekyll](https://jekyllrb.com/) framework.
I took inspiration from different personal github page that I found really nice:

- [Maxime U Garcia](https://maxulysse.github.io/)
- [Jean Monlong](https://jmonlong.github.io/)

The organisation is as follow :

- `_pages` : Markdown files for the different pages of the website
- `_posts` : Markdown for different news happening for my projects
- `_site`  : HTML built static website

The layout is based on the [Zolan](https://github.com/artemsheludko/zolan) - Modern & Minimal Theme for Jekyll

## Environment needed

To create and test the website locally you'll need a few tools installed.
A conda environment is available and can be created with the following command:

```bash
mamba env create -f environment.yml
mamba activate env_website
```

You might need to update the different software

```bash
gem update --system
bundle update --bundler
bundle update
```

## To build the website

Use the following command:

```bash
bundle exec jekyll build
bundle exec jekyll serve
```

## Spelling check

The spelling is done through a github workflow and additional words
can be added in `.wordlist.txt`.
This file can be sorted and cleaned with the following command:

```bash
sort -u -o .wordlist.txt .wordlist.txt
```


## Latex CV compilation

You need to have a latex distribution installed on your computer.

```bash
sudo apt install texlive-full  # Ubuntu/Debian
```

The CV is written in latex and can be compiled with the following command:

```bash
pdflatex cv_llenezet_2025
biber cv_llenezet_2025
pdflatex cv_llenezet_2025
gs -dNOPAUSE -dBATCH -sDEVICE=jpeg -r300 -sOutputFile=cv_llenezet_2025_%01d.jpg cv_llenezet_2025.pdf
```
