import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css';
import overrideStyles from '../../overrideStyles';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; 

import { collection, getDocs } from 'firebase/firestore';
import db from '../../utils/firebaseConfig'



export default function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [categoriesList, setCategories] = useState([]);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getCategories = async () => {
        const productSnapshot = await getDocs(collection(db, 'productos'))
        const categories = productSnapshot.docs.map(doc => doc.data().artist);
        return categories.filter((category, index, self) => self.indexOf(category) === index);
    };

    useEffect(() => {
        getCategories()
          .then(categories => setCategories(categories))
    }, []);

    return (
        <AppBar sx={overrideStyles.bgGray}>
            <Toolbar>
                <IconButton sx={overrideStyles.logo}>
                        <Link style={overrideStyles.white} to={'/'}>MusicStore</Link>
                </IconButton>
                <div className='center'>
                    <Button 
                    variant='text' 
                    className='option' 
                    sx={overrideStyles.white}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                        Artistas <FontAwesomeIcon style={{marginLeft:'.5em'}} icon={solid('caret-down')} />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        {categoriesList.map((category, index) => <MenuItem key={index} onClick={handleClose}><Link to={`/category/${category}`}>{category}</Link></MenuItem>)}
                    </Menu>
                    <Button variant='text' className='option' sx={overrideStyles.white}><Link className='option' to={'/'}>Álbumes</Link></Button>
                </div>
                <CartWidget/>   
          </Toolbar>
      </AppBar>
  );
}
