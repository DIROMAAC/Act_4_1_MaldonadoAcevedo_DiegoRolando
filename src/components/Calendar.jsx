/**
 * Calendar Component
 * 
 * Propósito:
 * Calendario interactivo mensual con fechas marcadas para exámenes,
 * días festivos, eventos y día actual.
 * 
 * Estado:
 * - currentDate: Fecha actual mostrada en el calendario
 * 
 * Fechas Marcadas:
 * - exam (rojo): Exámenes
 * - holiday (verde): Días festivos
 * - event (naranja): Eventos importantes
 * - today (azul): Día actual
 * 
 * Funcionalidades:
 * - Navegar entre meses (botones anterior/siguiente)
 * - Ver leyenda de tipos de fechas
 * - Mostrar tooltip con detalles al hover
 * - Grid de días con layout responsivo
 * 
 * Uso:
 * <Calendar />
 * 
 * Interacciones:
 * - Usado en Calendarios page
 * - markedDates contiene eventos con formato 'YYYY-MM-DD'
 * - getDaysInMonth calcula días del mes y día inicial
 * - renderCalendar genera el grid de días
 */
import { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Eventos marcados en el calendario
  const markedDates = {
    '2025-11-09': { type: 'exam', label: 'Examen Matemáticas' },
    '2025-11-18': { type: 'today', label: 'Hoy' },
    '2025-11-23': { type: 'holiday', label: 'Revolución Mexicana' },
    '2025-11-28': { type: 'event', label: 'Entrega Proyecto' },
    '2025-12-12': { type: 'holiday', label: 'Día de la Virgen' },
    '2025-12-16': { type: 'exam', label: 'Examen Final' },
    '2025-12-25': { type: 'holiday', label: 'Navidad' },
  };

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const dayNames = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    return { daysInMonth, startingDayOfWeek };
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const getDateKey = (day) => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${month}-${dayStr}`;
  };

  const renderCalendar = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
    const days = [];

    // Días vacíos al inicio
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = getDateKey(day);
      const markedDate = markedDates[dateKey];
      
      days.push(
        <div
          key={day}
          className={`calendar-day ${markedDate ? `marked ${markedDate.type}` : ''}`}
          title={markedDate ? markedDate.label : ''}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="calendar-nav" onClick={() => changeMonth(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="calendar-month">
          {monthNames[currentDate.getMonth()]}
        </h2>
        <button className="calendar-nav" onClick={() => changeMonth(1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="calendar-weekdays">
        {dayNames.map((day, index) => (
          <div key={index} className="weekday-name">{day}</div>
        ))}
      </div>
      
      <div className="calendar-grid">
        {renderCalendar()}
      </div>

      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-color exam"></span>
          <span>Examen</span>
        </div>
        <div className="legend-item">
          <span className="legend-color holiday"></span>
          <span>Día festivo</span>
        </div>
        <div className="legend-item">
          <span className="legend-color event"></span>
          <span>Evento</span>
        </div>
        <div className="legend-item">
          <span className="legend-color today"></span>
          <span>Hoy</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
