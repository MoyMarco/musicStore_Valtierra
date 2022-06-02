import { useState, useEffect } from 'react'
import products from '../../utils/productMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import overrideStyles from '../../overrideStyles';
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              const product = products.find(product => product.id == id);
              resolve(product);
            }, 2000);
        })
    };

    useEffect(() => {
        getItem()
          .then(item => setProduct(item));
    }, []);

  return (
    <>
      {Object.keys(product).length === 0 ? <Typography sx={overrideStyles.loadingMessage}> <CircularProgress /> <br/>Cargando...</Typography> : <ItemDetail item= {product}/>}
    </>
  )
}

export default ItemDetailContainer;