import React, { useState, useEffect } from 'react';
import MemberService from '../services/MemberService';
import { Link } from 'react-router-dom';

const placeholderbandList = ["",
  "StarShade",
  "Covercats",
  "Stumbling Grace",
  "Night Drive",
]; 

const MemberListComponent = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        MemberService.getMembers().then((res) => {
            setMembers(res.data);
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
                <th>banda</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.nome}</td>
                  <td>
                    {member.idBanda} ({placeholderbandList[member.idBanda]})
                  </td>
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

export default MemberListComponent;