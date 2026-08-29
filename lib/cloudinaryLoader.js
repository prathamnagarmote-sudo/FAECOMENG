export default function cloudinaryLoader({ src, width, quality }) {
  if (!src || typeof src !== 'string' || !src.includes('res.cloudinary.com')) {
    return src;
  }

  const uploadIndex = src.indexOf('/image/upload/');
  if (uploadIndex === -1) {
    return src;
  }

  const prefix = src.slice(0, uploadIndex + 14);
  let rest = src.slice(uploadIndex + 14);

  // Strip any existing transforms to avoid stacking
  rest = rest.replace(/^(?:[a-z0-9_]+,[a-z0-9_:,]+\/)+/i, '');
  rest = rest.replace(/^f_auto,q_auto(?:[:a-z0-9_,]+)?\//i, '');

  const q = quality ? `q_${quality}` : 'q_auto';
  const transforms = ['f_auto', q, 'c_limit'];
  if (width) {
    transforms.push(`w_${width}`);
  }

  return `${prefix}${transforms.join(',')}/${rest}`;
}
