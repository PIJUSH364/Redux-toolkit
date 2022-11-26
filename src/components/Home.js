import { Box, Stack } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import cartSlice from '../data/cartSlice';
import productList from '../data/productList.json';

function Home() {
  return (
    <Stack direction="row" flexWrap="warp" justifyContent="space-between" p={2}>
      {productList.products.map((product, key) => (
        <Box key={key} width="150px" border="2px solid gray" bgcolor="#fff">
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: '100px' }}
          />
          <h5>{product.name}</h5>
          <button>add to cart</button>
        </Box>
      ))}
    </Stack>
  );
}

export default Home;
