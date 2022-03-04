import {ProductItem} from "../types"


export const fetchProducts = (): Promise<ProductItem[]> => {
    return window.fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
}
