import React from 'react';

const TicketCard = () => {
  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Ticket #001</h6>
        <span className="badge bg-warning">Pendiente</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">Título del ticket</h5>
        <p className="card-text">Descripción del ticket - En construcción</p>
      </div>
      <div className="card-footer text-muted">
        <small>Creado hace 2 días</small>
      </div>
    </div>
  );
};

export default TicketCard;