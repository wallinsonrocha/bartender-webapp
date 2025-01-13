import { create } from 'zustand';
import { DrinkProduct } from '../../../public/data/drinks';
import { persist, createJSONStorage } from 'zustand/middleware';

interface DrinkQnt {
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

// Continuar a construção de uma função para conseguir minimizar o código.
function OperationCart<DrinkQnt>(operation: ()=>number) {
  
}

const useStore = create<StoreState>()(
  persist(
    set => ({
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
            updatedProducts.push({ product: product, qnt });
          }

          return {
            cart: {
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
    }), { name: 'cart-storage' }
  )

);

export default useStore;
