import React from "react";



const IndexComponent = () => {
    
    return (
      <div>
        <h1>Index</h1>

        <a href="/members">
          <button className="btn btn-primary">Integrantes</button>
        </a>
        <br />

        <a href="/bands">
          <button className="btn btn-primary " >
            Bandas
          </button>
        </a>
        <br />

        <a href="/sponsors">
          <button className="btn btn-primary ">Patrocinios</button>
        </a>
        <br />

        <button className="btn btn-primary" disabled>
          Shows
        </button>

        <br />

        <button className="btn btn-primary" disabled>
          Produtoras
        </button>

        <br />
      </div>
    );
}

export default IndexComponent;
