import React, { useState } from "react";
import { SponsorService } from "../../services";
import { useNavigate } from "react-router-dom";

const placeholderbandList = [
  "Sem banda",
  "StarShade",
  "Covercats",
  "Stumbling Grace",
  "Night Drive",
];

const SponsorCreate = () => {
  const [nome, setName] = useState("");
  const [idBanda, setidBanda] = useState("");
  // const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const saveSponsor = (e) => {
    e.preventDefault();
    // Convert idBanda to a number (Long in Java equivalent)
    const sponsoridBanda = parseInt(idBanda, 10);
    const Sponsor = { nome, idBanda: sponsoridBanda }; // Use the converted value
    SponsorService.createSponsor(Sponsor).then(() => {
      navigate("/sponsors");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Patrocinio</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Nome: </label>
                  <input
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    value={nome}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label> Banda: </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={idBanda}
                    onChange={(e) => setidBanda(e.target.value)}
                  >
                    {placeholderbandList.map(function (object, i) {
                      return (
                        <option key={i} value={i}>
                          {object}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <br />

                <button className="btn btn-success" onClick={saveSponsor}>
                  Adicionar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCreate;
