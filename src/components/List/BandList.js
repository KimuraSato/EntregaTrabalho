import React, { useState, useEffect } from "react";
import { BandService , CountryService } from "../../services";
import { Link } from "react-router-dom";



const BandList = () => {
  const [bands, setBands] = useState([]);
  const [countries, setCountries] = useState([]);
  

    
    
    
    

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



  // useEffect(() => {
  //   CountryService.getCountries().then((res) => {
  //     // res.data.forEach((element) => {
  //     //   console.log(element.a," ",element.b)
  //     //   countries[element.a]= [element.b];

  //     // });
  //     SetCountries(res.data)
      
      
  //   });

    
  // }, []);


  

// console.log(CountryFinder("ERYA",countries));

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
              <th>Genero Musical</th>
              <th>Nacao de origem</th>
              <th>Data de criação</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {bands.map((band) => (
              <tr key={band.id}>
                <td>{band.id}</td>
                <td>{band.nome}</td>
                <td>
                  {countries.map(function (object, i) {
                    if (object.a == band.nacao) {
                      return object.b;
                    }
                  })}
                </td>
                <th>{band.email}</th>

                <td>{band.dataNascimento}</td>

                <td>
                  {band.verificado ? (
                    <input type="checkbox" checked disabled />
                  ) : (
                    <input type="checkbox" disabled />
                  )}
                </td>

                <td>
                  <Link to={`update/${band.id}`} className="btn btn-info">
                    Atualizar
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      BandService.deleteBand(band, band.id).then(() =>
                        setBands(bands.filter((p) => p.id !== band.id))
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
