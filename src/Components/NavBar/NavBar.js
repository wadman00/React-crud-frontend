import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const NavBar = ({fullName, onSignOut, selectedTab}) => {


    const navigate = useNavigate(); 
    
    return (
        <header className="header">
        
        <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        
        <Link to="/ProductList" className="navbar-brand">Supermercados Hermanos</Link>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav mr-auto">
        
        {
          selectedTab==="ProductList" ?  
          <li className="nav-item active"><Link to="/ProductList" className="nav-link">Productos</Link></li>
          :<li className="nav-item"><Link to="/ProductList" className="nav-link">Productos</Link></li>
        }

        {
          selectedTab==="ShoppingList" ?  
          <li><Link to="/ShopingList" className="nav-link active">Listas de Compras</Link></li>
          : <li><Link to="/ShopingList" className="nav-link">Listas de Compras</Link></li>
        }

        {
          selectedTab==="prueba" ?  
          <li><Link to="/ShopingList" className="nav-link active">Prueba</Link></li>
          : <li><Link to="/ShopingList" className="nav-link">Prueba</Link></li>
        }
        
        </ul>

        <ul className="navbar-nav">
        <li className="nav-item"><p className="nav-link" href="#">Hola {fullName}</p></li>
        
        <li className="nav-item"> <button type="button" id="signout" className="btn btn-danger" onClick={()=>{
            
            navigate.push("/Login")
            onSignOut();
        
        }}>Sign out</button></li>
        </ul>

        </div>  
      </nav>
      </div>
        </header>
       
      
    );
}


export default NavBar;