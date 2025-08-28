import React, { useState, useEffect } from "react";
import { ProducerService, BandService } from "../../services";
import { Link } from "react-router-dom";

const ProducerList = () => {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    ProducerService.getProducers().then((res) => {
      setProducers(res.data);
    });
  }, []);


  return (
    <div>
      <h2 className="text-center">Lista de Produtoras</h2>
      <div className="row">
        <Link to="add" className="btn btn-primary">
          Adicionar Produtora
        </Link>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>CPF/CNPJ</th>
              <th>Email</th>
              <th>Site</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {producers.map((producer) => (
              <tr key={producer.id}>
                <td>{producer.id}</td>
                <td>{producer.nome}</td>
                <td>{producer.cpfCnpj}</td>
                <td>{producer.email}</td>
                <td>{producer.site}</td>
                <td>{producer.telefone}</td>

                <td>
                  <Link to={`update/${producer.id}`} className="btn btn-info">
                    Atualizar
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      ProducerService.deleteProducer(producer, producer.id).then(
                        () =>
                          setProducers(
                            producers.filter((p) => p.id !== producer.id)
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

export default ProducerList;
