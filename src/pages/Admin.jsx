import { Link } from 'react-router';
import Publish from '../components/admins/Publish';
import '../styles/Admin.css';

function Admin() {
  return (
    <main className="admin-page">
      <header className="admin-header">
        <nav className="admin-navbar">
          <div className="admin-logo">
            <span role="img" aria-label="admin" style={{fontSize: "2rem"}}>🛒</span>
            <span className="admin-title">Admin Panel</span>
          </div>
          <ul className="admin-nav-links">
            <Link to="/publish" className="admin-nav-link" >Publish</Link>
            <Link to="/orders" className="admin-nav-link" >Orders</Link>
            <Link to="/users" className="admin-nav-link" >Users</Link>
          </ul>
          <div className="admin-user">
            <span role="img" aria-label="user" style={{fontSize: "1.5rem"}}>👤</span>
            <span className="admin-username">Admin</span>
          </div>
        </nav>
      </header>

      <Publish />
    </main>
  );
}

export default Admin;