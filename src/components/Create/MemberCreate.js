import React, { useState , useEffect} from "react";
import { MemberService, BandService } from "../../services";
import { useNavigate } from "react-router-dom";



// <td>{member.id}</td>
//                   <td>{member.nome}</td>
//                   <td>{member.nomeArtistico}</td>
//                   <td>
//                     {Bands.map(function (object, i) {
//                       if (object.id == member.idBanda) {
//                         return object.nome;
//                       }
//                     })}
//                     ({member.idBanda})
//                   </td>
//                   <td>{member.cpf}</td>
//                   <td>{member.email}</td>
//                   <td>{member.telefone}</td>
//                   <td>{member.dataEntrada}</td>
//                   <td>{member.dataNascimento}</td>

const MemberCreate = () => {
  const [nome, setnome] = useState("");
  const [nomeArtistico, setnomeArtistico] = useState("");
  const [idBanda, setidBanda] = useState(0);
  const [cpf, setcpf] = useState(0);
  const [email, setEmail] = useState("");
  const [telefone, settelefone] = useState(0);
  const [dataEntrada, setdataEntrada] = useState("");
  const [dataNascimento, setdataNascimento] = useState("");

  const [Bands, setBands] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
          BandService.getBands().then((res) => {
            setBands(res.data);
            
          });
        }, []);

      
  const saveMember = (e) => {
    e.preventDefault();
    // Convert idBanda to a number (Long in Java equivalent)
    // const memberidBanda = parseInt(idBanda, 10);
    const Member = {
      nome,
      nomeArtistico,
      idBanda,
      email,
      telefone,
      dataEntrada,
      dataNascimento,
      cpf,
    }; // Use the converted value
    // alert(nome+"\n"+
    //   nomeArtistico+"\n"+
    //   idBanda+"\n"+
    //   email+"\n"+
    //   telefone+"\n"+
    //   dataEntrada+"\n"+
    //   dataNascimento+"\n"+
    //   cpf);
    MemberService.createMember(Member).then(() => {
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
                  <label> Data de Nascimento: </label>
                  <input
                    type="date"
                    placeholder="Name"
                    name="date"
                    className="form-control"
                    value={dataNascimento}
                    onChange={(e) => setdataNascimento(e.target.value)}
                  />
                </div>

                <button className="btn btn-success" onClick={saveMember}>
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

export default MemberCreate;
