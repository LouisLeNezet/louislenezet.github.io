---
layout: post
title: "New version of Pedixplorer available"
date: 2024-10-31
image: assets/img/pedixplorer/icon_Pedixplorer.png
description: The version 1.2.0 of the Pedixplorer R package is available on Bioconductor v3.20
tags:
  - bioinformatics
  - pedigree
  - R
---

# New version of the Bioconductor [Pedixplorer](https://www.bioconductor.org/packages/release/bioc/html/Pedixplorer.html) package

I've developed a R package dedicated to create, filter and draw complex pedigree.
This package is an update of the original [Kinship2 package](https://github.com/mayoverse/kinship2)
available in CRAN.
However, it wasn't anymore maintained, and I needed new features for my PhD project.

This new version allows to automatically create big and complex `Pedigree()` S4 object,
filter them and also compute additionnal information. From this object you can draw with
lots of option the pedigree layout. It is possible with this version to draw them as
`ggplot2` object allowing to add interactivity with the [plotly](https://plotly.com/) library.

All the new functions are also easily available now through a [shiny](https://shiny.posit.co/) application
available locally by calling the `ped_shiny()` or on a [web server](https://pedixplorer.univ-rennes.fr/).