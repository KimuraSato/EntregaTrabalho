import React, { useState, useEffect } from "react";
import {
  BandService,
  CountryService,
  GenreService,
  StatusService,
} from "../../services";
import { Link } from "react-router-dom";

const BandList = () => {
  const [Countries, setCountries] = useState([]);
  const [Genres, setGenre] = useState([]);
  const [Statuses, setStatus] = useState([]);
  const [Bands, setBands] = useState([]);


  useEffect(() => {
    BandService.getBands().then((res) => {
      setBands(res.data);
    });
  }, []);

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


  /*private Long id;
      private String nome;
      private Nacao nacao;
      private GeneroMusical generoMusical;
      private Date dataCriacao;
      private Status status; */

  return (
    <div>
      <h2 className="text-center">Lista de Bandas</h2>
      <div className="row">
        <Link to="add" className="btn btn-primary">
          Adicionar Banda
        </Link>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>Nacao de origem</th>
              <th>Genero Musical</th>
              <th>Data de criação</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {Bands.map((band) => (
              <tr key={band.id}>
                <td>{band.id}</td>
                <td>{band.nome}</td>

                <td>
                  {Countries.map(function (object, i) {
                    if (object.a == band.nacao) {
                      return object.b;
                    }
                  })}
                </td>
                <td>
                  {Genres.map(function (object, i) {
                    if (object.a == band.generoMusical) {
                      return object.b;
                    }
                  })}
                </td>

                <td>{band.dataCriacao}</td>

                <td>
                  {Statuses.map(function (object, i) {
                    if (object.a == band.status) {
                      return object.b;
                    }
                  })}
                </td>

                <td>
                  <Link to={`update/${band.id}`} className="btn btn-info">
                    Atualizar
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      BandService.deleteBand(band, band.id).then(() =>
                        setBands(Bands.filter((p) => p.id !== band.id))
                      )
                    }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BandList;
