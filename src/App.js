import './App.css';
import { Routes, Route } from 'react-router-dom';
import Edit from './pages/Edit/Edit';
import Home from './pages/Home/Home';
import Index from './pages/Index/Index';
import New from './pages/New/New';
import Show from './pages/Show/Show';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/transactions" element={<Index />} />
        <Route path="/transactions/:id" element={<Show />} />
        <Route path="/transactions/new" element={<New />} />
        <Route path="/transactions/:id/edit" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
