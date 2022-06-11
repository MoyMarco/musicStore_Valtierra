import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 
import overrideStyles from '../../overrideStyles';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext';
import { Badge } from '@mui/material';

const CartWidget = () => {

    const { cartListItems } = useContext(CartContext)

    return(
        <IconButton sx={ overrideStyles.cartIcon } className='option'>
            { !cartListItems.length ? <Link style={overrideStyles.white} to={'/cart'}><FontAwesomeIcon icon={solid('shopping-cart')} /></Link> : <Badge badgeContent={(cartListItems.map(item => item.quantity)).reduce((previousValue, currentValue) => previousValue + currentValue)} color="primary"><Link style={overrideStyles.white} to={'/cart'}><FontAwesomeIcon icon={solid('shopping-cart')} /></Link></Badge>}
        </IconButton>
    )
}

export default CartWidget;