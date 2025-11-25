import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { CursosProvider } from './context/CursosContext';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Inicio from './pages/Inicio';
import Perfil from './pages/Perfil';
import Cursos from './pages/Cursos';
import CursoInscritoDetalle from './pages/CursoInscritoDetalle';
import Tutores from './pages/Tutores';
import Calendarios from './pages/Calendarios';
import Chat from './pages/Chat';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div className="app-container">
      <Header showMenu={!isLoginPage} />
      
      <Routes>
        <Route path="/" element={
          <main className="main-content">
            <LoginForm />
          </main>
        } />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso-inscrito/:id" element={<CursoInscritoDetalle />} />
        <Route path="/tutores" element={<Tutores />} />
        <Route path="/calendarios" element={<Calendarios />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <CursosProvider>
        <AppContent />
      </CursosProvider>
    </Router>
  );
}

export default App;