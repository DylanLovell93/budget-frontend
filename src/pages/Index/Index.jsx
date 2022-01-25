import './Index.css';
import Nav from '../../components/Nav/Nav';
import BudgetTable from '../../components/BudgetTable/BudgetTable';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [budget, setBudget] = useState([]);
  const URL = process.env.REACT_APP_BACKEND || process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getBudget = async () => {
      const newBudget = await axios.get(URL + '/transactions');
      setBudget(newBudget.data);
      console.log(newBudget.data);
    };
    getBudget();
  }, []);

  return (
    <div className="Index">
      <Nav budget={budget} />
      <BudgetTable budget={budget} />
    </div>
  );
};

export default Index;
