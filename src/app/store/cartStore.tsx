import { create } from 'zustand';
import { DrinkProduct } from '../../../public/data/drinks';

interface DrinkQnt {
  id: number;
  product: DrinkProduct;
  qnt: number;
}

interface Cart {
  products: DrinkQnt[];
}

interface StoreState {
  cart: Cart;
  addProduct: (product: DrinkProduct, qnt: number) => void;
  removeProduct: (id: number, qntToRemove?: number) => void;
}

const useStore = create<StoreState>((set) => ({
    cart: {
      products: [],
    },
    addProduct: (product, qnt) =>
      set((state) => {
        const existingProductIndex = state.cart.products.findIndex((p) => p.id === product.id);
  
        const updatedProducts = [...state.cart.products];
  
        if (existingProductIndex > -1) {
          // Atualizar quantidade se o produto já existe
          updatedProducts[existingProductIndex] = {
            ...updatedProducts[existingProductIndex],
            qnt: updatedProducts[existingProductIndex].qnt + qnt,
          };
        } else {
          // Adicionar novo produto
          updatedProducts.push({ id: product.id, product, qnt });
        }
  
        return {
          cart: {
            ...state.cart,
            products: updatedProducts,
          },
        };
      }),
    removeProduct: (id, qntToRemove) =>
      set((state) => {
        const existingProductIndex = state.cart.products.findIndex((p) => p.id === id);
  
        if (existingProductIndex > -1) {
          const updatedProducts = [...state.cart.products];
          const product = updatedProducts[existingProductIndex];
  
          if (qntToRemove && product.qnt > qntToRemove) {
            // Reduzir a quantidade se ainda houver o suficiente
            updatedProducts[existingProductIndex] = {
              ...product,
              qnt: product.qnt - qntToRemove,
            };
          } else {
            // Remover completamente se a quantidade é zero ou inferior
            updatedProducts.splice(existingProductIndex, 1);
          }
  
          return {
            cart: {
              ...state.cart,
              products: updatedProducts,
            },
          };
        }
  
        return state; // Retornar o estado inalterado se o produto não existir
      }),
  }));

export default useStore;
