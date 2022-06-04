import { Typography } from '@mui/material'
import React from 'react'
import overrideStyles from '../../overrideStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 

const NotFound = () => {
  return (
    <div>
        <Typography sx={overrideStyles.notFoundMessage}><FontAwesomeIcon style={{marginLeft:'.5em'}} icon={solid('heart-broken')} /><br/>Página no disponible :(</Typography>
    </div>
  )
}

export default NotFound