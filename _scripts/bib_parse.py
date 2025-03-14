import os
import yaml
from pybtex.database import parse_file
from pybtex.style.formatting.plain import Style
from pybtex.database.output.bibtex import Writer

bib_path = "assets/articles/LouisLeNezet.bib"
yml_path = "_data/articles.yml"

# Parse the bibliography file
bib_data = parse_file(bib_path, bib_format="bibtex")
formatted_entries = []

# Pybtex citation formatter
style = Style()

for key, entry in bib_data.entries.items():
    title = entry.fields.get("title", "Unknown Title")
    year = entry.fields.get("year", "Unknown Year")
    authors = " & ".join(person.get_part_as_text("last") for person in entry.persons.get("author", []))
    url = entry.fields.get("url", "")
    doi = entry.fields.get("doi", "")
    if doi != "":
        url = f"https://doi.org/{doi}"
    # Construct citation
    formatted_entry = {
        "title": title,
        "year": year,
        "authors": authors,
        "file": entry.fields.get("file", ""),
        "citation": f"{authors} ({year}). {title}.",
        "url": url
    }
    
    formatted_entries.append(formatted_entry)

# Write to YAML
with open(yml_path, "w") as outfile:
    yaml.dump(formatted_entries, outfile, default_flow_style=False, allow_unicode=True)

print(f"Generated {len(formatted_entries)} citations and saved to {yml_path}")