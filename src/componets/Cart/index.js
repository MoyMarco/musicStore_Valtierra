import { Container, Typography, Button, Paper, Grid} from '@mui/material';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import overrideStyles from '../../overrideStyles';
import './style.css'

const Cart = () => {
    const { cartListItems, removeItem, clearCart } = useContext(CartContext)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MXN'
      })

    return (
        <Container>
            {
                cartListItems.length === 0  
                ? 
                    <Container sx={overrideStyles.loadingMessage}>
                        <Typography>Carrito de compras vacío</Typography>
                        <br/>
                        <Button><Link to={'/'} style={overrideStyles.blue}>Regresar a ver álbumes</Link></Button>
                    </Container>
                : 
                    <Paper sx={overrideStyles.itemCart}>
                        <Grid container>
                            <Grid item>
                                <Button onClick={() => clearCart()}>Limpiar carrito</Button>
                            </Grid>
                            <Grid item >
                                <Typography variant="h4" color='text.secondary' component="div" sx={overrideStyles.rightControl}>
                                   Total: { formatter.format((cartListItems.map(item => item.quantity * item.price)).reduce((previousValue, currentValue) => previousValue + currentValue)) }
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
            }
            {cartListItems.map(item => {
                return(
                <Paper sx={overrideStyles.itemCart} key={item.id}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Container>
                               <Link to={`/item/${item.id}`}><img className='cartImage' alt="complex" src={`/images/${item.pictureUrl}`} /></Link>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column">
                                <Grid item xs>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.title}
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom color="text.secondary">
                                        {item.artist}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={overrideStyles.centerControlQuantity} >
                                        Cantidad: {item.quantity}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                            <Button onClick={() => removeItem(item.id)}>Borrar artículo</Button>
                                <Typography variant="h5" color='text.secondary' sx={overrideStyles.centerControlPrice} component="div">
                                   {formatter.format(item.price * item.quantity)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                )    
            })}
        </Container>
    )
}

export default Cart