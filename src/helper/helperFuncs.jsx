const formatDate = (dateText) => {
  const formatText = formatInput(dateText);
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
const formatInput = (text) => {
  return text
    .split('-')
    .map((e, i, a) =>
      !a[i + 1] ? (Number(e) >= 10 ? Number(e) + 1 : Number(e)) : e
    )
    .join('-');
};

const sortBudget = (budget, method) => {
  switch (method) {
    case 'newToOld':
      return [...budget].sort((a, b) => {
        return (
          new Date(formatInput(b.date)).valueOf() -
          new Date(formatInput(a.date)).valueOf()
        );
      });
    case 'oldToNew':
      return [...budget].sort(
        (a, b) =>
          new Date(formatInput(a.date)).valueOf() -
          new Date(formatInput(b.date)).valueOf()
      );
    case 'aToZ':
      return [...budget].sort((a, b) => (a.source > b.source ? 1 : -1));
    case 'zToA':
      return [...budget].sort((a, b) => (b.source > a.source ? 1 : -1));
    case 'highToLow':
      return [...budget].sort((a, b) => b.amount - a.amount);
    case 'lowToHigh':
      return [...budget].sort((a, b) => a.amount - b.amount);
    default:
      return budget;
  }
};

const filterBudget = (budget, method) => {
  switch (method) {
    case 'none':
      return budget;
    case 'pos':
      return budget.filter((e) => e.amount > 0);
    case 'neg':
      return budget.filter((e) => e.amount < 0);
    default:
      return budget.filter((e) => e.category === method);
  }
};

const formatCategory = (category) => {
  const categoryKey = {
    house: 'Housing',
    trans: 'Transportation',
    food: 'Food',
    util: 'Utilities',
    clothing: 'Clothing',
    med: 'Medical/Healthcare',
    insurance: 'Insurance',
    suply: 'Households/Supplies',
    personal: 'Personal',
    debt: 'Debt',
    retire: 'Retirement',
    edu: 'Education',
    save: 'Savings',
    ent: 'Entertainment',
    gift: 'Gifts/Donations',
  };

  return categoryKey[category];
};

export { formatDate, formatCategory, formatInput, sortBudget, filterBudget };
