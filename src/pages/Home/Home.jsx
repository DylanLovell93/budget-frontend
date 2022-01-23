import './Home.css';
import Nav from '../../components/Nav/Nav';
import WelcomeMessage from '../../components/WelcomeMessage/WelcomeMessage';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [budget, setBudget] = useState([]);
  const URL = process.env.REACT_APP_BACKEND || process.env.REACT_APP_API_URL;

  useEffect(async () => {
    const getBudget = async () => {
      const newBudget = await axios.get(URL + '/transactions');
      setBudget(newBudget.data);
    };
    getBudget();
  }, []);

  return (
    <div className="Home">
      <Nav budget={budget} />
      <WelcomeMessage />
    </div>
  );
};

export default Home;
