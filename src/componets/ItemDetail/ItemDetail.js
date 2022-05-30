import './itemdetail.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import overrideStyles from '../../overrideStyles';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
  const {id, title, description, artist, price, pictureUrl, pictureArtistUrl, stock} = item;
  return (
    <div>
      <img className='bgImage' src={`./images/${pictureArtistUrl}`} alt={title}/>
      <Grid container spacing={2} align='center' className='verticalCenter'>
        <Grid item sm={12} md={6} lg={6} xl={6}>
          <div className='albumPosition'>
            <Card sx={overrideStyles.cardDetailItem}>
              <CardContent>
                <div>
                  <img style={overrideStyles.itemDetailImage} src={`./images/${pictureUrl}`} alt={title}/>
                </div>
              </CardContent>
            </Card>
          </div>
        </Grid>
        <Grid item sm={12} md={6} lg={6} xl={6}>
          <div className='infoPosition'>
            <Card sx={overrideStyles.cardDetailInformation}>
              <CardContent>
                <div>
                  <Typography variant="overline" sx={ overrideStyles.blue }>Detalle del album</Typography>
                  <Typography sx={overrideStyles.titleCardSize}>{title}</Typography>
                  <Typography sx={overrideStyles.subTitleCardSize}>{artist}</Typography>
                  <Typography sx={overrideStyles.textCardSize}>{description}</Typography>
                  <div style={overrideStyles.itemCountPosition}>
                    <Typography variant="overline" sx={ overrideStyles.blue }>costo</Typography>
                    <Typography sx={overrideStyles.titleCardSize}>$ {price}</Typography>
                    <ItemCount stock={stock} />
                  </div> 
                </div>
              </CardContent>
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ItemDetail