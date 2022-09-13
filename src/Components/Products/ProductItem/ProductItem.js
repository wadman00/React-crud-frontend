import react from "react";

const deleteProduct = async (_id, onDeleteProduct) =>{

    const response = await fetch(`${process.env.REACT_APP_SERVER}/products`,{
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({_id: _id})
    });

    

    if(response.status === 200){
        alert("El producto ha sido eliminado");
        onDeleteProduct();
    }
}

const ProductItem = ({ product, row, onDeleteProduct }) => {

    return (        
            <tr>
                <th scope="row">{row}</th>
                <td>{product.nombre}</td>
                <td>{product.precio}</td>
                <td><button className="btn btn-danger" onClick={()=>{deleteProduct(product._id,onDeleteProduct)}}>Eliminar</button></td>
            </tr>  
    );
}

export default ProductItem;