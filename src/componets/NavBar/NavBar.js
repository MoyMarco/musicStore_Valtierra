import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css';
import overrideStyles from '../../overrideStyles';



export default function NavBar() {
    return (
        <AppBar sx={overrideStyles.bgGray}>
            <Toolbar>
                <IconButton sx={overrideStyles.logo} className='logo'>
                        MusicStore
                </IconButton>
                <div className='center'>
                    <Button variant='text' className='option' sx={overrideStyles.white}>Top Charts</Button>
                    <Button variant='text' className='option' sx={overrideStyles.white}>Artistas</Button>
                    <Button variant='text' className='option' sx={overrideStyles.white}>Albums</Button>
                </div>
                <CartWidget/>        
          </Toolbar>
      </AppBar>
  );
}
