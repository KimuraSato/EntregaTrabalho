import React, { useState, useEffect } from 'react';
import { SponsorService } from '../../services';
import { Link } from 'react-router-dom';

const placeholderbandList = [
  "Sem banda",
  "StarShade",
  "Covercats",
  "Stumbling Grace",
  "Night Drive",
];

const SponsorList = () => {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        SponsorService.getSponsors().then((res) => {
            setSponsors(res.data);
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
                    {sponsor.idBanda} ({placeholderbandList[sponsor.idBanda]})
                  </td>
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