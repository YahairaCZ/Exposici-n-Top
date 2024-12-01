"use client";

import React, { useState } from 'react';

export default function HomePage() {
  // Estados para almacenar las respuestas del usuario
  const [formStep, setFormStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [satisfaction, setSatisfaction] = useState(50);
  const [comments, setComments] = useState('');
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Función para mostrar el resumen del formulario
  const handleSubmit = () => {
    if (!termsAccepted) {
      alert("Por favor, acepta los términos y condiciones antes de finalizar.");
      return;
    }

    const evaluacion = `
      Nombre: ${name}
      Correo Electrónico: ${email}
      Género: ${gender}
      Rango de Edad: ${ageRange}
      Nivel de Satisfacción: ${satisfaction}
      Comentarios: ${comments}
      Recibir Notificaciones: ${receiveUpdates ? "Sí" : "No"}
      Acepta Términos: ${termsAccepted ? "Sí" : "No"}
    `;

    alert(`Evaluación completa:\n${evaluacion}`);
  };

  // Función para avanzar al siguiente formulario
  const nextForm = () => setFormStep((prev) => prev + 1);

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Formulario</h1>

      {formStep === 1 && (
        <>
        <h3>Registro de formulario</h3>
        <br></br>
          <div style={{ marginBottom: '15px' }}>
            <label>Nombre Completo</label>
            <input
              type="text"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="correo@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Género</label><br />
            <input type="radio" id="male" name="gender" value="Masculino" onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="male" style={{ marginRight: '10px' }}> Masculino</label>
            <input type="radio" id="female" name="gender" value="Femenino" onChange={(e) => setGender(e.target.value)} />
            <label htmlFor="female"> Femenino</label>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Rango de Edad</label>
            <select
              value={ageRange}
              onChange={(e) => setAgeRange(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px'
              }}
            >
              <option value="">Selecciona tu edad</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36-45">36-45</option>
              <option value="46+">46+</option>
            </select>
          </div>
          <button onClick={nextForm} style={buttonStyle}>Siguiente</button>
        </>
      )}

      {formStep === 2 && (
        <>
         <h3>Deja tu comentario de la actuvidad</h3>
         <br></br>
          <div style={{ marginBottom: '15px' }}>
            <label>Califica la actividad</label>
            <input
              type="range"
              min="0"
              max="100"
              value={satisfaction}
              onChange={(e) => setSatisfaction(e.target.value)}
              style={{ width: '100%' }}
            />
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{satisfaction}%</p>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Comentarios</label>
            <textarea
              placeholder="Escribe tus comentarios aquí"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                resize: 'vertical'
              }}
            ></textarea>
          </div>
          {/* Switch para recibir actualizaciones */}
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>Activar notificaciones</label>
          <label style={{
            position: 'relative',
            display: 'inline-block',
            width: '50px',
            height: '24px'
          }}>
            <input
              type="checkbox"
              checked={receiveUpdates}
              onChange={(e) => setReceiveUpdates(e.target.checked)}
              style={{
                opacity: 0,
                width: 0,
                height: 0
              }}
            />
            <span style={{
              position: 'absolute',
              cursor: 'pointer',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: receiveUpdates ? '#0070f3' : '#ccc',
              transition: '0.4s',
              borderRadius: '34px'
            }}></span>
            <span style={{
              position: 'absolute',
              height: '20px',
              width: '20px',
              left: receiveUpdates ? '26px' : '4px',
              bottom: '2px',
              backgroundColor: 'white',
              transition: '0.4s',
              borderRadius: '50%'
            }}></span>
          </label>
        </div>
          <div style={{ marginBottom: '15px' }}>
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" style={{ marginLeft: '8px' }}> Acepto los términos y condiciones</label>
          </div>
          <button onClick={handleSubmit} style={buttonStyle}>Finalizar</button>
        </>
      )}
    </div>
  );
}

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#0070f3',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};
