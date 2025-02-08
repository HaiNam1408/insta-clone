export const covertPixelToNumber = (pixel) => {
  if (!pixel || typeof pixel !== 'string' || !pixel.includes('px'))
    throw Error('This is not pixel');

  return Number(pixel.split('px')[0]);
};
