import sys
import subprocess

try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def crop_top():
    img_path = r"C:\Users\ASUS\FAECOMENG\public\images\servicesss.png"
    im = Image.open(img_path)
    
    width, height = im.size
    # The grid overlay starts at top: 12% in the CSS.
    # We will crop the top 11% to remove the text but keep a tiny bit of padding.
    crop_top_pixels = int(height * 0.115)
    
    cropped_im = im.crop((0, crop_top_pixels, width, height))
    cropped_im.save(img_path)
    print(f"Success: Image cropped. Original size: {width}x{height}. New size: {cropped_im.size}")

if __name__ == "__main__":
    crop_top()
