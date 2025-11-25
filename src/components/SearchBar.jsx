/**
 * SearchBar Component
 * 
 * Propósito:
 * Barra de búsqueda con icono SVG de lupa. Permite filtrar contenido en tiempo real.
 * 
 * Props:
 * @param {string} placeholder - Texto de ayuda (default: "Buscar...")
 * @param {Function} onSearch - Callback que recibe el término de búsqueda
 * 
 * Uso:
 * <SearchBar 
 *   placeholder="Buscar cursos..." 
 *   onSearch={(term) => filterCourses(term)}
 * />
 * 
 * Interacciones:
 * - Usado en Inicio para buscar cursos inscritos
 * - Usado en Cursos para buscar cursos disponibles
 * - Usado en Tutores para buscar tutores
 * - Incluye SVG de lupa como icono visual
 */
import './SearchBar.css';

const SearchBar = ({ placeholder = "Buscar...", onSearch }) => {
  const handleSearch = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar-input"
        placeholder={placeholder}
        onChange={handleSearch}
      />
      <svg 
        className="search-icon"
        width='22' 
        height='22' 
        viewBox='0 0 24 24' 
        xmlns='http://www.w3.org/2000/svg'
      >
        <g transform="matrix(0.83 0 0 0.83 12 12)">
          <path 
            style={{
              stroke: 'none',
              strokeWidth: 1,
              fill: 'rgb(0,0,0)',
              fillRule: 'nonzero',
              opacity: 1
            }} 
            transform="translate(-15.01, -15.01)" 
            d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 C 25.54378557313715 26.968271794792877 25.916235992218144 27.07350663500295 26.26667805152247 26.982149810984033 C 26.617120110826793 26.89079298696512 26.89079298696512 26.617120110826793 26.982149810984033 26.26667805152247 C 27.07350663500295 25.916235992218144 26.968271794792877 25.54378557313715 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" 
            strokeLinecap="round" 
          />
        </g>
      </svg>
    </div>
  );
};

export default SearchBar;
