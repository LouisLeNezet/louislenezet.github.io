import os
import yaml
from pybtex.database import parse_file
from pybtex.style.formatting.plain import Style
from pybtex.database.output.bibtex import Writer

bib_path = "assets/CV/LouisLeNezet.bib"
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

    # Construct citation
    formatted_entry = {
        "title": title,
        "year": year,
        "authors": authors,
        "doi": entry.fields.get("doi", ""),
        "url": entry.fields.get("url", ""),
        "citation": f"{authors} ({year}). {title}. DOI: {entry.fields.get('doi', 'N/A')}."
    }
    
    formatted_entries.append(formatted_entry)

# Write to YAML
with open(yml_path, "w") as outfile:
    yaml.dump(formatted_entries, outfile, default_flow_style=False, allow_unicode=True)

print(f"Generated {len(formatted_entries)} citations and saved to {yml_path}")