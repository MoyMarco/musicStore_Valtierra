import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import overrideStyles from '../../overrideStyles';
import { Link } from 'react-router-dom';


const Item = ({item}) => {
  const {id, title, artist, price, pictureUrl} = item;
  return (
    <Card sx={overrideStyles.cardItem}>
      <CardContent>
          <div>
            <img style={overrideStyles.itemImage} src={`/images/${pictureUrl}`} alt={title}/>
            <div style={overrideStyles.itemImageDetails}>
              <Typography sx={overrideStyles.titleCardSize}>{title}</Typography>
              <Typography sx={overrideStyles.subTitleCardSize}>{artist}</Typography>
              <Typography sx={overrideStyles.titleCardSize}>$ {price}</Typography>
              <Button><Link to={`/item/${id}`} style={overrideStyles.blue}>Ver Detalle</Link></Button>
            </div>
          </div>
      </CardContent>
    </Card>
  )
}

export default Item