import './BudgetInfo.css';
import Button from '../Button/Button';
import { formatDate, formatCategory } from '../../helper/helperFuncs';

const BudgetInfo = ({
  singleBudget: { date, name, amount, from, category, id },
  param,
}) => {
  const buttonsList = ['Back', 'Edit', 'Delete'];
  const allButtons = buttonsList.map((e, i) => (
    <Button buttonType={e} param={param} key={'button' + i} />
  ));

  return (
    <div className="BudgetInfo">
      <div className="container">
        <h1>{name}</h1>
        <h2>Date: {formatDate(date)}</h2>
        <h2>
          Amount:{' '}
          {amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </h2>
        <h2>From: {from}</h2>
        <h2>Category: {formatCategory(category)}</h2>
      </div>
      <div className="Buttons">{allButtons}</div>
    </div>
  );
};

export default BudgetInfo;
