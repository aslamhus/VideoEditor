const getCropType = (aspectRatio) => {
  let cropType;
  if (aspectRatio > 1) {
    cropType = 'landscape';
  } else if (aspectRatio < 1) {
    cropType = 'portrait';
  } else {
    cropType = 'square';
  }
  return cropType;
};

/**
 * find the x and y position where Canvas should start drawing from
 * in order to draw a frame with the correct dimensions.
 *
 * The video is centered horizontally in a div that hides the video
 * overflowing the frame
 *
 * @param {number} width - video width
 * @param {number} height - video height
 * @param {object} crop - crop object - { width: number, height: number }
 * @param {number} cropAspectRatio - the aspect ratio of the crop
 */
export const computeCrop = (width, height, crop, cropAspectRatio) => {
  if (crop.width == width && crop.height == height) {
    return [0, 0, width, height];
  }
  const sourceAspect = width / height;
  let anchor, cropHeight, cropWidth;
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
    cropHeight = height;
    cropWidth = cropHeight * cropAspectRatio;
  } else {
    cropWidth = width;
    cropHeight = cropWidth / cropAspectRatio;
  }

  let x = (width - cropWidth) / 2;
  let y = (height - cropHeight) / 2;
  return [x, y, cropWidth, cropHeight];
};
