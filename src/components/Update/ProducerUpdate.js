import React, { useState, useEffect } from "react";
import { ProducerService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";

const ProducerUpdate = () => {
  const { id } = useParams();
  const [nome, setnome] = useState("");
  const [email, setemail] = useState(""); 
  const [cpfCnpj, setcpfCnpj] = useState(0);
  const [site, setsite] = useState(""); 
  const [telefone, settelefone] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    ProducerService.getProducerById(id).then((res) => {
      const Producer = res.data;
      setnome(Producer.nome);
      setemail(Producer.email);
      setcpfCnpj(Producer.cpfCnpj);
      settelefone(Producer.telefone);
      setsite(Producer.site);
     
    });
  }, [id]);

  const updateProducer = (e) => {
    e.preventDefault();
    
    const Producer = {id, nome, email, cpfCnpj, site, telefone }; 
    
    ProducerService.updateProducer(Producer, id).then(() => {
      navigate("/producers");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Produtora</h3>
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
                  <label> Email: </label>
                  <input
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label> CPF/CNPJ: </label>
                  <input
                    placeholder="000.000.000-00"
                    type="number"
                    name="name"
                    className="form-control"
                    value={cpfCnpj}
                    onChange={(e) => setcpfCnpj(e.target.value)}
                  />
                </div>

                <br />
                <div className="form-group">
                  <label> Contato Oficial: </label>
                  <input
                    type="number"
                    placeholder="Contato"
                    name="contato"
                    className="form-control"
                    value={telefone}
                    onChange={(e) => settelefone(e.target.value)}
                  />
                </div>

                <br />

                <div className="form-group">
                  <label> Site: </label>
                  <input
                    placeholder="Site"
                    name="site"
                    className="form-control"
                    value={site}
                    onChange={(e) => setsite(e.target.value)}
                  />
                </div>

                <br />
                <button className="btn btn-success" onClick={updateProducer}>
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

export default ProducerUpdate;
