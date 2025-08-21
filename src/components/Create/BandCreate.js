import React, { useState, useEffect } from "react";
import {
  BandService,
  CountryService,
  GenreService,
  StatusService,
} from "../../services";
import { useNavigate } from "react-router-dom";

const BandCreate = () => {
 

  const [Countries, setCountries] = useState([]);
  const [Genres, setGenre] = useState([]);
  const [Statuses, setStatus] = useState([]);

  const [nome, setnome] = useState("");
  const [nacao, setnacao] = useState("");
  const [generoMusical, setgeneroMusical] = useState("");
  const [dataCriacao, setdataCriacao] = useState("");
  const [status, setstatus] = useState("");
  

  const navigate = useNavigate();
  
  const saveBand = (e) => {
    e.preventDefault();
    const Band = {
      nome,
      nacao,
      generoMusical,
      dataCriacao,
      status,
      
    };
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

  useEffect(() => {
    GenreService.getGenrePairs().then((res) => {
      setGenre(res.data);
    });
  }, []);

  useEffect(() => {
    StatusService.getStatusPairs().then((res) => {
      setStatus(res.data);
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
                    onChange={(e) => setnome(e.target.value)}
                  />
                </div>

                <br />
                <div className="form-group">
                  <label> Nacao: </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={nacao}
                    onChange={(e) => setnacao(e.target.value)}
                  >
                    <option key={0} defaultValue>
                      Selecione uma Nação
                    </option>
                    {Countries.map(function (object, i) {
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
                  <label> Genero Musical: </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={generoMusical}
                    onChange={(e) => setgeneroMusical(e.target.value)}
                  >
                    <option key={0} defaultValue>
                      Selecione um Genero
                    </option>
                    {Genres.map(function (object, i) {
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
                  <label> Data de criação: </label>
                  <input
                    type="date"
                    placeholder="Name"
                    name="date"
                    className="form-control"
                    value={dataCriacao}
                    onChange={(e) => setdataCriacao(e.target.value)}
                  />
                </div>
                <br/>

                <div className="form-group">
                  <label> Status: </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={status}
                    onChange={(e) => setstatus(e.target.value)}
                  >
                    <option key={0} defaultValue>
                      Selecione um Status
                    </option>
                    {Statuses.map(function (object, i) {
                      return (
                        <option key={object.a} value={object.a}>
                          {object.b}
                        </option>
                      );
                    })}
                  </select>

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
