import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MemberListComponent from './components/MemberListComponent';
import AddMemberComponent from './components/AddMemberComponent';
import UpdateMemberComponent from './components/UpdateMemberComponent';
import IndexComponent from './components/index'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='' element={<IndexComponent/>} />

          <Route path='members'>
            <Route path="/members" element={<MemberListComponent />} />
            <Route path="list" element={<MemberListComponent />} />
            <Route path="add" element={<AddMemberComponent />} />
            <Route
              path="update/:id"
              element={<UpdateMemberComponent />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;