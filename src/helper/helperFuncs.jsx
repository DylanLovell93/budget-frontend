const formatDate = (dateText) => {
  const formatText = dateText
    .split('-')
    .map((e, i, a) =>
      !a[i + 1] ? (Number(e) >= 10 ? Number(e) + 1 : Number(e)) : e
    )
    .join('-');
  let dateObj = new Date(formatText);
  dateObj = dateObj.getTime() + 1 ? dateObj : new Date();
  const day = dateObj.getDate();
  const suffix = ['th', 'st', 'nd', 'rd'];
  const sufIdx = Number(day.toString().slice(-1));
  const formattedDay =
    day + ((day >= 10 && day <= 20) || !suffix[sufIdx] ? 'th' : suffix[sufIdx]);
  const month = dateObj.getMonth();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  Number(suffix[Number(day.toString().slice(-1))]);
  return `${months[month]} ${formattedDay}`;
};

export { formatDate };
