import './NotFound.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../../components/Nav/Nav';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const NotFound = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    const getBudget = async () => {
      const newBudget = await axios.get(`${URL}/transactions`);
      setBudget(newBudget.data);
    };
    getBudget();
  }, []);

  return (
    <div className="NotFound">
      <Nav budget={budget} />
      <ErrorMessage />
    </div>
  );
};

export default NotFound;
