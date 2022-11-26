import { Box, Stack } from '@mui/material';
import React from 'react';
import productList from '../data/productList.json';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
function Cart() {
  return (
    <>
      <h2>Items in cart</h2>
      <Stack flexWrap="warp" justifyContent="space-between" p={2}>
        {productList.products.map((product, key) => (
          <Box key={key} width="150px" border="2px solid gray" bgcolor="#fff">
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: '100px' }}
            />
            <h5>{product.name}</h5>
            <button>
              <DeleteIcon />
              Remove item
            </button>
          </Box>
        ))}
      </Stack>
      <div>
        <button>Checkout</button>
      </div>
      {/* this is shown when no item in our cart */}
      <Box m="5rem" bgcolor="tomato">
        <p>
          Your cart is empty <ShoppingCartIcon />
        </p>
        <p>You have not add any item in your cart</p>
      </Box>
    </>
  );
}

export default Cart;
