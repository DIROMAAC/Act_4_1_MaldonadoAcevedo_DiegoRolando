/**
 * LoginForm Component
 * 
 * Propósito:
 * Formulario de inicio de sesión con validación de email y contraseña.
 * Redirige a /inicio después de validar credenciales.
 * 
 * Estado:
 * - formData: {correo, contrasena} - Datos del formulario
 * - errors: {correo, contrasena} - Errores de validación
 * 
 * Validaciones:
 * - Email debe tener formato válido
 * - Contraseña mínimo 6 caracteres
 * - Ambos campos son obligatorios
 * 
 * Flujo:
 * 1. Usuario ingresa credenciales
 * 2. Al hacer submit, valida formato de email y longitud de contraseña
 * 3. Si es válido, navega a /inicio
 * 4. Si no, muestra errores visuales en los campos
 * 
 * Uso:
 * <LoginForm />
 * 
 * Interacciones:
 * - Usa Input component para email y contraseña
 * - Usa Button component para submit
 * - Usa useNavigate para redirección
 * - Renderizado en la ruta '/' (App.jsx)
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import Input from './Input';
import Button from './Button';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: ''
  });

  const [errors, setErrors] = useState({
    correo: false,
    contrasena: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {
      correo: !validateEmail(formData.correo),
      contrasena: formData.contrasena.length < 6
    };

    setErrors(newErrors);

    if (!newErrors.correo && !newErrors.contrasena) {
      console.log('Formulario válido:', formData);
      // Redirigir a la página de inicio
      navigate('/inicio');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          label="Correo"
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Ingrese su correo"
          error={errors.correo}
        />

        <Input
          label="Contraseña"
          type="password"
          name="contrasena"
          value={formData.contrasena}
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
          error={errors.contrasena}
        />

        <Button type="submit" variant="primary">
          Ingresar
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
