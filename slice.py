import sys
try:
    from PIL import Image
    
    img = Image.open(r"C:\Users\ASUS\FAECOMENG\public\images\servicesss.png")
    print(f"Image dimensions: {img.size}")
    
    # We can slice it into a 4x2 grid, assuming the cards are evenly spaced.
    # We will output the width and height of a 4x2 cell to see if we can just slice it
    w, h = img.size
    print(f"Cell width: {w/4}, Cell height: {h/2}")
except Exception as e:
    print(f"Error: {e}")
