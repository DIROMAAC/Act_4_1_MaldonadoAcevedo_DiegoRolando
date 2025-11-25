/**
 * Perfil Page
 * 
 * Propósito:
 * Página de perfil del usuario mostrando imagen y datos personales.
 * 
 * Layout:
 * - Desktop: ProfileImage y ProfileCard lado a lado
 * - Móvil: Apilados verticalmente
 * 
 * Datos Mostrados:
 * - Nombre completo
 * - Correo electrónico
 * - Fecha de nacimiento
 * 
 * Uso:
 * - Accesible desde Header -> Perfil
 * - Datos estáticos (futuro: desde contexto de usuario)
 * 
 * Interacciones:
 * - Usa ProfileImage component (icono SVG)
 * - Usa ProfileCard component (info del usuario)
 * - Layout responsivo con flexbox
 */
import './Perfil.css';
import ProfileImage from '../components/ProfileImage';
import ProfileCard from '../components/ProfileCard';

const Perfil = () => {
  return (
    <div className="perfil-container">
      <ProfileImage />
      <ProfileCard 
        nombre="Juan Pérez García"
        correo="juan.perez@example.com"
        fechaNacimiento="15 de Marzo, 1995"
      />
    </div>
  );
};

export default Perfil;
