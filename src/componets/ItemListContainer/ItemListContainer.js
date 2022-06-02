import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import ItemList from '../ItemList/ItemList';
import products from '../../utils/productMock';
import overrideStyles from '../../overrideStyles';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({title}) => {
    const { artist } = useParams();
    const [productList, setProducts] = useState([]);

    const getProducts = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        })
    };

    useEffect(() => {
        setProducts([])
        getProducts()
          .then(products => artist ? setProducts(products.filter(product => product.artist === artist)) : setProducts(products))
    }, [artist]);

    return (
        <div>
            <Typography variant="overline" component="div">
                {title} 
            </Typography>
            {Object.keys(productList).length === 0 ? <Typography sx={overrideStyles.loadingMessage}> <CircularProgress /> <br/>Cargando...</Typography> : <ItemList items={productList}/>}      
        </div>
    )
}

export default ItemListContainer;