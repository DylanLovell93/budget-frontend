import './Edit.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import BudgetForm from '../../components/BudgetForm/BudgetForm';

const Edit = () => {
  const [state, setState] = useState({
    allBudgets: [],
    singleBudget: {
      date: '',
      source: '',
      amount: 0,
      from: '',
      category: '',
      id: '',
    },
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const { allBudgets, singleBudget } = state;
  const URL = process.env.REACT_APP_BACKEND || process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getBudget = async () => {
      const allBudgets = await axios.get(`${URL}/transactions`);
      const singleBudget = await axios
        .get(`${URL}/transactions/${id}`)
        .catch((error) => {
          navigate('/unknown');
        });
      if (allBudgets && singleBudget) {
        setState({
          ...state,
          allBudgets: allBudgets.data,
          singleBudget: singleBudget.data,
        });
      }
    };
    getBudget();
  }, []);

  return (
    <div className="Edit">
      <Nav budget={allBudgets} />
      <BudgetForm singleBudget={singleBudget} />
    </div>
  );
};

export default Edit;
