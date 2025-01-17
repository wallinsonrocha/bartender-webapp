import { render, fireEvent } from "@testing-library/react";
import CartDisplay from "@/components/cart/cartDisplay";

// jest.mock('@/app/store/cartStore', () => {
//     const storeMock = {
//         cart: { products: [] }, // Inicializa o carrinho vazio
//         addProduct: jest.fn(),
//         removeProduct: jest.fn(),
//         modQnt: jest.fn(),
//         getTotal: jest.fn(),
//     };
//     return {
//         __esModule: true,
//         default: jest.fn(() => storeMock),
//     };
// });

describe('CartDisplay', () => {
    const mockHandleOpenCart = jest.fn();

    // beforeEach(() => {
    //     const store = require('@/app/store/cartStore').default();
    //     store.cart.products = []; // Reseta o carrinho antes de cada teste
    //     store.addProduct.mockClear();
    //     store.removeProduct.mockClear();
    //     store.modQnt.mockClear();
    //     store.getTotal.mockClear();
    // });

    it('should render "Adicione produtos" when the cart is empty', () => {
        const { getByText } = render(<CartDisplay openCart={true} handleOpenCart={mockHandleOpenCart} />);
        expect(getByText('Adicione produtos')).toBeInTheDocument();
    });
});
