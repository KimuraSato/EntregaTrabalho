import React, { useState, useEffect } from 'react';
import MemberService from '../services/MemberService';
import { Link } from 'react-router-dom';

const MemberListComponent = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        MemberService.getMembers().then((res) => {
            setMembers(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Member list</h2>
            <div className="row">
                <Link to="add" className="btn btn-primary">Add Member</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Member id</th>
                        <th>Member Name</th>
                        <th>Member band id</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    

                    {members.map(member => (
                        <tr key={member.id}>
                            <td>{member.id}</td>
                            <td>{member.nome}</td>
                            <td>{member.idBanda}</td>
                            <td>
                                <Link to={`update/${member.id}`} className="btn btn-info">Update</Link>
                                <button className="btn btn-danger" onClick={() => MemberService.deleteMember(member,member.id).then(() => setMembers(members.filter(p => p.id !== member.id)))}>Delete</button>
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