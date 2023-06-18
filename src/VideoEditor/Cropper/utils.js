/**
 * find the x and y position where Canvas should start drawing from
 * in order to draw a frame with the correct dimensions.
 *
 * The video is centered horizontally in a div that hides the video
 * overflowing the frame
 */
export function computeCrop({ cropWidth, cropHeight, width, height }) {
  if (cropWidth == width && cropHeight == height) {
    return [0, 0, width, height];
  }
  const sourceAspect = width / height;
  const cropAspectRatio = cropWidth / cropHeight;
  let anchor, newCropHeight, newCropWidth;
  let cropType = getCropType(cropAspectRatio);
  switch (cropType) {
    case 'portrait':
      // where a portrait crop aspect ratio is less than the video's aspect
      anchor = cropAspectRatio < sourceAspect ? 'width' : 'height';
    case 'square':
    case 'landscape':
      // were a landscape crop aspect ratio is greater than the video's aspect
      anchor = cropAspectRatio > sourceAspect ? 'width' : 'height';
      break;
  }
  if (anchor == 'height') {
    newCropHeight = height;
    newCropWidth = newCropHeight * cropAspectRatio;
  } else {
    newCropWidth = width;
    cropHeight = newCropWidth / cropAspectRatio;
  }

  let x = (width - newCropWidth) / 2;
  let y = (height - newCropHeight) / 2;
  return [x, y, newCropWidth, newCropHeight];
}

export function getCropType(aspectRatio) {
  let cropType;
  if (aspectRatio > 1) {
    cropType = 'landscape';
  } else if (aspectRatio < 1) {
    cropType = 'portrait';
  } else {
    cropType = 'square';
  }
  return cropType;
}
