/**
 * Input Component
 * 
 * Propósito:
 * Campo de entrada reutilizable con estilos personalizados y validación visual.
 * Tiene hover rojo cuando está vacío para indicar que requiere datos.
 * 
 * Props:
 * @param {string} label - Etiqueta del campo
 * @param {string} type - Tipo de input HTML ('text', 'email', 'password', etc.)
 * @param {string} value - Valor controlado del input
 * @param {Function} onChange - Función callback al cambiar el valor
 * @param {string} placeholder - Texto de ayuda dentro del input
 * @param {boolean} error - Indica si hay error de validación
 * @param {string} name - Nombre del campo para formularios
 * 
 * Uso:
 * <Input 
 *   label="Correo"
 *   type="email" 
 *   value={email} 
 *   onChange={(e) => setEmail(e.target.value)}
 *   placeholder="ejemplo@correo.com"
 * />
 * 
 * Interacciones:
 * - Usado en LoginForm para email y contraseña
 */
import { useState } from 'react';
import './Input.css';

const Input = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  error = false,
  name 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isEmpty = !value || value.length === 0;

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`custom-input ${error ? 'input-error' : ''} ${isFocused ? 'input-focused' : ''} ${isEmpty ? 'input-empty' : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Input;
