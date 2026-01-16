
import React from 'react';

const Register = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h4 className="mb-0">
                <i className="bi bi-person-plus me-2"></i>
                Crear Cuenta
              </h4>
            </div>
            <div className="card-body">
              <div className="alert alert-info">
                <i className="bi bi-info-circle me-2"></i>
                Formulario de registro - En construcción
              </div>
              <div className="d-grid gap-2">
                <a href="/" className="btn btn-outline-success">
                  <i className="bi bi-house-door me-2"></i>
                  Volver al inicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;