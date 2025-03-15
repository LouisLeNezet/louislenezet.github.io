---
layout: page
title: My projects
permalink: /projects/
---

# PhD projects

During my thesis I've developed different tools that are available publicly.

## [Pedixplorer](https://www.bioconductor.org/packages/release/bioc/html/Pedixplorer.html) Bioconductor package

The latest release is available in the v3.20 release of [Bioconductor](https://www.bioconductor.org).

*Routines to handle family data with a Pedigree object. The initial purpose was to create correlation structures that describe family relationships such as kinship and identity-by-descent, which can be used to model family data in mixed effects models, such as in the coxme function. Also include a tool for Pedigree drawing which is focused on producing compact layouts without intervention. Recent additions include utilities to trim the Pedigree object with various criteria and kinship for the X chromosome.*

The package is available on [Bioconductor](https://www.bioconductor.org/packages/release/bioc/html/Pedixplorer.html) and can be installed using:

```R
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install("Pedixplorer")
```

The latest development version is available on [GitHub](https://github.com/LouisLeNezet/Pedixplorer) and allow to create a interactive pedigree plot as follow.

```R
library(Pedixplorer)
library(plotly)
data("sampleped")
data("relped")
pedi <- Pedigree(sampleped, relped)
plot_list <- plot(
    pedi, symbolsize = 1.5,
    title = "My pedigree",
    lwd = 0.5, ggplot_gen = TRUE,
    tips = c(
        "id", "avail",
        "affection",
        "num", "dateofbirth"
    )
)$ggplot %>%
plotly::ggplotly(
    tooltip = "text"
) %>%
    plotly::layout(hoverlabel = list(bgcolor = "darkgrey"))
```

<iframe src="/assets/img/pedixplorer/pedigree_interactive.html" width="100%" height="600px" style="border:none;"></iframe>

A dedicated website is available at [louislenezet.github.io/Pedixplorer](https://louislenezet.github.io/Pedixplorer)

## [Phaseimpute](https://nf-co.re/phaseimpute) nf-core pipeline

**nf-core/phaseimpute** is a bioinformatics pipeline to phase and impute genetic data.
The pipeline is constituted of the five following steps:

- **Check chromosomes names**: Validates the presence of the different contigs in all variants and alignment files, ensuring data compatibility for further processing
- **Panel preparation**: Perform the phasing, QC, variant filtering, variant annotation of the reference panel
- **Imputation**: Impute genotypes in the target dataset using the reference panel
- **Simulate**: Generate simulated datasets from high-quality target data for testing and validation purposes.
- **Concordance**: Evaluate the accuracy of imputation by comparing the imputed data against a truth dataset.

You can launch the pipeline using:

```bash
nextflow run nf-core/phaseimpute \
   -profile <docker/singularity/.../institute> \
   --input <samplesheet.csv>  \
   --genome "GRCh38" \
   --panel <phased_reference_panel.csv> \
   --steps "panelprep,impute" \
   --tools "glimpse1" \
   --outdir <OUTDIR>
```

## BioShinyModules

I've participated to the St-Judes BioHackathon in 2023 and worked on a R package proposing
[shiny modules](https://shiny.posit.co/r/articles/improve/modules/)
often used in biology shiny applications (e.g. import / export data, common graphics, ...). The aim is to
have a common layout for all the modules to make them easily usable and operable.
The package isn't yet published, but we hope to make it available through Bioconductor as a proof of concept
to pave the way for nice and reusable shiny components.

## Files to Database

My PhD project is based on an already existing project of the IGDR Dog Genetics Team. Therefore multiple
people have already worked on this project, and numerous files (i.e. xlsx, csv, ...) have been created
along the years to record the data. However, no aggregation was already done, and the data needed to be
normalized to be able to analyse it.

As the amount of data and normalization to be processed was important, I decided to create a python script
allowing to automatize the process. This script is now available as a python package but needs to be
modified to be generalisable to any project.

This will be done in the near future. I hope !
