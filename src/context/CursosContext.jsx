/**
 * CursosContext
 * 
 * Propósito:
 * Context API para manejar el estado global de cursos inscritos.
 * Proporciona funciones para inscribir cursos y verificar inscripciones.
 * 
 * Estado Global:
 * - cursosInscritos: Array de cursos con estructura {id, nombre, grupo, progreso}
 * 
 * Funciones Exportadas:
 * - inscribirCurso(curso): Agrega curso si no está inscrito
 * - estaInscrito(id): Retorna true/false si curso ya está inscrito
 * - cursosInscritos: Array completo de cursos inscritos
 * 
 * Estructura de Curso:
 * {
 *   id: number,
 *   nombre: string,
 *   grupo: string,
 *   progreso: number (0-100)
 * }
 * 
 * Inicialización:
 * - 8 cursos pre-inscritos por defecto
 * - Progreso inicial variable por curso
 * 
 * Lógica de Inscripción:
 * - Verifica duplicados por ID antes de agregar
 * - Progreso inicial: 0 para nuevos cursos
 * 
 * Uso:
 * - Envolver App con <CursosProvider>
 * - Consumir con useCursos() hook en componentes
 * 
 * Componentes que lo usan:
 * - Inicio: Muestra cursosInscritos
 * - Cursos: Usa inscribirCurso y estaInscrito
 * - CursoInscritoDetalle: Verifica inscripción
 */
import { createContext, useState, useContext } from 'react';

const CursosContext = createContext();

export const CursosProvider = ({ children }) => {
  const [cursosInscritos, setCursosInscritos] = useState([
    { id: 1, nombre: 'Matemáticas I', grupo: 'A1', progreso: 75 },
    { id: 2, nombre: 'Programación', grupo: 'B2', progreso: 60 },
    { id: 3, nombre: 'Física', grupo: 'C1', progreso: 45 },
    { id: 4, nombre: 'Química', grupo: 'A2', progreso: 90 },
    { id: 5, nombre: 'Historia', grupo: 'B1', progreso: 30 },
    { id: 6, nombre: 'Inglés', grupo: 'C2', progreso: 85 },
    { id: 7, nombre: 'Literatura', grupo: 'A3', progreso: 50 },
    { id: 8, nombre: 'Biología', grupo: 'B3', progreso: 70 },
  ]);

  const inscribirCurso = (curso) => {
    // Verificar si el curso ya está inscrito
    const yaInscrito = cursosInscritos.some(c => c.id === curso.id);
    if (!yaInscrito) {
      setCursosInscritos([...cursosInscritos, { ...curso, progreso: 0 }]);
      return true;
    }
    return false;
  };

  const estaInscrito = (cursoId) => {
    return cursosInscritos.some(c => c.id === cursoId);
  };

  const value = {
    cursosInscritos,
    inscribirCurso,
    estaInscrito
  };

  return (
    <CursosContext.Provider value={value}>
      {children}
    </CursosContext.Provider>
  );
};

export const useCursos = () => {
  const context = useContext(CursosContext);
  if (!context) {
    throw new Error('useCursos debe ser usado dentro de un CursosProvider');
  }
  return context;
};
