import { useState, useEffect } from 'react'
import {productDetail} from '../../utils/productMock'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

    const getItem = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productDetail)
            }, 2000);
        })
    };

    useEffect(() => {
        getItem()
          .then(item => setProduct(item));
    }, []);

  return (
    <ItemDetail item= {product}/>
  )
}

export default ItemDetailContainer