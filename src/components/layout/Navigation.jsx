import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    document.documentElement.getAttribute('data-bs-theme') === 'dark'
  );

  // Controlar tema claro/oscuro
  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  // Aplicar tema al cargar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-bs-theme', savedTheme);
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg  bg-body-tertiary sticky-top shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
          <i className="bi bi-tools fs-4 me-2"></i>
          HelpDesk Pro
        </Link>

        {/* Botón hamburguesa */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Contenido del navbar */}
        <div className="collapse navbar-collapse" id="navbarMain">
          {/* Menú izquierdo */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-semibold' : ''}`
                }
              >
                <i className="bi bi-house-door me-1"></i>
                Inicio
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-semibold' : ''}`
                }
              >
                <i className="bi bi-speedometer2 me-1"></i>
                Dashboard
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink 
                to="/tickets" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-semibold' : ''}`
                }
              >
                <i className="bi bi-ticket-detailed me-1"></i>
                Tickets
              </NavLink>
            </li>
          </ul>

          {/* Menú derecho */}
          <ul className="navbar-nav">
            {/* Botón tema */}
            <li className="nav-item">
              <button 
                className="btn btn-outline-light btn-sm mx-2 botrder-radius" 
                onClick={toggleTheme}
                title={darkMode ? 'Modo claro' : 'Modo oscuro'}
              >
                {darkMode ? (
                  <i className="bi bi-sun"></i>
                ) : (
                  <i className="bi bi-moon"></i>
                )}
              </button>
            </li>

            {/* Enlaces auth */}
            <li className="nav-item">
              <NavLink 
                to="/login" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-semibold' : ''}`
                }
              >
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Login
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink 
                to="/register" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active fw-semibold' : ''}`
                }
              >
                <i className="bi bi-person-plus me-1"></i>
                Registro
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;