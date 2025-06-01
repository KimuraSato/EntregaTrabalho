import React, { useState, useEffect } from "react";
import MemberService from "../services/MemberService";
import { useNavigate, useParams } from "react-router-dom";

const UpdateMemberComponent = () => {
  const { id } = useParams();
  const [nome, setName] = useState("");
  const [idBanda, setidBanda] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    MemberService.getMemberById(id).then((res) => {
      const Member = res.data;
      setName(Member.name);
      setidBanda(Member.idBanda);
    });
  }, [id]);

  const updateMember = (e) => {
    e.preventDefault();
    // Convert idBanda to a number (Long in Java equivalent)
    const memberidBanda = parseInt(idBanda, 10);
    const Member = {id, nome, idBanda: memberidBanda }; // Use the converted value
    console.log(id)
    console.log(Member)
    MemberService.updateMember(Member, id).then(() => {
      navigate("/members");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Member</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Member Name: </label>
                  <input
                    placeholder="Name"
                    name="name"
                    className="form-control"
                    value={nome}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br />
                <div className="form-group">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={idBanda}
                    onChange={(e) => setidBanda(e.target.value)}
                    defaultValue="-1"
                  >
                    <option value="-1">sem banda</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <br />

                <button className="btn btn-success" onClick={updateMember}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMemberComponent;
