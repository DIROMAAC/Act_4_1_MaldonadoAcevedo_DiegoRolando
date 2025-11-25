/**
 * Button Component
 * 
 * Propósito:
 * Componente de botón reutilizable con variantes de estilo.
 * 
 * Props:
 * @param {React.ReactNode} children - Contenido del botón (texto, iconos, etc.)
 * @param {Function} onClick - Función callback al hacer clic
 * @param {string} type - Tipo HTML del botón ('button', 'submit', 'reset')
 * @param {boolean} disabled - Si el botón está deshabilitado
 * @param {string} variant - Variante de estilo ('primary' o 'secondary')
 * 
 * Uso:
 * <Button variant="primary" onClick={handleClick}>Inscribir</Button>
 * <Button variant="secondary" disabled>Inscrito</Button>
 * 
 * Interacciones:
 * - Usado en LoginForm para enviar formulario
 * - Usado en Header como botón de "Cerrar Sesión"
 * - Usado en Cursos para inscribir materias
 * - Usado en TutorCard para agendar citas
 */
import './Button.css';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false,
  variant = 'primary'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;
