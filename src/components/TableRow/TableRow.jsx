import './TableRow.css';
import { formatDate } from '../../helper/helperFuncs';
import { Link } from 'react-router-dom';

const TableRow = ({
  idx,
  budgetItem: { date, source, amount, from, category, id },
}) => {
  return (
    <tr className="TableRow">
      <td>{formatDate(date)}</td>
      <td className="source">
        <Link to={`/transactions/${id}`}>{source}</Link>
      </td>
      <td>
        {amount.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </td>
      <td>
        <Link to={`/transactions/${id}/edit`}>&#9997;</Link>
      </td>
    </tr>
  );
};

export default TableRow;
