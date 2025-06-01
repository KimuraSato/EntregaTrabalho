import React, { useState } from 'react';
import MemberService from '../services/MemberService';
import { useNavigate } from 'react-router-dom';

const AddMemberComponent = () => {
    const [nome, setName] = useState('');
    const [idBanda, setidBanda] = useState('');
    // const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const saveMember = (e) => {
        e.preventDefault();
        // Convert idBanda to a number (Long in Java equivalent)
        const memberidBanda = parseInt(idBanda, 10); 
        const Member = { nome, idBanda: memberidBanda }; // Use the converted value
        MemberService.createMember(Member).then(() => {
            navigate('/members');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Member</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Member Name: </label>
                                    <input placeholder="Name" name="name" className="form-control"
                                           value={nome} onChange={(e) => setName(e.target.value)} />
                                </div><br/>
                                <div className="form-group">
                                <select class="form-select" aria-label="Default select example" value={idBanda} onChange={(e) => setidBanda(e.target.value)} >
                                  <option value="-1" selected>sem banda</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
                                </div><br/>
                                
                                <button className="btn btn-success" onClick={saveMember}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMemberComponent;