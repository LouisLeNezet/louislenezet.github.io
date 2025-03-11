from pdf2image import convert_from_path
import os

# Define input/output directories
pdf_dir = "assets/posters/"

# Process each PDF
all_path = [os.path.join(dp, f) for dp, dn, fn in os.walk(os.path.expanduser(pdf_dir)) for f in fn]
for pdf_file in all_path:
    print(pdf_file)
    if pdf_file.endswith(".pdf"):
        images = convert_from_path(pdf_file, first_page=1, dpi=150)  # Convert first page to image
        thumbnail_path = pdf_file.replace(".pdf", ".jpg")
        images[0].save(thumbnail_path, "JPEG")  # Save thumbnail
        print(f"Thumbnail saved: {thumbnail_path}")
