export type ProductItem = {
    id: string,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: number
}

export const PRODUCTS_QUERY_KEY = 'products'

export enum FilterType {
    Rating = 'Rating',
    SearchTerm = 'SearchTerm',
    Below100 = 'Below100',
    Over200 = 'Over200'
}
