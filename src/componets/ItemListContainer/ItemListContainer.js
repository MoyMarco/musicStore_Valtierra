import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import products from '../../utils/productMock';

const ItemListContainer = ({title}) => {
const [productList, setProducts] = useState([]);

    const getProducts = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
    };

    useEffect(() => {
        getProducts()
          .then(products => setProducts(products));
    }, []);

    return (
        <div>
            <Typography variant="overline" component="div">
                {title} 
            </Typography>
            <ItemList items={productList}/>
            {/* <ItemCount stock={10}/> */}
        </div>
    )
}

export default ItemListContainer;