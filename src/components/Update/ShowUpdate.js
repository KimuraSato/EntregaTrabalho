import React, { useState, useEffect } from "react";
import { ShowService, CountryService } from "../../services";
import { useNavigate, useParams } from "react-router-dom";



const ShowUpdate = () => {
  const [Countries, setCountries] = useState([]);
  const { id } = useParams();
  const [nome, setnome] = useState("");
  const [data, setdata] = useState("");
  const [horarioInicio, sethorarioInicio] = useState("");
  const [horarioFim, sethorarioFim] = useState("");
  const [nacao, setnacao] = useState("");
  const [descricao, setdescricao] = useState("");

  const [bands, setBands] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    ShowService.getShowById(id).then((res) => {
      const Show = res.data;

      setnome(Show.nome);
      setdata(Show.data);
      sethorarioInicio(Show.horarioInicio);
      sethorarioFim(Show.horarioFim);
      setnacao(Show.nacao);
      setdescricao(Show.descricao);

    });
  }, [id]);

  useEffect(() => {
    CountryService.getCountryPairs().then((res) => {
      setCountries(res.data);
    });
  }, []);


  const updateShow = (e) => {
    e.preventDefault();


    const Show = {
      id,
      nome,
      data,
      horarioInicio,
      horarioFim,
      nacao,
      descricao,
    };
    ShowService.updateShow(Show, id).then(() => {
      navigate("/shows");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Atualizar Show</h3>
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
                  <label> Data: </label>
                  <input
                    type="date"
                    placeholder="Name"
                    name="date"
                    className="form-control"
                    value={data}
                    onChange={(e) => setdata(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label> horario de Inicio: </label>
                  <input
                    type="time"
                    placeholder="00:00"
                    name="horarioInicio"
                    className="form-control"
                    value={horarioInicio}
                    onChange={(e) => sethorarioInicio(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <label> horario de fim: </label>
                  <input
                    type="time"
                    placeholder="00:00"
                    name="horarioFim"
                    className="form-control"
                    value={horarioFim}
                    onChange={(e) => sethorarioFim(e.target.value)}
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
                  <label> descricao: </label>
                  <input
                    placeholder="descricao"
                    name="descricao"
                    className="form-control"
                    value={descricao}
                    onChange={(e) => setdescricao(e.target.value)}
                  />
                </div>

                <button className="btn btn-success" onClick={updateShow}>
                  Atualizar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUpdate;
