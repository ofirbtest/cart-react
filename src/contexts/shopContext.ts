import React from "react";

type ShopContextType = {
    cartItems: Record<string, number>;
    filters: Record<string, boolean | string | number>;
    setFilters: (filters: Record<string, boolean | string | number>) => void;
    setCartItems: (items: Record<string, number>) => void;
}

// @ts-ignore
export const ShopContext = React.createContext<ShopContextType>(null);
