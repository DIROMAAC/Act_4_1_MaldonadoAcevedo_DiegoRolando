/**
 * Calendarios Page
 * 
 * Propósito:
 * Página contenedora del componente Calendar para mostrar el calendario
 * académico con eventos marcados.
 * 
 * Layout:
 * - Título "Calendario Académico"
 * - Componente Calendar con funcionalidad completa
 * 
 * Uso:
 * - Accesible desde Header -> Calendarios
 * - Muestra calendario mensual interactivo
 * - Fechas marcadas con exámenes, festivos, eventos
 * 
 * Interacciones:
 * - Usa Calendar component (navegación, eventos)
 * - Wrapper simple para el calendario
 */
import Calendar from '../components/Calendar';
import './Calendarios.css';

const Calendarios = () => {
  return (
    <div className="calendarios-container">
      <h1>Calendario Académico</h1>
      <Calendar />
    </div>
  );
};

export default Calendarios;
