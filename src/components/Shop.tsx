import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import Search from "./Search/Search";
import Filters from './Filters/Filters';
import ProductList from "./ProductList/ProductList";
import {ShopContext} from '../contexts/shopContext';
import Cart from './Cart/Cart';
import {getFromStorage} from "../services/local-storage.service";

const Shop = () => {
    const [filters, setFilters] = useState({});
    const [cartItems, setCartItems] = useState({});

    useEffect(() => {
        const savedCartItems = getFromStorage();
        if (savedCartItems) {
            console.log('read');
            setCartItems(JSON.parse(savedCartItems));
        }
    }, [])

    return (
        <ShopContext.Provider value={{filters, cartItems, setFilters, setCartItems}}>
            <Box sx={{p: 4}}>
                <h1>Our Awesome Products</h1>
                <Grid container spacing={2}>
                    <Grid item md={2}>
                        <Filters/>
                    </Grid>
                    <Grid item xs={7}>
                        <Search/>
                        <ProductList/>
                    </Grid>
                    <Grid item xs={3}>
                        <Cart/>
                    </Grid>
                </Grid>
            </Box>
        </ShopContext.Provider>
    );
};

export default Shop;
