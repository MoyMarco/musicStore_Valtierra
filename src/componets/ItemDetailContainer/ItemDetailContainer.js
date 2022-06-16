import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import overrideStyles from '../../overrideStyles';
import CircularProgress from '@mui/material/CircularProgress';

import { doc, getDoc } from 'firebase/firestore';
import db from '../../utils/firebaseConfig'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

    const getItem = async () => {
      let item;
      const itemSnapshot = await getDoc(doc(db, 'productos', id));
      item = itemSnapshot.data();
      item.id = itemSnapshot.id;
      return item;
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