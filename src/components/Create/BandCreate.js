import React, { useState, useEffect } from "react";
import { BandService,CountryService } from "../../services";
import { useNavigate } from "react-router-dom";



const BandCreate = () => {

  const [countries, setCountries] = useState([]);
  const [nome, setName] = useState("");
  const [nacao, setNacao] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
/*string
list
string
date */
  const saveBand = (e) => {
    e.preventDefault();
    const Band = { nome, nacao, email, senha:password, dataNascimento:date, verificado:verified }; // Use the converted value
    console.log(Band);
    BandService.createBand(Band).then(() => {
      navigate("/bands");
    });
  };

  

  useEffect(() => {
    CountryService.getCountryPairs().then((res) => {
      setCountries(res.data);
    });
  }, []);
      
   

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Banda</h3>
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
                  <label> Nacao: </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={nacao}
                    onChange={(e) => setNacao(e.target.value)}
                  >
                    {countries.map(function (object, i) {
                      return (
                        <option key={object.a} value={object.a}>
                          {object.b}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <br />
                <div className="form-group">
                  <label> Email: </label>
                  <input
                    placeholder="johnDoe@example.com"
                    name="name"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label> Senha: </label>
                  <input
                    
                    type="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label> Data de criação: </label>
                  <input
                    type="date"
                    placeholder="Name"
                    name="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    onChange={(e) => {setVerified(
                      document.getElementById("flexCheckDefault").checked
                    );}}
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Verificado
                  </label>

                  {/* <input
                    type="checkbox"
                    placeholder="Name"
                    className="form-check-input"
                    value=""
                    id="flexCheckDefault"
                    onChange={(e) => setName(e.target.value)}
                  /> */}
                </div>
                <br />
                <button className="btn btn-success" onClick={saveBand}>
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

export default BandCreate;
