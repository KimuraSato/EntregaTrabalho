import React, { useState, useEffect } from "react";
import { SponsorService , BandService } from "../../services";
import { useNavigate } from "react-router-dom";


/**
    Long id;
    String nome;
    Long idBanda;
    Long CPF;
    String contatoOficial;
 */

const SponsorCreate = () => {
  const [Bands, setBands] = useState([]);

  const [nome, setnome] = useState("");
  const [idBanda, setidBanda] = useState(0);
  const [cpf, setcpf] = useState(0);
  const [contatoOficial, setcontatoOficial] = useState("");

  const navigate = useNavigate();

  const saveSponsor = (e) => {
    e.preventDefault();
    
    const Sponsor = { nome, idBanda, cpf, contatoOficial }; 
    SponsorService.createSponsor(Sponsor).then(() => {
      navigate("/sponsors");
    });
  };

  useEffect(() => {
          BandService.getBands().then((res) => {
            setBands(res.data);
            
          });
        }, []);

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
                    onChange={(e) => setnome(e.target.value)}
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
                    <option key={0} defaultValue>
                      Selecione uma banda
                    </option>
                    {Bands.map(function (object, i) {
                      return (
                        <option key={i + 1} value={object.id}>
                          {object.nome}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <br />
                <div className="form-group">
                  <label> CPF: </label>
                  <input
                    placeholder="000.000.000-00"
                    type="number"
                    name="name"
                    className="form-control"
                    value={cpf}
                    onChange={(e) => setcpf(e.target.value)}
                  />
                </div>

                <br />
                <div className="form-group">
                  <label> contatoOficial: </label>
                  <input
                    placeholder="Contato"
                    name="contato"
                    className="form-control"
                    value={contatoOficial}
                    onChange={(e) => setcontatoOficial(e.target.value)}
                  />
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
