import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import RegisterUser from './components/RegisterUser';
import RegisterExercise from './components/RegisterExercise';
import './components/Login.css';
import './components/Dashboard.css';
import './components/RegisterUser.css';
import './components/RegisterExercise.css';

function App() {
  return (
    <Router>
      <nav className="navigation">
        <Link to="/">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register-user">Cadastrar Usuário</Link>
        <Link to="/register-exercise">Cadastrar Exercício</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-exercise" element={<RegisterExercise />} />
      </Routes>
    </Router>
  );
}

export default App;
