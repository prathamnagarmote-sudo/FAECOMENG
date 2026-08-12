import sys
import subprocess

# Install Pillow if not present
try:
    from PIL import Image, ImageChops
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image, ImageChops

def trim(im):
    # The background is white (255, 255, 255).
    # We can create a solid white image of the same size to find the difference.
    bg = Image.new("RGBA", im.size, (255, 255, 255, 255) if im.mode == "RGBA" else (255, 255, 255))
    diff = ImageChops.difference(im.convert("RGBA"), bg)
    bbox = diff.getbbox()
    if bbox:
        # Add a 10px margin around the cropped box
        margin = 15
        left = max(0, bbox[0] - margin)
        top = max(0, bbox[1] - margin)
        right = min(im.size[0], bbox[2] + margin)
        bottom = min(im.size[1], bbox[3] + margin)
        return im.crop((left, top, right, bottom))
    return im

try:
    img_path = r"C:\Users\ASUS\FAECOMENG\public\images\wood_portfolio_1.png"
    im = Image.open(img_path)
    cropped_im = trim(im)
    cropped_im.save(img_path)
    print("Success: Image cropped and saved.")
except Exception as e:
    print(f"Error: {e}")
