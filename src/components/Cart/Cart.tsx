import React, {useContext, useMemo} from 'react';
import {ShopContext} from "../../contexts/shopContext";
import {useProducts} from "../../hooks";
import {ProductItem} from "../../types";
import {Box, Card, CardContent, Chip, IconButton, Typography} from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const PRODUCT_ID = 0;
const QUANTITY = 1;

const Cart = () => {
    const {cartItems, setCartItems} = useContext(ShopContext);
    const {products} = useProducts();

    const productsMap = products.reduce<Record<string, ProductItem>>((acc, product) => {
        acc[`${product.id}`] = product;

        return acc;
    }, {});

    const cartItemsArr = useMemo(() => Object.entries(cartItems), [cartItems]);

    if (!cartItemsArr.length) {
        return <Typography variant="body1">Add something to your cart...</Typography>
    }

    const handleRemoveFromCart = (productId: string) => {
        const nextCart = {...cartItems};
        delete nextCart[productId];
        setCartItems(nextCart)
    }

    return (
        <Box sx={{pl: 4}}>
            <Typography sx={{pb: 4}} variant="subtitle1">Shopping Cart</Typography>
            {cartItemsArr.map((cartItem, index) => {
                const product = productsMap[cartItem[PRODUCT_ID]];

                return (<Card sx={{mb: 1}} key={index}>
                    <CardContent sx={{position: 'relative'}}>
                        <IconButton sx={{position: 'absolute', top: '8px', right: '8px'}}
                                    onClick={() => handleRemoveFromCart(product.id)}>
                            <DeleteOutlineIcon color="error"
                            />
                        </IconButton>
                        <img alt={product.title} width={50} height={50} src={product.image}/>
                        <Typography variant="body2">{product.title}</Typography>
                        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Chip label={`x${cartItem[QUANTITY]}`}/>
                            <Typography variant="subtitle1">{cartItem[QUANTITY] * product.price}$</Typography>
                        </Box>
                    </CardContent>
                </Card>)
            })}
        </Box>
    );
};

export default Cart;

