

import './Login.css'; // Importando o CSS aqui

function Login() {
  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-form">
        <h2>ReactShape</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p>Ainda não tem uma conta? <a href="#">Cadastre-se</a></p>
      </div>
    </div>
  );
}

export default Login;

