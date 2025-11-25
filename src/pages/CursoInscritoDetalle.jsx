/**
 * CursoInscritoDetalle Page
 * 
 * Propósito:
 * Página de detalles de un curso inscrito con recursos, progreso y
 * funcionalidad de marcar recursos como completados.
 * 
 * Parámetros de Ruta:
 * - id: ID del curso inscrito (de URL params)
 * 
 * Estado Local:
 * - contenidos: Array de recursos del curso con estado de completado
 * 
 * Estado Global:
 * - cursosInscritos: Verifica que el usuario esté inscrito
 * 
 * Funcionalidades:
 * - Card con SVG, nombre, grupo y progreso integrado
 * - Lista de recursos con ContenidoCurso components
 * - Checkbox para marcar recursos completados/no completados
 * - Cálculo automático de progreso
 * - Botón "Volver a Inicio"
 * - Redirección si no estás inscrito
 * 
 * Flujo:
 * 1. Usuario accede desde Inicio clickeando un curso
 * 2. Ve card con info del curso y progreso
 * 3. Lista de recursos con checkboxes
 * 4. Click en checkbox actualiza progreso en tiempo real
 * 5. Botón volver regresa a Inicio
 * 
 * Cálculo de Progreso:
 * - progreso = (completados / total) * 100
 * - Se recalcula cada vez que cambia un checkbox
 * 
 * Interacciones:
 * - Usa useParams para obtener ID del curso
 * - Usa CursosContext para validar inscripción
 * - Usa ContenidoCurso component para cada recurso
 * - useEffect redirige si no estás inscrito
 */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCursos } from '../context/CursosContext';
import ContenidoCurso from '../components/ContenidoCurso';
import './CursoInscritoDetalle.css';

// Datos de ejemplo - en producción vendrían de una API
const cursosInscritosData = {
  '1': {
    nombre: "Matemáticas I",
    grupo: "A1",
    contenidos: [
      { id: 1, nombre: "Ecuaciones Lineales", descripcion: "Video tutorial sobre resolución de ecuaciones lineales", completado: true },
      { id: 2, nombre: "Funciones", descripcion: "PDF con ejercicios resueltos de funciones", completado: true },
      { id: 3, nombre: "Límites", descripcion: "Práctica interactiva de límites", completado: true },
      { id: 4, nombre: "Derivadas", descripcion: "Guía completa sobre derivadas", completado: false }
    ]
  },
  '2': {
    nombre: "Programación",
    grupo: "B2",
    contenidos: [
      { id: 1, nombre: "Variables y Tipos de Datos", descripcion: "Introducción a variables en Python", completado: true },
      { id: 2, nombre: "Estructuras de Control", descripcion: "If, else, loops en Python", completado: true },
      { id: 3, nombre: "Funciones", descripcion: "Creación y uso de funciones", completado: true },
      { id: 4, nombre: "POO", descripcion: "Programación Orientada a Objetos", completado: false },
      { id: 5, nombre: "Archivos", descripcion: "Manejo de archivos en Python", completado: false }
    ]
  },
  '3': {
    nombre: "Física",
    grupo: "C1",
    contenidos: [
      { id: 1, nombre: "Cinemática", descripcion: "Movimiento rectilíneo uniforme", completado: true },
      { id: 2, nombre: "Dinámica", descripcion: "Leyes de Newton", completado: true },
      { id: 3, nombre: "Trabajo y Energía", descripcion: "Conceptos de trabajo y energía", completado: false },
      { id: 4, nombre: "Momento Lineal", descripcion: "Conservación del momento", completado: false }
    ]
  },
  '4': {
    nombre: "Química",
    grupo: "A2",
    contenidos: [
      { id: 1, nombre: "Tabla Periódica", descripcion: "Elementos y propiedades", completado: true },
      { id: 2, nombre: "Enlaces Químicos", descripcion: "Iónicos, covalentes y metálicos", completado: true },
      { id: 3, nombre: "Reacciones Químicas", descripcion: "Tipos de reacciones", completado: true },
      { id: 4, nombre: "Estequiometría", descripcion: "Cálculos químicos", completado: true },
      { id: 5, nombre: "Termoquímica", descripcion: "Energía en reacciones", completado: false }
    ]
  },
  '5': {
    nombre: "Historia",
    grupo: "B1",
    contenidos: [
      { id: 1, nombre: "Prehistoria", descripcion: "Orígenes de la humanidad", completado: true },
      { id: 2, nombre: "Civilizaciones Antiguas", descripcion: "Mesopotamia y Egipto", completado: true },
      { id: 3, nombre: "Edad Media", descripcion: "Feudalismo y cruzadas", completado: false },
      { id: 4, nombre: "Renacimiento", descripcion: "Arte y cultura renacentista", completado: false },
      { id: 5, nombre: "Revolución Industrial", descripcion: "Cambios económicos y sociales", completado: false }
    ]
  },
  '6': {
    nombre: "Inglés",
    grupo: "C2",
    contenidos: [
      { id: 1, nombre: "Present Tenses", descripcion: "Simple, continuous, perfect", completado: true },
      { id: 2, nombre: "Past Tenses", descripcion: "Simple, continuous, perfect", completado: true },
      { id: 3, nombre: "Future Tenses", descripcion: "Will, going to, present continuous", completado: true },
      { id: 4, nombre: "Modal Verbs", descripcion: "Can, could, should, must", completado: true },
      { id: 5, nombre: "Conditionals", descripcion: "Zero, first, second, third", completado: false }
    ]
  },
  '7': {
    nombre: "Literatura",
    grupo: "A3",
    contenidos: [
      { id: 1, nombre: "Literatura Griega", descripcion: "Homero y la épica", completado: true },
      { id: 2, nombre: "Shakespeare", descripcion: "Teatro isabelino", completado: true },
      { id: 3, nombre: "Romanticismo", descripcion: "Movimiento romántico", completado: true },
      { id: 4, nombre: "Realismo", descripcion: "Literatura realista", completado: false },
      { id: 5, nombre: "Modernismo", descripcion: "Vanguardias literarias", completado: false }
    ]
  },
  '8': {
    nombre: "Biología",
    grupo: "B3",
    contenidos: [
      { id: 1, nombre: "La Célula", descripcion: "Estructura y función celular", completado: true },
      { id: 2, nombre: "Metabolismo", descripcion: "Procesos metabólicos", completado: true },
      { id: 3, nombre: "Genética", descripcion: "Herencia y ADN", completado: true },
      { id: 4, nombre: "Evolución", descripcion: "Teoría evolutiva", completado: true },
      { id: 5, nombre: "Ecología", descripcion: "Ecosistemas y biodiversidad", completado: false }
    ]
  }
};

