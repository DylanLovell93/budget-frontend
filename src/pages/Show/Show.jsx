import './Show.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import BudgetInfo from '../../components/BudgetInfo/BudgetInfo';

const Show = () => {
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
  const URL = process.env.REACT_APP_BACKEND || process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const { allBudgets, singleBudget } = state;
  const navigate = useNavigate();

  useEffect(() => {
    const getBudget = async () => {
      const allBudgets = await axios.get(URL + '/transactions');
      const singleBudget = await axios
        .get(`${URL}/transactions/${id}`)
        .catch((error) => {
          navigate('/unknown');
        });
      if (allBudgets && singleBudget) {
        setState({
          allBudgets: allBudgets.data,
          singleBudget: singleBudget.data,
        });
      }
    };
    getBudget();
  }, []);

  if (!singleBudget) {
  }

  return (
    <div className="Show">
      <Nav budget={allBudgets} />
      <BudgetInfo singleBudget={singleBudget} param={id} />
    </div>
  );
};

export default Show;
