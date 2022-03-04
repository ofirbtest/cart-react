import {useQuery} from "react-query";
import {fetchProducts} from "../services/fetchProducts";
import {FilterType, ProductItem, PRODUCTS_QUERY_KEY} from "../types";
import {useMemo} from "react";


export const useProducts = (filters: Record<string, string | number | boolean> = {}): { products: ProductItem[], isLoading: boolean, filteredProducts: ProductItem[] } => {
    const {data = [], isLoading} = useQuery<ProductItem[]>(PRODUCTS_QUERY_KEY, fetchProducts);
    /** adding fake rating*/

    let products = useMemo(() => data.map((product) => ({
        ...product,
        rating: Math.floor(Math.random() * 5) + 1
    })), [data])

    const filteredProducts = useMemo(() => products.filter((product) => {
        if (!Object.values(filters).length) {
            return true;
        }

        let isBelow100, isOver200, isAboveRating, isInSearchTerm
        const hasPriceFilter = filters[FilterType.Over200] || filters[FilterType.Below100];
        isBelow100 = filters[FilterType.Below100] ? product.price < 100 : false;
        isOver200 = filters[FilterType.Over200] ? product.price > 200 : false;
        isAboveRating = filters[FilterType.Rating] ? product.rating >= filters[FilterType.Rating] : true
        isInSearchTerm = filters[FilterType.SearchTerm] ? product.title.toLowerCase().includes((filters[FilterType.SearchTerm] as string).toLowerCase()) : true;

        return (!hasPriceFilter || isBelow100 || isOver200) && isAboveRating && isInSearchTerm
    }), [filters, products]);

    return {products, isLoading, filteredProducts}
}
