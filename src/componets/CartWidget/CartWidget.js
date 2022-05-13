import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 
import overrideStyles from '../../overrideStyles';

const CartWidget = () => {
    return(
        <IconButton sx={ overrideStyles.cartIcon } className='option'>
            <FontAwesomeIcon icon={solid('shopping-cart')} />
        </IconButton>
    )
}

export default CartWidget;