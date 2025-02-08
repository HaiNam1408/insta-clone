export function formattedNumber(number) {
  if (!number || typeof number !== 'number') return null;

  return number.toLocaleString();
}
