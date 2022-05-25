import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import overrideStyles from '../../overrideStyles';


const Item = ({item}) => {
  const {title, description, price, pictureUrl} = item
  console.log(`../../images/${pictureUrl}`)
  return (
    <Card sx={overrideStyles.cardItem}>
      <CardContent>
          <div>
            <img style={overrideStyles.itemImage} src={`./images/${pictureUrl}`} alt={title}/>
            <div style={overrideStyles.itemImageDetails}>
              <Typography sx={overrideStyles.titleCardSize}>{title}</Typography>
              <Typography sx={overrideStyles.subTitleCardSize}>{description}</Typography>
              <Typography sx={overrideStyles.titleCardSize}>$ {price}</Typography>
              <Button>Ver Detalle</Button>
            </div>
          </div>
      </CardContent>
    </Card>
  )
}

export default Item