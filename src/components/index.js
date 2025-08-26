import React from "react";

const IndexComponent = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="mb-4">Bem-Vindo</h1>
        <p className="lead mb-5">Navegue pelas seções abaixo:</p>

        <div className="d-grid gap-3 col-6 mx-auto">
          <a href="/members" className="btn btn-primary btn-lg">
            🎸 Integrantes
          </a>

          <a href="/bands" className="btn btn-primary btn-lg">
            🎤 Bandas
          </a>

          <a href="/sponsors" className="btn btn-primary btn-lg">
            🤝 Patrocínios
          </a>

          <a href="/shows" className="btn btn-primary btn-lg">
            🎭 Shows
          </a>

          <button className="btn btn-secondary btn-lg" disabled>
            🎬 Produtoras (Em breve)
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexComponent;
