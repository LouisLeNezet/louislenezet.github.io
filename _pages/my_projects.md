---
layout: page
title: My projects
permalink: /projects/
toc: true
---

# PhD projects

During my thesis I've developed different tools that are available publicly.

## [Pedixplorer](https://www.bioconductor.org/packages/release/bioc/html/Pedixplorer.html)

The latest release is available in the v3.20 release of [Bioconductor](https://www.bioconductor.org).

*Routines to handle family data with a Pedigree object. The initial purpose was to create correlation structures that describe family relationships such as kinship and identity-by-descent, which can be used to model family data in mixed effects models, such as in the coxme function. Also include a tool for Pedigree drawing which is focused on producing compact layouts without intervention. Recent additions include utilities to trim the Pedigree object with various criteria and kinship for the X chromosome.*

The package is available on [Bioconductor](https://www.bioconductor.org/packages/release/bioc/html/Pedixplorer.html) and can be installed using:

```R
if (!requireNamespace("BiocManager", quietly = TRUE))
    install.packages("BiocManager")
BiocManager::install("Pedixplorer")
```

<br>

The latest development version is available on [GitHub](https://github.com/LouisLeNezet/Pedixplorer) and allow to create a interactive pedigree plot as follow.

<iframe src="/assets/img/pedixplorer/pedigree_interactive.html" width="100%" height="600px" style="border:none;"></iframe>

A dedicated website is available at [louislenezet.github.io/Pedixplorer](https://louislenezet.github.io/Pedixplorer)

## [nf-core/phaseimpute](https://nf-co.re/phaseimpute)

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

<br>

## BioShinyModules

I've participated to the St-Judes BioHackathon in 2023 and worked on a R package proposing
[shiny modules](https://shiny.posit.co/r/articles/improve/modules/)
often used in biology shiny applications (e.g. import / export data, common graphics, ...). The aim is to
have a common layout for all the modules to make them easily usable and operable.
The package isn't yet published, but we hope to make it available through Bioconductor as a proof of concept
to pave the way for nice and reusable shiny components.

## [Files2db](https://louislenezet.github.io/files2db/)

My PhD project is based on an already existing project of the IGDR Dog Genetics Team. Therefore multiple
people have already worked on this project, and numerous files (i.e. xlsx, csv, ...) have been created
along the years to record the data. However, no aggregation was already done, and the data needed to be
normalized to be able to analyse it.

My PhD project builds upon an existing research program developed by the Dog Genetics Team at IGDR.
Over the years, numerous data files (e.g., Excel spreadsheets, CSV files, and other formats) were created
to record and manage project data.
However, these datasets remained fragmented, with no unified system for aggregation or normalization,
making large-scale analyses difficult.

To address this challenge, I developed a Python tool that automates the aggregation, cleaning, and
normalization of heterogeneous data sources.
The project has since evolved into a reusable Python package that provides a reproducible framework
for transforming disparate datasets into a consistent format.
Although originally designed for my PhD work, it can be applied to many research projects that require
reliable and reproducible data integration workflows.

# Personal projects

As the previous example illustrates, I enjoy automating repetitive tasks and experimenting with new
technologies. Here are some of the personal projects I have made available publicly.

## [AutoCatFeeder](https://github.com/LouisLeNezet/autoCatFeeder)

<div style="display:flex; flex-wrap:wrap; align-items:center; gap:3rem;">

  <div style="flex:1 1 70%; min-width:300px;">
    <p>
        My cat had a tendency to overeat when food was freely available.
        Since commercial automatic feeders were relatively expensive,
        I decided to design and build my own solution.
    </p>
    <p>
        With a bit of plywood, a few 3D-printed parts, a recycled toy motor and an
        Arduino UNO, this feeder can dispense as many small or large portions as needed
        for any cat. For larger kibble, the helical screw should be
        printed on a larger scale.
    </p>
    <p>
        The project includes both the hardware construction plans and the
        software required to operate the feeder, all of which are available
        on GitHub. I have been using it daily for more than six years, and
        it continues to work reliably.
    </p>
  </div>

  <div style="flex:1 1 10%; min-width:150px; text-align:center;">
    <img
      src="/assets/img/personal/autocatfeeder.png"
      alt="AutoCatFeeder exploded view"
      style="max-width:100%; height:auto;"
    >
  </div>

</div>

## [AikiGrade](https://github.com/LouisLeNezet/AikiGrade)

<div style="display:flex; flex-wrap:wrap; align-items:center; gap:3rem;">

  <div style="flex:1 1 70%; min-width:300px;">
    <p>
        I practice Aikido, a Japanese martial art that requires students to learn and master
        a wide variety of attacks, techniques, and forms before grading examinations.
    </p>
    <p>
        To help practitioners prepare for these exams, I developed AikiGrade, a Flutter application
        that generates self-assessment sessions.
        The application allows users to practice techniques, test their knowledge, and track their
        progress in a structured way.
    </p>
    <p>
        It is freely available on the web and run locally on the web browser.
        Everything is stored in json file on the user machine.
    </p>
  </div>

  <div style="flex:1 1 10%; min-width:150px; text-align:center;">
    <img
      src="/assets/img/personal/aikigrade.png"
      href="https://louislenezet.github.io/AikiGrade/"
      alt="AïkiGrade"
      style="max-width:100%; height:auto;"
    >
  </div>

</div>
