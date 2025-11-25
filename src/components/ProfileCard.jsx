/**
 * ProfileCard Component
 * 
 * Propósito:
 * Muestra la información personal del usuario en formato de card.
 * 
 * Props:
 * @param {string} nombre - Nombre completo del usuario
 * @param {string} correo - Email del usuario
 * @param {string} fechaNacimiento - Fecha de nacimiento del usuario
 * 
 * Diseño:
 * - Card blanca con borde gris
 * - Layout vertical con etiquetas y valores
 * - Etiquetas en negrita, valores en texto normal
 * 
 * Uso:
 * <ProfileCard 
 *   nombre="Juan Pérez" 
 *   correo="juan@email.com"
 *   fechaNacimiento="01/01/2000"
 * />
 * 
 * Interacciones:
 * - Usado en Perfil page junto a ProfileImage
 * - Layout side-by-side en desktop, apilado en móvil
 */
import './ProfileCard.css';

const ProfileCard = ({ nombre, correo, fechaNacimiento }) => {
  return (
    <div className="profile-card">
      <div className="info-item">
        <label className="info-label">Nombre:</label>
        <p className="info-value">{nombre}</p>
      </div>
      <div className="info-item">
        <label className="info-label">Correo:</label>
        <p className="info-value">{correo}</p>
      </div>
      <div className="info-item">
        <label className="info-label">Fecha de Nacimiento:</label>
        <p className="info-value">{fechaNacimiento}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
