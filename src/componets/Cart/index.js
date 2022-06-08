import { Container, Typography, Button, Card} from '@mui/material';
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext';
import overrideStyles from '../../overrideStyles';
import './style.css'

const Cart = () => {
    const { cartListItems, removeItem, clearCart } = useContext(CartContext)
    return (
        <Container>
            {cartListItems.length === 0 ? <Typography sx={overrideStyles.loadingMessage}>Carrito de compras vacío</Typography> : <Button onClick={() => clearCart()}>Limpiar carrito</Button>}
            {cartListItems.map(item => {
                return(
                    <Card sx={{margin:'3em'}}>
                        <img className='cartImage' src={`/images/${item.pictureUrl}`} alt={item.title}/>
                        <Typography sx={overrideStyles.titleCardSize}>{item.title}</Typography>
                        <Typography sx={overrideStyles.subTitleCardSize}>{item.artist}</Typography>
                        <Typography sx={overrideStyles.subTitleCardSize}>{item.quantity}</Typography>
                        <Button onClick={() => removeItem(item.id)}>Borrar artículo</Button>
                    </Card>
                )    
            })}
        </Container>
    )
}

export default Cart