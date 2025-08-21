import React, { useState, useEffect } from "react";
import {MemberService,BandService} from "../../services";
import { useNavigate, useParams } from "react-router-dom";



const MemberUpdate = () => {
  const { id } = useParams();
  const [nome, setnome] = useState("");
  const [nomeArtistico, setnomeArtistico] = useState("");
  const [idBanda, setidBanda] = useState(0);
  const [cpf, setcpf] = useState(0);
  const [email, setEmail] = useState("");
  const [telefone, settelefone] = useState(0);
  const [dataEntrada, setdataEntrada] = useState("");
  const [dataNascimento, setdataNascimento] = useState("");

  const [bands, setBands] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    MemberService.getMemberById(id).then((res) => {
      const Member = res.data;
      
      setnome(Member.nome);
      setnomeArtistico(Member.nomeArtistico);
      setidBanda(Member.idBanda);
      setcpf(Member.cpf);
      setEmail(Member.email);
      settelefone(Member.telefone);
      setdataEntrada(Member.dataEntrada);
      setdataNascimento(Member.dataNascimento);


    });
  }, [id]);
  useEffect(() => {
            BandService.getBands().then((res) => {
              setBands(res.data);
              
            });
          }, []);

  const updateMember = (e) => {
    e.preventDefault();
    
    
    const Member = {
      id,
      nome,
      nomeArtistico,
      idBanda,
      email,
      telefone,
      dataEntrada,
      dataNascimento,
      cpf,
    }; 
    MemberService.updateMember(Member, id).then(() => {
      navigate("/members");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Adicionar Integrante</h3>
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
                <div className="form-group">
                  <label> Nome Artistico: </label>
                  <input
                    placeholder="Name"
                    name="artisticName"
                    className="form-control"
                    value={nomeArtistico}
                    onChange={(e) => setnomeArtistico(e.target.value)}
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
                    {bands.map(function (object, i) {
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
                  <label> Email: </label>
                  <input
                    placeholder="johnDoe@example.com"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label> Telefone: </label>
                  <input
                    placeholder="(00) 0 0000 0000"
                    type="number"
                    name="telefone"
                    className="form-control"
                    value={telefone}
                    onChange={(e) => settelefone(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label> Data de entrada: </label>
                  <input
                    type="date"
                    placeholder="Name"
                    name="date"
                    className="form-control"
                    value={dataEntrada}
                    onChange={(e) => setdataEntrada(e.target.value)}
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
                    value={dataNascimento}
                    onChange={(e) => setdataNascimento(e.target.value)}
                  />
                </div>

                <button className="btn btn-success" onClick={updateMember}>
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

export default MemberUpdate;
