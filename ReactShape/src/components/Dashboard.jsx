import  { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "./Dashboard.css";

// Configurando o ícone padrão para o Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedLocations = JSON.parse(localStorage.getItem('exercises')) || [];
    setUsers(storedUsers);
    setLocations(storedLocations);
  }, []);

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
          <p className="card-value">{users.length}</p>
        </div>
        <div className="card">
          <h2 className="card-title">Locais Cadastrados</h2>
          <p className="card-value">{locations.length}</p>
        </div>
        <div className="card">
          <h2 className="card-title">Mapa Interativo</h2>
          <div className="map-placeholder">
            <MapContainer center={[-23.55052, -46.633308]} zoom={13} style={{ height: "200px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((location, index) => (
                <Marker key={index} position={[location.latitude, location.longitude]}>
                  <Popup>{location.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
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





