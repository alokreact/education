import { useSelector } from "react-redux";
import { Carticon,Badgeicon } from '../icon';
import { AppBar, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, NavLink } from "react-router-dom";

const Header = styled(AppBar)`
background:#000;
`
const Tabs = styled(Typography)`
    color:#fff;
    font-size:16px;
`
const Navbar = () => {
    const { amount,cartItems } = useSelector((store) => store.cart);

    console.log('amount',amount)

    const showCart =()=>{

        console.log('>>>')
    }
    
    return (
        <Header position="static">
            <Toolbar>
                <Tabs variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Tabs>

                 <Carticon  /> 

                <Badgeicon />

                {/* <Link  to="/cart"> */}
                    <p className="total-amount">{cartItems?cartItems.length:0}</p>
                    {/* </Link> */}
            </Toolbar>
        </Header>
    )
}

export default Navbar;