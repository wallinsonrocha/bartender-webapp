import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { DrinkProduct } from '../../public/data/drinks';
import { persist } from 'zustand/middleware';

export interface DrinkQnt {
  id: string;
  product: DrinkProduct;
  qnt: number;
}

interface Cart {
  products: DrinkQnt[];
}

interface StoreState {
  cart: Cart;
  addProduct: (product: DrinkProduct, qnt: number) => void;
  removeProduct: (id: string) => void;
  modQnt: (id: string, qnt: number) => void;
  getTotal: () => number;
}

function foundId(array: DrinkQnt[], id: string): { updatedProducts: DrinkQnt[]; existingProductIndex: number } {
  const existingProductIndex = array.findIndex((p) => p.id === id);
  const updatedProducts = [...array];
  return { updatedProducts, existingProductIndex };
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: {
        products: [],
      },
      addProduct: (product, qnt) =>
        set((state) => {
          const existingProductIndex = state.cart.products.findIndex((p) => p.product.id === product.id);
          const updatedProducts = [...state.cart.products];
          // console.log(existingProductIndex)

          if (existingProductIndex > -1) {
            const existingProduct = { ...updatedProducts[existingProductIndex] }
            updatedProducts[existingProductIndex] = {
              ...existingProduct,
              product,
              qnt: existingProduct.qnt + qnt,
            };
            // console.log(updatedProducts[existingProductIndex])
          } else {
            let newId = uuidv4();
            updatedProducts.push({ id: newId, product: product, qnt });
          }

          return {
            cart: {
              products: updatedProducts,
            },
          };
        }),
      removeProduct: (id) =>
        set((state) => {
          const { updatedProducts, existingProductIndex } = foundId(state.cart.products, id);

          // Remove
          if (existingProductIndex > -1) {
            updatedProducts.splice(existingProductIndex, 1);
          }

          else {
            return state;
          }

          return {
            cart: {
              ...state.cart,
              products: updatedProducts,
            },
          };
        }),
      modQnt: (id, qnt) =>
        set((state) => {
          const { updatedProducts, existingProductIndex } = foundId(state.cart.products, id);

          if (existingProductIndex > -1) {
            updatedProducts[existingProductIndex].qnt = qnt

            return {
              cart: {
                ...state.cart,
                products: updatedProducts,
              },
            };
          }

          return state;
        }),
        getTotal: () => {
          const products = get().cart.products;
          let totalValue = products.reduce(
            (total, item) => total + item.product.valorH * item.qnt,
            0
          );         
          return totalValue;
        },
    }), { name: 'cart-storage' }
  )

);

export default useStore;
