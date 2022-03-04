import React, {useContext} from 'react';
import {ProductItem} from '../../types';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    FormControl,
    Select,
    InputLabel,
    MenuItem
} from "@mui/material";
import {ShopContext} from "../../contexts/shopContext";
import {writeToStorage} from "../../services/local-storage.service";

type Props = {
    product: ProductItem
}
const trimTextToLines = (lines: number) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: `${lines}`,
})

const Product = ({product}: Props) => {
    const {setCartItems, cartItems} = useContext(ShopContext);

    const handleChange = (productId: string, value: string | null) => {
        let nextCart;
        if (value === '0') {
            nextCart = {...cartItems};
            delete nextCart[productId];
            setCartItems(nextCart);
        } else {
            nextCart = {...cartItems, [productId]: Number(value)}
            setCartItems(nextCart);
        }
        writeToStorage({cartItems: cartItems});
    }

    return (
        <Card sx={{maxWidth: '450px'}}>
            <CardMedia
                component="img"
                height={330}
                image={product.image}
                alt={product.description}
            />
            <CardContent>
                <Rating value={product.rating} readOnly/>
                <Typography aria-label={product.title} sx={trimTextToLines(1)}>{product.title}</Typography>
                <Typography aria-label={product.description} sx={trimTextToLines(2)} variant="body2"
                            color="text.secondary">{product.description}</Typography>
                <Typography sx={{pt: 2}} variant="body1" color="text.secondary">{product.price}$</Typography>
                <FormControl sx={{m: 1, minWidth: 120}}>
                    <InputLabel>Quantity</InputLabel>
                    <Select
                        defaultValue="0"
                        label="Quantity"
                        onChange={event => handleChange(`${product.id}`, (event.target as HTMLInputElement).value)}
                    >
                        <MenuItem value="0">
                            <em>None</em>
                        </MenuItem>
                        {[1, 2, 3, 4, 5].map(value => <MenuItem key={value} value={value}>{value}</MenuItem>)}
                    </Select>
                </FormControl>
            </CardContent>
        </Card>
    );
};

export default Product;
