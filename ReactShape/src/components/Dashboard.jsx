
import "./Dashboard.css";

const Dashboard = () => {
  const users = 10; // Exemplo de número de usuários
  const locations = 5; // Exemplo de número de locais

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <h1 className="dashboard-title">ReactShape Dashboard</h1>
      </header>
      <main className="cards">
        <div className="card">
          <h2 className="card-title">Usuários Ativos</h2>
          <p className="card-value">{users}</p>
        </div>
        <div className="card">
          <h2 className="card-title">Locais Cadastrados</h2>
          <p className="card-value">{locations}</p>
        </div>
        <div className="card">
          <h2 className="card-title">Mapa Interativo</h2>
          {/* Placeholder for the map */}
          <div className="map-placeholder">Mapa aqui</div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-links">
          <a href="snarfalternativa@gmail.com" className="footer-link">Email</a>
          <a href="https://instagram.com/snarfbass" className="footer-link">Instagram</a>
          <span className="footer-link">Desenvolvido por Mauricio Oliveira</span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;





