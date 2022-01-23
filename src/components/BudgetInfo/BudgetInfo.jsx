import './BudgetInfo.css';
import Button from '../Button/Button';

const BudgetInfo = ({
  singleBudget: { date, source, amount, from, category, id },
  param,
}) => {
  const buttonsList = ['Back', 'Edit', 'Delete'];
  const allButtons = buttonsList.map((e, i) => (
    <Button buttonType={e} param={param} key={'button' + i} />
  ));

  return (
    <div className="BudgetInfo">
      <div className="container">
        <h1>{source}</h1>
        <h2>Date: {date}</h2>
        <h2>Amount: {amount}</h2>
        <h2>From: {from}</h2>
        <h2>Category: {category}</h2>
      </div>
      <div className="Buttons">{allButtons}</div>
    </div>
  );
};

export default BudgetInfo;