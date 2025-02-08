export function calculateTimeDifference(inputDate) {
  inputDate = new Date(inputDate);

  const currentDate = new Date();

  const timeDifference = currentDate - inputDate;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const weeksDifference = Math.floor(daysDifference / 7);
  const monthsDifference = Math.floor(daysDifference / 30.44);
  const yearsDifference = Math.floor(daysDifference / 365.25);

  let unit;
  let value;

  if (yearsDifference >= 1) {
    unit = 'y';
    value = yearsDifference;
  } else if (monthsDifference >= 1) {
    unit = 'm';
    value = monthsDifference;
  } else if (weeksDifference >= 1) {
    unit = 'w';
    value = weeksDifference;
  } else {
    unit = 'd';
    value = daysDifference;
  }

  return value + unit;
}
