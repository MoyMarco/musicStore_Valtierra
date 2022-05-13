import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 
import './navbar.css';



export default function NavBar() {
    return (
        <AppBar style={{backgroundColor:"#333333"}}>
            <Toolbar>
                <IconButton>
                    <div className="title" style={{color:'#ffffff'}} >
                        MusicStore
                    </div>
                </IconButton>
                <div style={{margin: 'auto'}}>
                    <Button variant='text' className='option' style={{color:'#ffffff'}}>Top Charts</Button>
                    <Button variant='text' className='option' style={{color:'#ffffff'}}>Artistas</Button>
                    <Button variant='text' className='option' style={{color:'#ffffff'}}>Albums</Button>
                </div>
                <IconButton className='option' style={{color:'#ffffff'}} ><FontAwesomeIcon icon={solid('shopping-cart')} /></IconButton>
          </Toolbar>
      </AppBar>
  );
}
