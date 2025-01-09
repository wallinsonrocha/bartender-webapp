import { create } from 'zustand'
import { DrinkProduct } from '../../../public/data/drinks'


interface Cart {
    products: DrinkProduct[];
}

interface StoreState {
    cart: Cart;
    addProduct: (product: DrinkProduct) => void;
    removeProduct: (id: number) => void;
}

const useStore = create<StoreState>((set) => ({
    cart: {
        products: [],
    },
    addProduct: (product) =>
        set((state) => ({
            cart: {
                products: [...state.cart.products, product],
            },
        })),
    removeProduct: (id) => {
        set((state) => ({
            cart: {
                products: state.cart.products.filter((p) => p.id !== id),
            }
        }))
    }
}));

export default useStore;