import React, {useContext} from 'react';
import Product from '../Product/Product';
import {Box, Grid} from '@mui/material';
import {useProducts} from "../../hooks";
import {ShopContext} from "../../contexts/shopContext";

const ProductList = () => {
    const {filters} = useContext(ShopContext);
    const {filteredProducts, isLoading} = useProducts(filters);
    if (isLoading) {
        return <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <img alt="loading..." src="https://c.tenor.com/7NX24XoJX0MAAAAC/loading-fast.gif"/>
        </Box>
    }
    return <Grid sx={{pt: 4}} container spacing={5}>
        {filteredProducts.map((product) => (
            <Grid lg={4} item key={product.id}><Product product={product}/></Grid>))}
    </Grid>
};

export default ProductList;
