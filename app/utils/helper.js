const formatDate = timestamp => {
  const date = new Date(timestamp);
  const month = date.getMonth();
  const getDate = date.getDate();
  const getYears = date.getFullYear();
  let getHours = date.getHours();
  let getMinutes = date.getMinutes();

  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  if (getHours < 10) {
    getHours = `0${getHours}`;
  }

  if (getMinutes < 10) {
    getMinutes = `0${getMinutes}`;
  }

  return `${getDate} ${monthName[month]} ${getYears} ${getHours}:${getMinutes}`;
};

const currencyFormatter = num => {
  if (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return num;
};

export { formatDate, currencyFormatter };
