import React, { useState, useEffect } from "react";
import { SponsorService, BandService } from "../../services";
import { Link } from "react-router-dom";

const SponsorList = () => {
  const [sponsors, setSponsors] = useState([]);
  const [Bands, setBands] = useState([]);

  useEffect(() => {
    SponsorService.getSponsors().then((res) => {
      setSponsors(res.data);
    });
  }, []);

  useEffect(() => {
    BandService.getBands().then((res) => {
      setBands(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Lista de Patrocinios</h2>
      <div className="row">
        <Link to="add" className="btn btn-primary">
          Adicionar Patrocinio
        </Link>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>CPF/CNPJ</th>
              <th>Contato</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {sponsors.map((sponsor) => (
              <tr key={sponsor.id}>
                <td>{sponsor.id}</td>
                <td>{sponsor.nome}</td>
                <td>
                  {Bands.map(function (object, i) {
                    if (object.id == sponsor.idBanda) {
                      return object.nome;
                    }
                  })}
                  ({sponsor.idBanda})
                </td>
                <td>{sponsor.contatoOficial}</td>
                <td>
                  <Link to={`update/${sponsor.id}`} className="btn btn-info">
                    Atualizar
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      SponsorService.deleteSponsor(sponsor, sponsor.id).then(
                        () =>
                          setSponsors(
                            sponsors.filter((p) => p.id !== sponsor.id)
                          )
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

export default SponsorList;
