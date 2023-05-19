const getMonthDifference = (startDate, endDate) => {
  const years = (endDate.getFullYear() - startDate.getFullYear()) * 12;
  const months = endDate.getMonth() - startDate.getMonth();
  return years + months;
};

export const getPetAge = (dateValue) => {
  const date = new Date(dateValue);
  const today = new Date();
  const differenceInMonths = getMonthDifference(date, today);
  if (differenceInMonths > 12) {
    // retorna en años
    const differenceInYears = Math.floor(differenceInMonths / 12);
    return `${differenceInYears} años`;
  }
  // retorna en meses
  return `${differenceInMonths} meses`;
};
