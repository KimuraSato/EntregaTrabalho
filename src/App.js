import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexComponent from './components';

//Create
import { BandCreate, MemberCreate, SponsorCreate}from './components/Create';

//Read & delete
import { BandList, MemberList, SponsorList } from "./components/List";

//Update
import { BandUpdate, MemberUpdate, SponsorUpdate } from './components/Update';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="" element={<IndexComponent />} />

          <Route path="members">
            <Route path="/members" element={<MemberList />} />
            <Route path="list" element={<MemberList />} />
            <Route path="add" element={<MemberCreate />} />
            <Route path="update/:id" element={<MemberUpdate />} />
          </Route>
          <Route path="sponsors">
            <Route path="/sponsors" element={<SponsorList />} />
            <Route path="list" element={<SponsorList />} />
            <Route path="add" element={<SponsorCreate />} />
            <Route path="update/:id" element={<SponsorUpdate />} />
          </Route>
          <Route path="bands">
            <Route path="/bands" element={<BandList />} />
            <Route path="list" element={<BandList />} />
            <Route path="add" element={<BandCreate />} />
            <Route path="update/:id" element={<BandUpdate />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

/*
# Patrocinio
Long id;  
String nome;  
Long idbanda;

*/