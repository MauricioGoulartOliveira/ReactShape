import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./RegisterUser.css";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    cpf: '',
    birthDate: '',
    email: '',
    password: '',
    cep: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${formData.cep}/json/`);
      const address = `${response.data.logradouro}, ${response.data.bairro}, ${response.data.localidade}, ${response.data.uf}`;
      const newUser = { ...formData, address };
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/dashboard');
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  };

  return (
    <div className="register-user-container">
      <h2>Cadastro de Usuário</h2>
      <form className="register-user-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Sexo:</label>
          <input type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Data de Nascimento:</label>
          <input type="date" id="birthDate" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} required />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterUser;
