/**
 * Tutores Page
 * 
 * Propósito:
 * Directorio de tutores disponibles con información de materias,
 * descripción, disponibilidad y botón de agendamiento.
 * 
 * Estado Local:
 * - tutores: Array de 8 tutores disponibles
 * 
 * Datos de Tutor:
 * - id: Identificador único
 * - nombre: Nombre completo con título (Dr./Dra.)
 * - materias: String con materias separadas por comas
 * - descripcion: Texto descriptivo de especialización
 * - disponibilidad: Horarios disponibles
 * 
 * Funcionalidades:
 * - SearchBar para buscar tutores
 * - Grid de 3 tutores por fila
 * - TutorCard con SVG de maestro, info y botón "Agendar"
 * 
 * Uso:
 * - Accesible desde Header -> Tutores
 * - Muestra 8 tutores con diferentes especialidades
 * 
 * Interacciones:
 * - Usa SearchBar component
 * - Usa TutorCard component
 * - Botón "Agendar" (funcionalidad pendiente)
 */
import SearchBar from '../components/SearchBar';
import TutorCard from '../components/TutorCard';
import './Tutores.css';

const Tutores = () => {
  const tutores = [
    {
      id: 1,
      nombre: "Dr. Juan Pérez",
      materias: "Matemáticas, Cálculo",
      descripcion: "Especialista en matemáticas avanzadas con 10 años de experiencia",
      disponibilidad: "Lun-Vie 9:00-12:00"
    },
    {
      id: 2,
      nombre: "Dra. María González",
      materias: "Física, Termodinámica",
      descripcion: "Profesora de física con maestría en termodinámica",
      disponibilidad: "Mar-Jue 14:00-17:00"
    },
    {
      id: 3,
      nombre: "Mtro. Carlos Ramírez",
      materias: "Programación, Algoritmos",
      descripcion: "Desarrollador de software con amplia experiencia docente",
      disponibilidad: "Lun-Mie 10:00-13:00"
    },
    {
      id: 4,
      nombre: "Dra. Ana Martínez",
      materias: "Química, Biología",
      descripcion: "Química con doctorado en bioquímica aplicada",
      disponibilidad: "Vie 15:00-18:00"
    },
    {
      id: 5,
      nombre: "Dr. Luis Hernández",
      materias: "Historia, Filosofía",
      descripcion: "Historiador con especialización en historia contemporánea",
      disponibilidad: "Mar-Vie 10:00-14:00"
    },
    {
      id: 6,
      nombre: "Mtra. Laura Sánchez",
      materias: "Inglés, Literatura",
      descripcion: "Profesora certificada en enseñanza del idioma inglés",
      disponibilidad: "Lun-Jue 8:00-11:00"
    },
    
  ];

  return (
    <div className="tutores-container">
      <div className="tutores-search">
        <SearchBar placeholder="Buscar tutor..." />
      </div>
      <div className="tutores-grid">
        {tutores.map((tutor) => (
          <TutorCard
            key={tutor.id}
            nombre={tutor.nombre}
            materias={tutor.materias}
            descripcion={tutor.descripcion}
            disponibilidad={tutor.disponibilidad}
          />
        ))}
      </div>
    </div>
  );
};

export default Tutores;
