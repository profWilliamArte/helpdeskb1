import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes de layout global
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Ruta protegida (actualmente simulada; luego usará autenticación real con Supabase)
import ProtectedRoute from './components/common/ProtectedRoute';

// Páginas y componentes de autenticación
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import TicketDetail from './pages/TicketDetail';
import TicketEdit from './pages/TicketEdit';

/**
 * Layout principal para páginas autenticadas.
 * Incluye barra de navegación, contenido central y pie de página.
 * Se aplica a todas las rutas del área privada (dashboard, tickets, etc.).
 */
const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="main-content py-4">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

/**
 * Layout especializado para pantallas de autenticación (login, registro).
 * Centra visualmente el formulario en pantalla completa,
 * sin barra de navegación ni footer, para una experiencia limpia y enfocada.
 */
const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout d-flex align-items-center justify-content-center min-vh-100">
      <div className="container py-5">{children}</div>
    </div>
  );
};

/**
 * Componente raíz de la aplicación.
 * Define toda la estructura de enrutamiento y los layouts principales.
 * Organiza las rutas en tres categorías:
 *   1. Públicas (login, registro)
 *   2. Protegidas (requieren autenticación)
 *   3. Auxiliares / placeholders (reportes, calendario, etc.)
 */
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* ────────────────────────────────────────
               RUTAS PÚBLICAS: Accesibles sin login
             ──────────────────────────────────────── */}
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <Register />
              </AuthLayout>
            }
          />

          {/* ────────────────────────────────────────
               RUTA DE INICIO: Presentación del proyecto
               Muestra tecnologías usadas y estado actual (Etapa 0)
             ──────────────────────────────────────── */}
          <Route
            path="/"
            element={
              <MainLayout>
                <div className="text-center py-5">
                  <div className="mb-4">
                    <i className="bi bi-tools display-1 text-primary"></i>
                  </div>
                  <h1 className="display-5 fw-bold mb-3">HelpDesk Pro</h1>
                  <p className="lead mb-4">
                    Sistema profesional de gestión de tickets desarrollado con las tecnologías más modernas.
                  </p>
                  <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                      <div className="card shadow">
                        <div className="card-body">
                          <h5 className="card-title">
                            <i className="bi bi-rocket-takeoff me-2 text-primary"></i>
                            Proyecto Educativo
                          </h5>
                          <p className="card-text">
                            Esta es la <strong>Etapa 0</strong> del proyecto. Hemos establecido la estructura base con:
                          </p>
                          <div className="row text-center mt-3">
                            <div className="col">
                              <i className="bi bi-bootstrap-fill fs-1 text-primary"></i>
                              <p className="mt-2 fw-semibold">Bootstrap 5</p>
                            </div>
                            <div className="col">
                              <i className="bi bi-react fs-1 text-info"></i>
                              <p className="mt-2 fw-semibold">React 18</p>
                            </div>
                            <div className="col">
                              <i className="bi bi-lightning-charge fs-1 text-warning"></i>
                              <p className="mt-2 fw-semibold">Vite</p>
                            </div>
                            <div className="col">
                              <i className="bi bi-database fs-1 text-success"></i>
                              <p className="mt-2 fw-semibold">Supabase</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </MainLayout>
            }
          />

          {/* ────────────────────────────────────────
               RUTAS PROTEGIDAS: Requieren autenticación
               Actualmente permiten acceso (isAuthenticated = true),
               pero están listas para integrar AuthContext + Supabase.
             ──────────────────────────────────────── */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Dashboard />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Tickets />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tickets/:id"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <TicketDetail />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/tickets/:id/edit"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <TicketEdit />
                </MainLayout>
              </ProtectedRoute>
            }
          />

          {/* ────────────────────────────────────────
               RUTAS FUTURAS (placeholders): En construcción
               Permiten navegar anticipadamente y planificar la UI.
             ──────────────────────────────────────── */}
          <Route
            path="/reports"
            element={
              <MainLayout>
                <div className="text-center py-5">
                  <h2><i className="bi bi-graph-up me-2 text-primary"></i>Reportes</h2>
                  <p className="lead">Página de reportes - En construcción</p>
                </div>
              </MainLayout>
            }
          />
          <Route
            path="/calendar"
            element={
              <MainLayout>
                <div className="text-center py-5">
                  <h2><i className="bi bi-calendar me-2 text-primary"></i>Calendario</h2>
                  <p className="lead">Calendario de tickets - En construcción</p>
                </div>
              </MainLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <MainLayout>
                <div className="text-center py-5">
                  <h2><i className="bi bi-person-circle me-2 text-primary"></i>Mi Perfil</h2>
                  <p className="lead">Perfil de usuario - En construcción</p>
                </div>
              </MainLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <MainLayout>
                <div className="text-center py-5">
                  <h2><i className="bi bi-gear me-2 text-primary"></i>Configuración</h2>
                  <p className="lead">Configuración del sistema - En construcción</p>
                </div>
              </MainLayout>
            }
          />

          {/* ────────────────────────────────────────
               RUTA 404: Captura cualquier URL no definida
             ──────────────────────────────────────── */}
          <Route
            path="*"
            element={
              <MainLayout>
                <div className="text-center py-5">
                  <h1 className="display-1 text-muted">404</h1>
                  <h2>Página no encontrada</h2>
                  <p className="lead">La página que buscas no existe.</p>
                  <a href="/" className="btn btn-primary mt-3">
                    <i className="bi bi-house-door me-2"></i>
                    Volver al inicio
                  </a>
                </div>
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
