import { useSelector } from "react-redux";
import React from "react";
import CartItem from "./cartItem";
import { Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import Grid from '@mui/material/Grid';

const Cartcontainer = () => {

  const { amount, cartItems, total } = useSelector((store) => store.cart);

  console.log('cartItems',cartItems)
  const dispatch = useDispatch();

  
  if (amount < 1) {

    return (
      <div>
        <h1>Your Bag</h1>
        <h4>is Empty</h4>
      </div>
    );
  }
  return (
    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <div className='grid-elements'>xs=6 md=8</div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div className='grid-elements'>xs=6 md=4</div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div className='grid-elements'>xs=6 md=4</div>
        </Grid>
        <Grid item xs={6} md={8}>
          <div className='grid-elements'>xs=6 md=8</div>
        </Grid>
      </Grid>
    </Box>
   
    <Box
      sx={{
        width: 600,
        height: 600,
        
      }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name (100g serving)</TableCell>
              <TableCell align="right">Price</TableCell>
               <TableCell align="right">Qty</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              cartItems.map((item) => {
                return (
                  <CartItem key={item.id} {...item} />

                )
              })

            }
          </TableBody>
        </Table>
      </TableContainer>

      <Button variant="contained" onClick={()=>dispatch(clearCart())}>Clear CartItem</Button>
    </Box>
    </React.Fragment>
  )
}

export default Cartcontainer;