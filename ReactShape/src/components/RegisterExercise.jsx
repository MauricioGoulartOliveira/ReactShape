import  { useState } from 'react';
import axios from 'axios';
import "./RegisterExercise.css";

const RegisterExercise = () => {
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    description: '',
    cep: '',
    address: '',
    longitude: '',
    latitude: '',
    sports: '',
  });

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
      const newExercise = { ...formData, address };
      let exercises = JSON.parse(localStorage.getItem('exercises')) || [];
      exercises.push(newExercise);
      localStorage.setItem('exercises', JSON.stringify(exercises));
      alert('Local de exercício cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
    }
  };

  return (
    <div className="register-exercise-container">
      <h2>Cadastro de Local de Exercício</h2>
      <form className="register-exercise-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome do Local:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="userId">ID do Usuário:</label>
          <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input type="text" id="longitude" name="longitude" value={formData.longitude} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input type="text" id="latitude" name="latitude" value={formData.latitude} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="sports">Tipos de Práticas Esportivas:</label>
          <input type="text" id="sports" name="sports" value={formData.sports} onChange={handleChange} required />
        </div>
        <button type="submit">Cadastrar Local</button>
      </form>
    </div>
  );
};

export default RegisterExercise;
