import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import ItemList from '../ItemList/ItemList';
import overrideStyles from '../../overrideStyles';
import { CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import db from '../../utils/firebaseConfig'

const ItemListContainer = ({title}) => {
    const { artist } = useParams();
    const [productList, setProducts] = useState([]);

    const getProducts = async () => {
        const productSnapshot = await getDocs(collection(db, 'productos'))
        return productSnapshot.docs.map(doc => {
            const product = doc.data();
            product.id = doc.id;
            return product;
        }
        );
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