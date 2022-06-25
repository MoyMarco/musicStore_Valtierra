import { 
    Container, 
    Typography, 
    Button, 
    Paper, 
    Grid, 
    TextField, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText,
    DialogTitle
} from '@mui/material';
import { useContext, useState } from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore'
import db from '../../utils/firebaseConfig'
import CartContext from '../../contexts/CartContext';
import overrideStyles from '../../overrideStyles';
import './style.css';

const Cart = () => {
    const { cartListItems, removeItem, clearCart } = useContext(CartContext)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'MXN'
      })

    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState({name: '', phone: '', email: ''})
    const [order, setOrder] = useState({ 
        buyer: {}, 
        items: cartListItems.map(item => ({ id: item.id, title: item.title, price: item.price })), 
        total: cartListItems.map(item => item.quantity * item.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0), 
        date: moment().format('DD-MM-YYYY') })
    const [success, setSuccess] = useState(undefined);

    const handleClickOpen = () => setOpen(true);
  
    const handleClose = () => setOpen(false);

    const handleChange = (e) => setFormValues({ ...formValues, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValues})
        saveOrder({...order, buyer: formValues})
    }

    const saveOrder = async order => {
        console.log(order)
        const orderDoc = await addDoc(collection(db, 'ordenes'), order);
        setSuccess(orderDoc.id)
    }

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
                                <Button variant='contained' onClick={() => handleClickOpen()}>Culminar compra</Button>
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
            <Dialog open={open} onClose={handleClose}>
                { success ? (
                    <>
                    <DialogTitle>Compra terminada</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Tu número de orden es: {success}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' onClick={handleClose}>Aceptar</Button>
                    </DialogActions>
                    </>
                ) : (
                    <>
                    <DialogTitle>Culminar compra</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Por favor, registra tus datos para poder generar tu orden.
                        </DialogContentText>
                        <TextField
                        margin="normal"
                        name="name"
                        label="Nombre"
                        type="name"
                        fullWidth
                        variant="outlined"
                        onChange={handleChange}
                        />
                         <TextField
                        margin="dense"
                        name="phone"
                        label="Telefono"
                        type="phone"
                        fullWidth
                        variant="outlined"
                        onChange={handleChange}
                        />
                         <TextField
                        margin="dense"
                        name="email"
                        label="correo electrónico"
                        type="email"
                        fullWidth
                        variant="outlined"
                        onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button variant='contained' onClick={(e) => { 
                            handleSubmit(e)
                            clearCart()
                        }}>Aceptar</Button>
                    </DialogActions>
                    </>
                )}
                </Dialog>
        </Container>
    )
}

export default Cart