import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListComponent from './components/ProductListComponent';
import AddProductComponent from './components/AddMemberComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import IndexComponent from './components/index'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path='' element={<IndexComponent/>} />

          <Route path='members'>
            <Route path="/members" element={<ProductListComponent />} />
            <Route path="list" element={<ProductListComponent />} />
            <Route path="add" element={<AddProductComponent />} />
            <Route
              path="update/:id"
              element={<UpdateProductComponent />}
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;