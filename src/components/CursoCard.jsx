/**
 * CursoCard Component
 * 
 * Propósito:
 * Card que muestra información de un curso inscrito con SVG de libros,
 * nombre, grupo y barra de progreso visual.
 * 
 * Props:
 * @param {string} imagen - URL de imagen (opcional, usa SVG si no hay imagen)
 * @param {string} nombre - Nombre del curso
 * @param {string} grupo - Grupo del curso
 * @param {number} progreso - Porcentaje de progreso (0-100)
 * @param {Function} onClick - Función callback al hacer clic en la card
 * 
 * Diseño:
 * - SVG de libros apilados multicolor (morado, naranja, rojo, beige)
 * - Ratio de aspecto 3/4.5
 * - Barra de progreso con gradiente azul
 * - Efecto hover con elevación
 * 
 * Uso:
 * <CursoCard 
 *   nombre="Matemáticas I" 
 *   grupo="A1" 
 *   progreso={75}
 *   onClick={() => navigate(`/curso-inscrito/1`)}
 * />
 * 
 * Interacciones:
 * - Usado en Inicio para mostrar cursos inscritos
 * - onClick navega a CursoInscritoDetalle
 * - El progreso se calcula en CursoInscritoDetalle basado en recursos completados
 */
import './CursoCard.css';

