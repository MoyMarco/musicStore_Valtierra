import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import overrideStyles from '../../overrideStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 

const ItemCount = ({ stock, setShowButton }) => {
    const [count, setCount] = useState(0);

    const countAdd = () => {
        if (count < stock) setCount(count + 1)
    };

    const countSubstract = () => {
        if (count > 0) setCount(count - 1)
    }

    return(
        <Card sx={overrideStyles.cardCount}>
            <CardContent>
                <Typography sx={overrideStyles.subTitleCardSize} component="div">
                    Cantidad
                </Typography>
                <Button onClick={() => countAdd()} disabled={count === stock}><FontAwesomeIcon icon={solid('caret-up')}/></Button>
                <Typography variant="h6">
                        {count}
                </Typography>
                <Button onClick={() => countSubstract()} disabled={count === 0}><FontAwesomeIcon icon={solid('caret-down')}/></Button>
            </CardContent>
            <CardActions>
                <Button sx={{margin: 'auto'}} disabled={count === 0} onClick={() => setShowButton(true)}>Agragar al carrito</Button>
            </CardActions>
        </Card>
    )
}

export default ItemCount;