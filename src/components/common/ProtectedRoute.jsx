import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

  const isAuthenticated = true; // Temporal
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

export default ProtectedRoute;
// Este componente ProtectedRoute es una ruta protegida que, en su forma actual, permite el acceso a
// cualquier usuario porque isAuthenticated está forzado a true. Su propósito futuro será restringir el
// acceso a ciertas páginas solo a usuarios autenticados: si no hay sesión activa, redirigirá al usuario a la
// página de login (/login). Por ahora, sirve como base para integrar luego la lógica real de autenticación
// (por ejemplo, usando Supabase Auth a través de AuthContext).