const CursoInscritoDetalle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cursosInscritos } = useCursos();

  const cursoInscrito = cursosInscritos.find(c => c.id === parseInt(id));
  const cursoDatos = cursosInscritosData[id];
  const [contenidos, setContenidos] = useState(() => cursoDatos?.contenidos || []);

  useEffect(() => {
    if (!cursoInscrito) {
      navigate('/inicio');
    }
  }, [cursoInscrito, navigate]);

  const handleToggleCompletado = (contenidoId) => {
    setContenidos(prevContenidos =>
      prevContenidos.map(contenido =>
        contenido.id === contenidoId
          ? { ...contenido, completado: !contenido.completado }
          : contenido
      )
    );
  };

  const calcularProgreso = () => {
    if (contenidos.length === 0) return 0;
    const completados = contenidos.filter(c => c.completado).length;
    return Math.round((completados / contenidos.length) * 100);
  };

  if (!cursoInscrito || !cursoDatos) {
    return (
      <div className="curso-inscrito-detalle-container">
        <p>Curso no encontrado o no estás inscrito</p>
      </div>
    );
  }

  return (
    <div className="curso-inscrito-detalle-container">
      <button className="btn-volver" onClick={() => navigate('/inicio')}>
        ← Volver a Inicio
      </button>
      
      <div className="curso-header">
        <div className="curso-icon-detalle">
          <svg 
            className="books-icon-detalle"
            width='100' 
            height='100' 
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
        <div className="curso-info-header">
          <h1 className="curso-titulo">{cursoDatos.nombre}</h1>
          <p className="curso-grupo">Grupo: {cursoDatos.grupo}</p>
        </div>
        <div className="progreso-section">
          <h3>Progreso:</h3>
          <div className="progreso-bar-detalle">
            <div 
              className="progreso-fill-detalle" 
              style={{ width: `${calcularProgreso()}%` }}
            >
              <span className="progreso-text-detalle">{calcularProgreso()}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="contenidos-section">
        <h2>Recursos del Curso</h2>
        <div className="contenidos-list">
          {contenidos.map((contenido) => (
            <ContenidoCurso
              key={contenido.id}
              nombre={contenido.nombre}
              descripcion={contenido.descripcion}
              completado={contenido.completado}
              onToggleCompletado={() => handleToggleCompletado(contenido.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CursoInscritoDetalle;
