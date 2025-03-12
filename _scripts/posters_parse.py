from pdf2image import convert_from_path
import yaml
import os

# Define input/output directories
pdf_dir = "assets/posters/"
yml = "_data/posters.yml"

# Create YAML file
with open(yml, "w") as outfile:
    outfile.write("")

# Process each PDF
all_path = [os.path.join(dp, f) for dp, dn, fn in os.walk(os.path.expanduser(pdf_dir)) for f in fn]
for poster_file in all_path:
    if poster_file.endswith(".pdf"):
        images = convert_from_path(poster_file, first_page=1, dpi=150)  # Convert first page to image
        thumbnail_path = poster_file.replace(".pdf", ".jpg")
        images[0].save(thumbnail_path, "JPEG")  # Save thumbnail
        print(f"Thumbnail saved: {thumbnail_path}")
    if poster_file.endswith(".cff"):
        with open(poster_file) as stream:
            try:
                poster_cff = yaml.safe_load(stream)
                title = poster_cff["title"]
                date = poster_cff["date"]
                congress = poster_cff["congress"]
                location = poster_cff["location"]
                cff = poster_file
                thumbnail = poster_file.replace(".cff", ".jpg")
                pdf = poster_file.replace(".cff", ".pdf")
                with open(yml, "a") as outfile:
                    outfile.write(f"- title: \"{title}\"\n")
                    outfile.write(f"  date: \"{date}\"\n")
                    outfile.write(f"  congress: \"{congress}\"\n")
                    outfile.write(f"  location: \"{location}\"\n")
                    outfile.write(f"  cff: \"{cff}\"\n")
                    outfile.write(f"  thumbnail: \"{thumbnail}\"\n")
                    outfile.write(f"  pdf: \"{pdf}\"\n")
                    outfile.write("\n")
            except yaml.YAMLError as exc:
                print(exc)