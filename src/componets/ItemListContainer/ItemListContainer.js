
import Typography from '@mui/material/Typography';

const ItemListContainer = ({title}) => {
    return (
        <div>
            <Typography variant="overline" component="div" >
                {title} 
            </Typography>
        </div>
    )
}

export default ItemListContainer;