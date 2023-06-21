import React from "react";
import { ChevronDown, ChevronUp } from '../icon'
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useDispatch } from "react-redux";
import { reomveItem, increaseItem } from "../features/cart/cartSlice";

const CartItem = ({ id, name, imageUrl, price, qty }) => {

    const dispatch = useDispatch();
    console.log('cartItems', qty)

    return(
        <React.Fragment>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {name}
                </TableCell>
                <TableCell align="right">{price}</TableCell>

                <TableCell align="right">
                    <Button variant="contained" > <ChevronDown /> {qty} <ChevronUp onClick={() => dispatch(increaseItem({ id }))} /></Button>
                </TableCell>
                <TableCell align="right">
                    <Button variant="contained" onClick={() => dispatch(reomveItem(id))}> Remove</Button>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
}
export default CartItem;