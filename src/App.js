import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexComponent from './components';

//Create
import { BandCreate, MemberCreate, SponsorCreate,ShowCreate, ProducerCreate}from './components/Create';

//Read & delete
import { BandList, MemberList, ShowList, SponsorList, ProducerList} from "./components/List";

//Update
import { BandUpdate, MemberUpdate, SponsorUpdate, ShowUpdate, ProducerUpdate} from './components/Update';

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
          <Route path="shows">
            <Route path="/shows" element={<ShowList />} />
            <Route path="list" element={<ShowList />} />
            <Route path="add" element={<ShowCreate />} />
            <Route path="update/:id" element={<ShowUpdate />} />
          </Route>
          <Route path="producers">
            <Route path="/producers" element={<ProducerList />} />
            <Route path="list" element={<ProducerList />} />
            <Route path="add" element={<ProducerCreate />} />
            <Route path="update/:id" element={<ProducerUpdate />} />
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