const CursoCard = ({ imagen, nombre, grupo, progreso, onClick }) => {
  return (
    <div className="curso-card" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <div className="curso-image">
        {imagen ? (
          <img src={imagen} alt={nombre} />
        ) : (
          <div className="curso-image-placeholder">
            <svg 
              className="books-icon"
              width='60' 
              height='60' 
              viewBox='0 0 24 24' 
              xmlns='http://www.w3.org/2000/svg'
            >
              <g transform="matrix(0.42 0 0 0.42 12 12)">
                <g transform="matrix(1 0 0 1 -6.99 -4)">
                  <path 
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      fill: 'rgb(126,87,194)',
                      fillRule: 'nonzero',
                      opacity: 1
                    }} 
                    transform="translate(-17.01, -20)" 
                    d="M 25.016 4 L 10.751 7.206 C 10.456 7.282 8 7.873 8 9.29 L 8 35.992000000000004 C 8.373 36 8.719 36 9.016 36 L 25.016 31 C 25.016 31 26.016 30.625 26.016 29 C 26.016 28 26.016 4.998000000000001 26.016 4.998000000000001 C 26.016 4.447 25.568 4 25.016 4 z" 
                    strokeLinecap="round" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 -6.99 -4)">
                  <path 
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      fill: 'rgb(69,39,160)',
                      fillRule: 'nonzero',
                      opacity: 1
                    }} 
                    transform="translate(-17.01, -20)" 
                    d="M 25.016 4 L 10.751 7.206 C 10.456 7.282 8 7.873 8 9.29 L 8 35.992000000000004 C 8.373 36 8.719 36 9.016 36 L 25.016 31 C 25.016 31 26.016 30.625 26.016 29 C 26.016 28 26.016 4.998000000000001 26.016 4.998000000000001 C 26.016 4.447 25.568 4 25.016 4 z" 
                    strokeLinecap="round" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 -4.01 -0.86)">
                  <path 
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      fill: 'rgb(126,87,194)',
                      fillRule: 'nonzero',
                      opacity: 1
                    }} 
                    transform="translate(-19.99, -23.14)" 
                    d="M 31 7.29 L 15 11.29 C 12.75 11.873 7.984 12.29 8 9.29 L 7.984 9.29 C 7.984 18.95 7.984 36 7.984 36 L 8 36 C 7.984 39 12.793 39 15 39 L 31 34 C 31 34 32 33.625 32 32 C 32 31 32 8.288 32 8.288 C 32 7.737 31.553 7.29 31 7.29 z" 
                    strokeLinecap="round" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 1.01 0.81)">
                  <path 
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      fill: 'rgb(126,87,194)',
                      fillRule: 'nonzero',
                      opacity: 1
                    }} 
                    transform="translate(-25.01, -24.81)" 
                    d="M 33.016 8.625 L 18.750999999999998 12.206 C 18.456 12.282 16 12.873 16 14.29 L 16 40.992000000000004 C 16.373 41 16.719 41 17.016 41 L 33.016 36 C 33.016 36 34.016 35.625 34.016 34 C 34.016 33 34.016 9.623000000000001 34.016 9.623000000000001 C 34.016 9.072 33.568 8.625 33.016 8.625 z" 
                    strokeLinecap="round" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 1.01 0.81)">
                  <path 
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      fill: 'rgb(191,54,12)',
                      fillRule: 'nonzero',
                      opacity: 1
                    }} 
                    transform="translate(-25.01, -24.81)" 
                    d="M 33.016 8.625 L 18.750999999999998 12.206 C 18.456 12.282 16 12.873 16 14.29 L 16 40.992000000000004 C 16.373 41 16.719 41 17.016 41 L 33.016 36 C 33.016 36 34.016 35.625 34.016 34 C 34.016 33 34.016 9.623000000000001 34.016 9.623000000000001 C 34.016 9.072 33.568 8.625 33.016 8.625 z" 
                    strokeLinecap="round" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 4 4)">
                  <path 
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      fill: 'rgb(126,87,194)',
                      fillRule: 'nonzero',
                      opacity: 1
                    }} 
                    transform="translate(-28, -28)" 
                    d="M 16 40.992 C 15.984 43.992 20.793 44 23 44 L 39 38.667 C 39 38.667 40 38.292 40 36.667 C 40 35.667 40 13 40 13 C 40 12.449 39.553 12.002 39 12.002 L 23 16.29 C 20.75 16.872999999999998 15.984 17.29 16 14.29" 
                    strokeLinecap="round" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 4 4)">
                  <path 
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      fill: 'rgb(255,61,0)',
                      fillRule: 'nonzero',
                      opacity: 1
                    }} 
                    transform="translate(-28, -28)" 
                    d="M 16 40.992 C 15.984 43.992 20.793 44 23 44 L 39 38.667 C 39 38.667 40 38.292 40 36.667 C 40 35.667 40 13 40 13 C 40 12.449 39.553 12.002 39 12.002 L 23 16.29 C 20.75 16.872999999999998 15.984 17.29 16 14.29" 
                    strokeLinecap="round" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 0.2 -12.75)">
                  <path 
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      fill: 'rgb(255,224,178)',
                      fillRule: 'nonzero',
                      opacity: 1
                    }} 
                    transform="translate(-24.2, -11.25)" 
                    d="M 11 10.542 C 11.755 10.979 12.962 11.291 14.021 11.5 C 14.378 11.437 14.71 11.366 15 11.291 L 29.516 7.662000000000001 L 25 6 L 12.083 9.125 C 12.083 9.125 9.417 9.626 11 10.542 z M 19 15.542 C 19.755 15.979 20.962 16.291 22.021 16.5 C 22.378 16.437 22.71 16.366 23 16.291 L 37.894 12.299 L 33 10.625 L 20.083 14.125 C 20.083 14.125 17.417 14.626 19 15.542 z" 
                    strokeLinecap="round" 
                  />
                </g>
                <g transform="matrix(1 0 0 1 7 0.5)">
                  <path 
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      fill: 'rgb(255,236,179)',
                      fillRule: 'nonzero',
                      opacity: 1
                    }} 
                    transform="translate(-31, -24.5)" 
                    d="M 38 25 L 38 20 L 24 24 L 24 29 z" 
                    strokeLinecap="round" 
                  />
                </g>
              </g>
            </svg>
          </div>
        )}
      </div>
      <div className="curso-info">
        <p className="curso-nombre">{nombre}</p>
        <p className="curso-grupo">Grupo: {grupo}</p>
        <p className="curso-progreso-label">Progreso:</p>
        <div className="progreso-bar-container">
          <div 
            className="progreso-bar-fill" 
            style={{ width: `${progreso}%` }}
          >
            <span className="progreso-text">{progreso}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoCard;
