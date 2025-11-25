/**
 * Inicio Page
 * 
 * Propósito:
 * Página principal que muestra los cursos inscritos del usuario con su progreso.
 * Permite acceder a los detalles de cada curso inscrito.
 * 
 * Estado Global:
 * - cursosInscritos: Array de cursos del contexto CursosContext
 * 
 * Funcionalidades:
 * - Muestra grid de cursos inscritos (4 por fila)
 * - SearchBar para filtrar cursos
 * - Click en curso navega a detalles con recursos
 * - Muestra progreso visual de cada curso
 * 
 * Flujo:
 * 1. Usuario ve sus cursos inscritos
 * 2. Puede buscar cursos específicos
 * 3. Click en curso abre detalles con recursos y progreso
 * 
 * Interacciones:
 * - Usa CursosContext para obtener cursosInscritos
 * - Usa SearchBar component
 * - Usa CursoCard component con onClick
 * - Navega a /curso-inscrito/:id
 */
import { useNavigate } from 'react-router-dom';
import { useCursos } from '../context/CursosContext';
import './Inicio.css';
import SearchBar from '../components/SearchBar';
import CursoCard from '../components/CursoCard';

const Inicio = () => {
  const navigate = useNavigate();
  const { cursosInscritos } = useCursos();

  const handleCursoClick = (cursoId) => {
    navigate(`/curso-inscrito/${cursoId}`);
  };

  return (
    <div className="inicio-container">
      <SearchBar placeholder="Buscar cursos..." />
      
      <div className="cursos-section">
        <h2 className="cursos-title">Cursos Inscritos:</h2>
        <div className="cursos-grid">
          {cursosInscritos.map((curso) => (
            <CursoCard
              key={curso.id}
              nombre={curso.nombre}
              grupo={curso.grupo}
              progreso={curso.progreso}
              onClick={() => handleCursoClick(curso.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
