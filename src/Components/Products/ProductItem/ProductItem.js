import react from "react";

const ProductItem = ({ product, row }) => {

    return (        
            <tr>
                <th scope="row">{row}</th>
                <td>{product.nombre}</td>
                <td>{product.precio}</td>
            </tr>  
    );
}

export default ProductItem;