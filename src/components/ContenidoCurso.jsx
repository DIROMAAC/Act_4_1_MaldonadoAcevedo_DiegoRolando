/**
 * ContenidoCurso Component
 * 
 * Propósito:
 * Card de recurso de curso con checkbox para marcar como completado/no completado.
 * 
 * Props:
 * @param {string} nombre - Nombre del recurso
 * @param {string} descripcion - Descripción del recurso
 * @param {boolean} completado - Estado de completado
 * @param {Function} onToggleCompletado - Callback al cambiar el estado
 * 
 * Diseño:
 * - Borde azul #00a8e8 
 * - Layout horizontal: info a la izquierda, checkbox a la derecha
 * - Hover con elevación y cambio de borde a #0077b6
 * - Responsive: en móvil cambia a layout vertical
 * 
 * Uso:
 * <ContenidoCurso
 *   nombre="Ecuaciones Lineales"
 *   descripcion="Video tutorial sobre resolución"
 *   completado={true}
 *   onToggleCompletado={() => handleToggle(1)}
 * />
 * 
 * Interacciones:
 * - Usado en CursoInscritoDetalle para listar recursos del curso
 * - Al cambiar checkbox, actualiza el estado en CursoInscritoDetalle
 * - El cambio recalcula automáticamente el progreso del curso
 */
import './ContenidoCurso.css';

const ContenidoCurso = ({ nombre, descripcion, completado, onToggleCompletado }) => {
  return (
    <div className="contenido-curso">
      <div className="contenido-info">
        <h4 className="contenido-nombre">{nombre}</h4>
        <p className="contenido-descripcion">{descripcion}</p>
      </div>
      <div className="contenido-completado">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={completado}
            onChange={onToggleCompletado}
          />
          <span className="checkbox-label">
            {completado ? 'Completado' : 'No completado'}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ContenidoCurso;
