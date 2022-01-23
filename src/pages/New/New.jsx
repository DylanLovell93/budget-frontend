import './New.css';
import { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import BudgetForm from '../../components/BudgetForm/BudgetForm';
import axios from 'axios';

const New = () => {
  const [state, setState] = useState({ allBudgets: [] });
  const { allBudgets } = state;
  const URL = process.env.REACT_APP_BACKEND || process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getBudget = async () => {
      const budgetData = await axios.get(`${URL}/transactions`);
      setState({ ...state, allBudgets: budgetData.data });
    };
    getBudget();
  }, []);

  return (
    <div className="New">
      <Nav budget={allBudgets} />
      <BudgetForm />
    </div>
  );
};

export default New;
