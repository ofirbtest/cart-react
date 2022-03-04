const LOCAL_STORAGE_KEY = 'shop_cart_items';

export const getFromStorage = () => {
    return localStorage?.getItem(LOCAL_STORAGE_KEY);
}

export const writeToStorage = ({cartItems}: { cartItems: any }) => {
    localStorage?.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
}
