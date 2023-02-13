export function cloneAllCanvasFrames(original, clone) {
  const originals = original.querySelectorAll('canvas');
  clone.querySelectorAll('canvas').forEach((newCanvas, index) => {
    const oldCanvas = originals[index];
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;

    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);
  });
}
