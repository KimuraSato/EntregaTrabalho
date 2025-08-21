import React, { useState, useEffect } from 'react';
import { MemberService,BandService } from '../../services';
import { Link } from 'react-router-dom';



const MemberList = () => {
    const [bands, setBands] = useState([]);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        MemberService.getMembers().then((res) => {
            setMembers(res.data);
        });
    }, []);

    useEffect(() => {
        BandService.getBands().then((res) => {
          setBands(res.data);
          
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
                <th>Nome Artistico</th>
                <th>Banda</th>
                <th>CPF</th>

                <th>Email</th>
                <th>Telefone</th>
                <th>Data de entrada na banda</th>
                <th>Data de nascimento</th>

                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.nome}</td>
                  <td>{member.nomeArtistico}</td>
                  <td>
                    {bands.map(function (object, i) {
                      if (object.id == member.idBanda) {
                        return object.nome;
                      }
                    })}
                    ({member.idBanda})
                  </td>
                  <td>{member.cpf}</td>
                  <td>{member.email}</td>
                  <td>{member.telefone}</td>
                  <td>{member.dataEntrada}</td>
                  <td>{member.dataNascimento}</td>

                  <td>
                    <Link to={`update/${member.id}`} className="btn btn-info">
                      Atualizar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        MemberService.deleteMember(member, member.id).then(() =>
                          setMembers(members.filter((p) => p.id !== member.id))
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

export default MemberList;