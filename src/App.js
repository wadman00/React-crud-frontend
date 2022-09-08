import logo from './logo.svg';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import './App.css';
import ProductList from './Components/Products/ProductsList/ProductList';
import ProductCreateForm from './Components/Products/ProductForm/ProductCreate/ProductFormCreate';

function App() {

  const [user,setUser] = useState({});

  const onLoadUser = (user)=>
  {
    sessionStorage.setItem('user',JSON.stringify(user));
    setUser(user);
    
  }

  const onSignOut= ()=>{
    sessionStorage.clear();
    setUser({});
  }

  return (
    <div>
    <Router>
      <Routes>
      <Route path="/" element={<Login onLoadUser={onLoadUser}/>}></Route>
      <Route path="/Login" element={<Login onLoadUser={onLoadUser}/>}></Route>
      <Route path="/Register" element={<Register/>} />
      <Route path="/ProductList" element={<ProductList user={user} onSignOut={onSignOut}/>} />
      <Route path="/ProductFormCreate" element={<ProductCreateForm/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
