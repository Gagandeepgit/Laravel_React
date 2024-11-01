import './App.css';
import Header from './Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected';
import ProductList from './ProductList'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Protected Cpm = {ProductList}/>}/>
          <Route path="/add" element={<Protected Cpm = {AddProduct}/>}/>
          <Route path="/update" element={<Protected Cpm = {UpdateProduct}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
