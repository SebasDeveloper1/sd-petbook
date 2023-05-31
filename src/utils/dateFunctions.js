/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

/**
 * The function takes a date string and returns a formatted date in the format of "DD/MMM/YYYY".
 * @param dateString - A string representing a date in a format that can be parsed by the JavaScript
 * Date constructor. For example, "2021-10-15" or "October 15, 2021".
 * @returns The function `getDate` returns a formatted date string in the format of "DD/MMM/YYYY",
 * where DD is the day of the month with leading zeros, MMM is the abbreviated month name, and YYYY is
 * the year. The input parameter `dateString` is expected to be a valid date string that can be parsed
 * by the `Date` constructor.
 */
export const getDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

/**
 * The function converts a date string in the format of "YYYY-MM-DD" to milliseconds.
 * @param date - The `date` parameter is a string representing a date in the format "YYYY-MM-DD".
 * @returns The function `getDateInMilliseconds` is returning the number of milliseconds since January
 * 1, 1970, 00:00:00 UTC, for the given input date.
 */
export const getDateInMilliseconds = (date) => {
  const tmpDate = date.replace(/-/g, '/');
  return new Date(tmpDate).getTime();
};

export const getMillisecondsInDate = (milliseconds) => {
  const date = new Date(milliseconds);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getTimePassed = (timestamp) => {
  const DATE_UNITS = {
    year: 31557600000,
    month: 2629800000,
    week: 604800000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000,
  };

  const rtf = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });
  const now = Date.now();
  const timeDiff = timestamp - now;

  const unit = Object.keys(DATE_UNITS).find((unit) => {
    const absoluteDiff = Math.abs(timeDiff);
    return absoluteDiff > DATE_UNITS[unit] || unit === 'second';
  });

  if (unit) {
    const relativeTime = Math.round(timeDiff / DATE_UNITS[unit]);
    return rtf.format(relativeTime, unit);
  }

  return '';
};
