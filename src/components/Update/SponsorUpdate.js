import React, { useState, useEffect } from "react";
import { SponsorService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";

const placeholderbandList = [
  "Sem banda",
  "StarShade",
  "Covercats",
  "Stumbling Grace",
  "Night Drive",
];

const SponsorUpdate = () => {
  const { id } = useParams();
  const [nome, setName] = useState("");
  const [idBanda, setidBanda] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    SponsorService.getSponsorById(id).then((res) => {
      const Sponsor = res.data;
      setName(Sponsor.nome);
      setidBanda(Sponsor.idBanda);
    });
  }, [id]);

  const updateSponsor = (e) => {
    e.preventDefault();
    // Convert idBanda to a number (Long in Java equivalent)
    const sponsoridBanda = parseInt(idBanda, 10);
    const Sponsor = {id, nome, idBanda: sponsoridBanda }; // Use the converted value
    console.log(id)
    console.log(Sponsor)
    SponsorService.updateSponsor(Sponsor, id).then(() => {
      navigate("/sponsors");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Atualizar Patrocinio</h3>
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
                    className="form-select"
                    aria-label="Default select example"
                    value={idBanda}
                    onChange={(e) => setidBanda(e.target.value)}
                    defaultValue="-1"
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

                <button className="btn btn-success" onClick={updateSponsor}>
                  Atualizar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorUpdate;
