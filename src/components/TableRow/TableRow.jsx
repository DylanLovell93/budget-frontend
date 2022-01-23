import './TableRow.css';
import { Link } from 'react-router-dom';

const TableRow = ({
  idx,
  budgetItem: { date, source, amount, from, category, id },
}) => {
  return (
    <tr className="TableRow">
      <td>{date}</td>
      <td>
        <Link to={`/transactions/${id}`}>{source}</Link>
      </td>
      <td>{amount}</td>
      <td>
        <Link to={`/transactions/${id}/edit`}>&#9997;</Link>
      </td>
    </tr>
  );
};

export default TableRow;
