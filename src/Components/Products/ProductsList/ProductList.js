import  { useEffect, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.css";
import  { useNavigate } from "react-router";

const ProductList = (props) => {

    const [products,setProducts] = useState([]);
    const [isDeleted,setDeleted] = useState(false);

    const { user, onSignOut } = props; 

    const navigate = useNavigate();
    
   
    
    useEffect( async ()=>{
        
        
        const products = await getProducts();

        setProducts(products);
        
        if (isDeleted) {
            setDeleted(false);
            
        }

    },[isDeleted]);

    const onDeleteProduct = ()=>{
        setDeleted(true);
    }

    const getProducts = async ()=>{

        const response = await fetch(`${process.env.REACT_APP_SERVER}/products`);
        
        
        
        const products = await response.json();
    
        return products;
        

    }

    const goToCreateProducts = ()=>{
        navigate('/ProductFormCreate');
    }

   
    return (
        <div>

            <NavBar fullName={user.fullName} onSignOut={onSignOut} selectedTab="ProductList" />
            <h1>Lista de productos</h1>

            <div className="container">
                <br />
                <br />
                <button type="button" className="btn btn-success btn-lg" onClick={goToCreateProducts} >Agregar Producto</button>
                <br />
                <br />
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>

                        </tr>
                    </thead>
                    <tbody>
                        
                        {products.map((product,row)=>{
                            return <ProductItem product={product} key =  {row+1} row={row+1} onDeleteProduct={onDeleteProduct} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default ProductList;