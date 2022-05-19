
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({title}) => {
    return (
        <div>
            <Typography variant="overline" component="div">
                {title} 
            </Typography>
                <ItemCount stock={10}/>
        </div>
    )
}

export default ItemListContainer;