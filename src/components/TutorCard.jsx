/**
 * TutorCard Component
 * 
 * Propósito:
 * Card que muestra información de un tutor con SVG de maestro,
 * materias que imparte, descripción y botón para agendar.
 * 
 * Props:
 * @param {string} imagen - URL de imagen (opcional, usa SVG si no hay imagen)
 * @param {string} nombre - Nombre del tutor
 * @param {string[]} materias - Array de materias que imparte
 * @param {string} descripcion - Descripción/bio del tutor
 * @param {string} disponibilidad - Horario de disponibilidad
 * 
 * Diseño:
 * - SVG de maestro con pizarra (icono school)
 * - Layout vertical similar a CursoCard
 * - Borde azul, aspect ratio 3/4.5
 * - Botón "Agendar" en la parte inferior
 * 
 * Uso:
 * <TutorCard 
 *   nombre="Dr. Juan Pérez"
 *   materias={["Matemáticas", "Física"]}
 *   descripcion="Experto en cálculo"
 *   disponibilidad="Lunes y Miércoles 14:00-16:00"
 * />
 * 
 * Interacciones:
 * - Usado en Tutores page en grid de 4 columnas
 * - Usa Button component para agendar
 * - Mismo diseño visual que CursoCard para consistencia
 */
import Button from './Button';
import './TutorCard.css';

const TutorCard = ({ imagen, nombre, materias, descripcion, disponibilidad }) => {
  return (
    <div className="tutor-card">
      <div className="tutor-image">
        {imagen ? (
          <img src={imagen} alt={nombre} />
        ) : (
          <div className="tutor-image-placeholder">
            <svg 
              className="teacher-icon"
              width='80' 
              height='80' 
              viewBox='0 0 24 24' 
              xmlns='http://www.w3.org/2000/svg'
            >
              <g transform="matrix(0.83 0 0 0.83 12 12)">
                <g transform="matrix(1 0 0 1 -6.75 -8.25)">
                  <path 
                    style={{
                      stroke: 'rgb(0,168,232)',
                      strokeWidth: 1.5,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      fill: 'none',
                      opacity: 1
                    }} 
                    transform="translate(-5.25, -3.75)" 
                    d="M 2.25 3.75 C 2.25 5.406854249492381 3.5931457505076194 6.75 5.25 6.75 C 6.906854249492381 6.75 8.25 5.406854249492381 8.25 3.75 C 8.25 2.0931457505076194 6.906854249492381 0.75 5.25 0.75 C 3.5931457505076194 0.75 2.25 2.0931457505076194 2.25 3.7499999999999996 Z" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 -6.75 -0.75)">
                  <path 
                    style={{
                      stroke: 'rgb(0,168,232)',
                      strokeWidth: 1.5,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      fill: 'none',
                      opacity: 1
                    }} 
                    transform="translate(-5.25, -11.25)" 
                    d="M 5.25 8.25 L 5.25 14.25" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 -6.75 3.75)">
                  <path 
                    style={{
                      stroke: 'rgb(0,168,232)',
                      strokeWidth: 1.5,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      fill: 'none',
                      opacity: 1
                    }} 
                    transform="translate(-5.25, -15.75)" 
                    d="M 7.5 23.25 L 8.25 15.75 L 9.75 15.75 L 9.75 12.75 C 9.75 10.264718625761429 7.73528137423857 8.25 5.25 8.25 C 2.7647186257614296 8.25 0.75 10.264718625761429 0.75 12.75 L 0.75 15.75 L 2.25 15.75 L 3 23.25 Z" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 5.25 -3.38)">
                  <path 
                    style={{
                      stroke: 'rgb(0,168,232)',
                      strokeWidth: 1.5,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      fill: 'none',
                      opacity: 1
                    }} 
                    transform="translate(-17.25, -8.63)" 
                    d="M 12.75 16.5 L 21.75 16.5 C 22.57842712474619 16.5 23.25 15.82842712474619 23.25 15 L 23.25 2.25 C 23.25 1.4215728752538097 22.57842712474619 0.75 21.75 0.75 L 11.25 0.75" 
                  />
                </g>
              </g>
            </svg>
          </div>
        )}
      </div>
      <div className="tutor-info">
        <h3 className="tutor-nombre">{nombre}</h3>
        <div className="tutor-detail">
          <strong>Materias:</strong> {materias}
        </div>
        <div className="tutor-detail">
          <strong>Descripción:</strong> {descripcion}
        </div>
        <div className="tutor-detail">
          <strong>Disponibilidad:</strong> {disponibilidad}
        </div>
        <Button variant="primary">Agendar</Button>
      </div>
    </div>
  );
};

export default TutorCard;
