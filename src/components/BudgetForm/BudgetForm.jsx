import './BudgetForm.css';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../Button/Button';
import axios from 'axios';

const BudgetForm = () => {
  const URL = process.env.REACT_APP_BACKEND || process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { id: param } = useParams();
  const buttonsNeeded = [param ? 'EditBack' : 'Back', 'Submit'];
  const [budget, setBudget] = useState({
    date: '',
    source: '',
    amount: 0,
    from: '',
    category: '',
    id: '',
  });

  useEffect(() => {
    const getBudget = async () => {
      const currentBudget = await axios.get(`${URL}/transactions/${param}`);
      setBudget(currentBudget.data);
    };
    if (param) getBudget();
  }, [URL, param]);

  const handleEdit = async (event) => {
    event.preventDefault();
    await axios.put(`${URL}/transactions/${param}`, budget);
    navigate(`/transactions/${param}`);
  };

  const handleNew = async (event) => {
    event.preventDefault();
    await axios.post(`${URL}/transactions/`, budget);
    navigate(`/transactions`);
  };

  const handleChange = (event) => {
    const { value, id } = event.target;
    setBudget({
      ...budget,
      [id]: id === 'amount' ? Number(value) : value,
    });
    console.log(budget);
  };

  const allButtons = buttonsNeeded.map((e, i) => (
    <Button buttonType={e} key={'button' + i} param={param} />
  ));

  return (
    <div className="BudgetForm">
      {' '}
      <h1>{param ? 'Edit Item' : 'New Item'}</h1>
      <form onSubmit={param ? handleEdit : handleNew}>
        <div className="container">
          <label htmlFor="date">
            <h2>Date</h2>
            <input
              id="date"
              type="date"
              value={budget.date}
              placeholder="Date"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="source">
            <h2>Source</h2>
            <input
              id="source"
              type="text"
              value={budget.source}
              placeholder="Source"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="amount">
            <h2>Amount</h2>
            <input
              id="amount"
              type="number"
              value={Number(budget.amount)}
              placeholder=""
              onChange={handleChange}
            />
          </label>
          <label htmlFor="from">
            <h2>From</h2>
            <input
              id="from"
              type="text"
              value={budget.from}
              placeholder="From"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="category">
            <h2>Category</h2>
            <input
              id="category"
              type="text"
              value={budget.category}
              placeholder="Category"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="Buttons">{allButtons}</div>
      </form>
    </div>
  );
};

export default BudgetForm;
