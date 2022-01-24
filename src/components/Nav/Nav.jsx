import './Nav.css';

import { Link } from 'react-router-dom';

const Nav = ({ budget = [] }) => {
  const total = budget.reduce((a, v) => Number(a) + Number(v.amount), 0);
  const color = total < 0 ? 'minus' : total > 1000 ? 'plus' : 'even';

  return (
    <div className="Nav">
      <div className="title">
        <Link to="/transactions">Budget App</Link>
      </div>
      <div className="right">
        <div className="total">
          Current balance:{' '}
          <span className={color}>
            {total.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
        </div>
        <Link to="/transactions/new">
          <button>New Item</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
