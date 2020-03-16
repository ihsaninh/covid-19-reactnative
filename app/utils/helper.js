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

const formatOnlyDate = timestamp => {
  const date = new Date(timestamp);
  const month = date.getMonth();
  const getDate = date.getDate();
  const getYears = date.getFullYear();

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

  return `${getDate} ${monthName[month]} ${getYears}`;
};

const currencyFormatter = num => {
  if (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return num;
};

const compare = (a, b) => {
  const dateA = a.reportDate;
  const dateB = b.reportDate;

  let comparison = 0;
  if (dateA > dateB) {
    comparison = 1;
  } else if (dateA < dateB) {
    comparison = -1;
  }
  return comparison * -1;
};

export { formatDate, currencyFormatter, compare, formatOnlyDate };
