import Item from "../Item/Item";
import { Grid } from "@mui/material";

const ItemList = ({items}) => {
  return (
    <>
      <Grid container spacing = {2}>
        {
          items.map(product => {
            return(
              <Grid item sm={12} md={6} lg={4} xl={3} key = {product.id}>
                <Item item={product}/>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}

export default ItemList