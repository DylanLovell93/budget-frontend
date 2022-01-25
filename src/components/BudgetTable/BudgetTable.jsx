import './BudgetTable.css';
import { useState } from 'react';
import { sortBudget, filterBudget } from '../../helper/helperFuncs';
import TableRow from '../TableRow/TableRow';

const BudgetTable = ({ budget }) => {
  const [select, setSelect] = useState({
    sortSelect: 'none',
    filterSelect: 'none',
  });
  const total = budget.reduce((a, v) => Number(a) + Number(v.amount), 0);
  const color = total < 0 ? 'minus' : total > 1000 ? 'plus' : 'even';

  const handleChange = (event) => {
    const { value, id } = event.target;
    setSelect({ ...select, [id]: value });
  };

  const filteredBudget = filterBudget(budget, select.filterSelect);
  const sortedAndFilteredBudget = sortBudget(filteredBudget, select.sortSelect);

  const tableRows = sortedAndFilteredBudget.map((e, i) => (
    <TableRow budgetItem={e} key={i} idx={i} />
  ));

  return (
    <div className="BudgetTable">
      <div className="table">
        <h1>
          Current Account Balance:{' '}
          <span className={color}>
            {total.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
        </h1>
        <form className="budgetSelect">
          <label htmlFor="sortSelect">
            Sort by:
            <select id="sortSelect" onChange={handleChange}>
              <option value="none">---</option>
              <option value="aToZ">Alphabetical: A - Z </option>
              <option value="zToA">Alphabetical: Z - A</option>
              <option value="highToLow">Amount: High - Low</option>
              <option value="lowToHigh">Amount: Low - High</option>
              <option value="oldToNew">Date: Old - New</option>
              <option value="newToOld">Date: New - Old</option>
            </select>
          </label>
          <label htmlFor="filterSelect">
            Filter by:
            <select id="filterSelect" onChange={handleChange}>
              <option value="none">---</option>
              <option value="pos">Positive</option>
              <option value="neg">Negative</option>
              <option value="house">Housing</option>
              <option value="trans">Transportation</option>
              <option value="food">Food</option>
              <option value="util">Utilities</option>
              <option value="clothing">Clothing</option>
              <option value="med">Medical/Healthcare</option>
              <option value="insurance">Insurance</option>
              <option value="suply">Households/Supplies </option>
              <option value="personal">Personal</option>
              <option value="debt">Debt</option>
              <option value="retire">Retirement</option>
              <option value="edu">Education</option>
              <option value="save">Savings</option>
              <option value="ent">Entertainment</option>
              <option value="gift">Gifts/Donations</option>
            </select>
          </label>
        </form>
        <table>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetTable;
