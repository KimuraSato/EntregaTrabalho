import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexComponent from './components';

//Create
import { MemberCreate }from './components/Create';

//Read & delete
import { MemberList } from './components/List';

//Update
import { MemberUpdate } from './components/Update';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='' element={<IndexComponent/>} />

          <Route path='members'>
            <Route path="/members" element={<MemberList />} />
            <Route path="list" element={<MemberList />} />
            <Route path="add" element={<MemberCreate />} />
            <Route
              path="update/:id"
              element={<MemberUpdate />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;