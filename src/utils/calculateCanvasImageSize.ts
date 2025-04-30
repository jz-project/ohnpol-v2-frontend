export const calculateCanvasImageSize = (
  image: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
): { newWidth: number; newHeight: number } => {
  const aspectRatio = image.naturalWidth / image.naturalHeight;

  let newWidth = canvasWidth;
  let newHeight = canvasHeight;

  if (image.naturalWidth >= image.naturalHeight) {
    newHeight = canvasHeight;
    newWidth = newHeight * aspectRatio;
  } else {
    newWidth = canvasWidth;
    newHeight = newWidth / aspectRatio;
    if (newHeight < canvasHeight) {
      newHeight = canvasHeight;
      newWidth = canvasHeight * aspectRatio;
    }
  }

  return { newWidth: newWidth, newHeight: newHeight };
};
