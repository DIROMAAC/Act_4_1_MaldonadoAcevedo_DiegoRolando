/**
 * Header Component
 * 
 * Propósito:
 * Barra de navegación principal con logo, menú de navegación y botón de cierre de sesión.
 * Se oculta condicionalmente en la página de login.
 * 
 * Props:
 * @param {boolean} showMenu - Controla si se muestra el menú (default: true)
 * 
 * Navegación:
 * - Inicio: Cursos inscritos del usuario
 * - Perfil: Información del usuario
 * - Cursos: Catálogo de cursos disponibles
 * - Tutores: Directorio de tutores
 * - Calendarios: Calendario académico
 * - Chat: Mensajería (placeholder)
 * 
 * Uso:
 * <Header showMenu={!isLoginPage} />
 * 
 * Interacciones:
 * - Usa Link de react-router-dom para navegación
 * - Usa Button para cerrar sesión
 * - Usa useNavigate para redirigir al login al cerrar sesión
 * - Renderizado condicionalmente en App.jsx basado en la ruta actual
 */
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import Button from './Button';
import logo from '../img/logoUni.png';

const Header = ({ showMenu = true }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // lógica adicional de cierre de sesión
    navigate('/');
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-section">
          <img src={logo} alt="UASLP Logo" className="logo" />
          <h1 className="header-title">Logo/Título</h1>
        </div>
        {showMenu && (
          <>
            <nav className="header-menu">
              <Link to="/inicio" className="menu-item">Inicio</Link>
              <Link to="/perfil" className="menu-item">Perfil</Link>
              <Link to="/cursos" className="menu-item">Cursos</Link>
              <Link to="/tutores" className="menu-item">Tutores</Link>
              <Link to="/calendarios" className="menu-item">Calendarios</Link>
              <Link to="/chat" className="menu-item">Chat</Link>
            </nav>
            <div className="header-logout">
              <Button onClick={handleLogout} variant="secondary">
                Cerrar Sesión
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
