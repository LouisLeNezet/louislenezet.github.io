---
layout: post
title: "First release of nf-core/phaseimpute available"
date: 2025-01-26
image: assets/img/phaseimpute/nf-core-phaseimpute_hexagonal_logo.png
description: The release 1.0.0 of nf-core/phaseimpute is now available
tags:
  - bioinformatics
  - imputation
  - nf-core
---

# First release of [nf-core/phaseimpute](https://nf-co.re/phaseimpute/1.0.0/)

I’m excited to announce the first official release of the [nf-core/phaseimpute](https://nf-co.re/phaseimpute/1.0.0/) pipeline, developed in collaboration with [Anabella Trigilla](https://github.com/atrigila) and the amazing nf-core community. This pipeline is designed to streamline the **genetic imputation** process, specifically focusing on the preparation of haplotype reference panels for imputing genomic data of target individuals.

While the initial version of the pipeline is focused on **low-pass sequencing data**, it supports state-of-the-art imputation tools such as [Glimpse](https://odelaneau.github.io/GLIMPSE/), [Stitch](https://github.com/rwdavies/STITCH) and [Quilt](https://github.com/rwdavies/QUILT). In the future, we plan to expand support for SNP chip array data with tools like impute5, Beagle5, and Minimac4.


## How it works

The **nf-core/phaseimpute** pipeline simplifies and automates several critical steps involved in genetic imputation. Here’s an overview of how the pipeline operates:

![phaseimpute_metromap](assets/img/phaseimpute/MetroMap_animated.svg)

1) Reference Panel Preprocessing
The first step involves processing your reference panel, ensuring that it’s compatible with the selected imputation tools. This includes operations like normalization, phasing, and extraction of relevant sites.
2) Imputation of Target Data
Next, the pipeline uses the selected software (Glimpse, Stitch, or Quilt) to impute your target BAM or VCF files, filling in missing genetic data based on the reference panel.
3) Simulation of Target Files
You can also simulate target files with varying sequencing depths, enabling you to test how different depths impact imputation accuracy.
4) Imputation Accuracy Evaluation
The pipeline allows you to compare the imputed data against a truth set. This truth set can be either computed using `bcftools mpileup` or provided as a VCF file of known genotypes.

## Key Features

- Easy integration with popular imputation tools (Glimpse, Stitch, Quilt, and future support for impute5, Beagle5, Minimac4).
- Comprehensive imputation workflow, from reference panel preparation to target data imputation.
- Simulated depth testing to evaluate the impact of sequencing depth on imputation accuracy.
- Comparison with truth sets to validate imputed data against known genotypes.

## Acknowledgments

This pipeline was built using the powerful [nf-core v3.0.2](https://nf-co.re/) framework and [Nextflow v24.10.1](https://www.nextflow.io/docs/latest/index.html).
We leveraged the excellent [nf-schema](https://nextflow-io.github.io/nf-schema/latest/) plugin for parameter validation, ensuring that the pipeline is both flexible and robust. Additionally, all modules, subworkflows, and workflows were rigorously tested using [nf-test](https://www.nf-test.com/).

## More informations

Feel free to explore the first release of the pipeline [here](https://nf-co.re/phaseimpute/1.0.0/), and stay tuned for future updates as we continue to enhance its capabilities!