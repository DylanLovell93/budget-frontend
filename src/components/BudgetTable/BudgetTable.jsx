import './BudgetTable.css';
import TableRow from '../TableRow/TableRow';

const BudgetTable = ({ budget }) => {
  const total = budget.reduce((a, v) => Number(a) + Number(v.amount), 0);
  const color = total < 0 ? 'minus' : total > 1000 ? 'plus' : 'even';

  const tableRows = budget.map((e, i) => <TableRow budgetItem={e} key={i} />);

  return (
    <div className="BudgetTable">
      <div className="table">
        <h1>
          Current Account Balance: <span className={color}>{total}</span>
        </h1>
        <table>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default BudgetTable;
