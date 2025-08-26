import React, { useState, useEffect } from 'react';
import { ShowService} from '../../services';
import { Link } from 'react-router-dom';



const ShowList = () => {
    
    const [shows, setShows] = useState([]);

    useEffect(() => {
        ShowService.getShows().then((res) => {
            setShows(res.data);
        });
    }, []);


    return (
      <div>
        <h2 className="text-center">Lista de Integrantes</h2>
        <div className="row">
          <Link to="add" className="btn btn-primary">
            Adicionar Integrante
          </Link>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>id</th>
                <th>Nome</th>
                <th>Data</th>
                <th>Hora de inicio</th>
                <th>Hora de término</th>
                <th>Nação</th>
                <th>Descrição</th>

                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {shows.map((show) => (
                <tr key={show.id}>
                  <td>{show.id}</td>
                  <td>{show.nome}</td>
                  <td>{show.data}</td>
                  <td>{show.horarioInicio}</td>
                  <td>{show.horarioFim}</td>
                  <td>{show.nacao}</td>
                  <td>{show.descricao}</td>

                  <td>
                    <Link to={`update/${show.id}`} className="btn btn-info">
                      Atualizar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        ShowService.deleteShow(show, show.id).then(() =>
                          setShows(shows.filter((p) => p.id !== show.id))
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

export default ShowList;