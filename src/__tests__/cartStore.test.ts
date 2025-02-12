import useStore from "@/store/cartStore";
import { DrinkProduct } from "../../public/data/drinks";


describe('Test Add CartStore from my zustand store', () => {
    let product: DrinkProduct;

    beforeAll(() => {
        product = {
            id: 1,
            name: "Drink",
            shortDesc: "Mock Drink",
            description: "Details",
            valorH: 10,
            stars: 4
        };
    })

    afterEach(() => {
        const store = useStore.getState();
        store.cart = { products: [] };
    });

    test('should add product to the cart', () => {
        const addProduct = useStore.getState().addProduct;
        addProduct(product, 2);
        const state = useStore.getState().cart;
        expect(state.products).toHaveLength(1);
    });

    test('if add product correctly', () => {
        // Essa maneira abaixo não é usada pois apenas no React ele funciona.
        // const addProduct = useStore((state)=> state.addProduct);
        const addProduct = useStore.getState().addProduct;
        addProduct(product, 3);
        const cart = useStore.getState().cart;
        const quantitie = cart.products[0].qnt;
        expect(quantitie).toBe(3);
    });

    test('if add the same product, only add qnt', () => {
        const addProduct = useStore.getState().addProduct;
        addProduct(product, 2);
        addProduct(product, 3);
        const cart = useStore.getState().cart;
        const quantitie = cart.products[0].qnt;
        expect(quantitie).toBe(5);
    });

    test('if add other product', () => {
        let product2 = {
            id: 2,
            name: "Drink 2",
            shortDesc: "Mocked Drink 2",
            description: "Details",
            valorH: 10,
            stars: 4
        };
        const addProduct = useStore.getState().addProduct;
        addProduct(product, 2);
        addProduct(product2, 2);
        const cart = useStore.getState().cart;
        expect(cart.products).toHaveLength(2);
    })

    test('if add other product and change only one', () => {
        let product2 = {
            id: 2,
            name: "Drink 2",
            shortDesc: "Mocked Drink 2",
            description: "Details",
            valorH: 10,
            stars: 4
        };
        const addProduct = useStore.getState().addProduct;
        addProduct(product2, 2);
        addProduct(product, 2);
        const cart = useStore.getState().cart;
        expect(cart.products).toHaveLength(2);

        addProduct(product, 3);

        const cartChange = useStore.getState().cart;
        const quantitie1 = cartChange.products[0].qnt;
        const quantitie2 = cartChange.products[1].qnt;
        expect(quantitie1).toBe(2);
        expect(quantitie2).toBe(5);
    })
})

describe('Test Sub CartStore from my zustand store', () => {
    beforeEach(() => {
        const store = useStore.getState();
        store.cart = {
            products: [
                {
                    id: "1",
                    product: {
                        id: 1,
                        name: "Drink A",
                        shortDesc: "Mock Drink A",
                        description: "Details A",
                        valorH: 10,
                        stars: 4,
                    },
                    qnt: 2,
                },
                {
                    id: "2",
                    product: {
                        id: 2,
                        name: "Drink B",
                        shortDesc: "Mock Drink B",
                        description: "Details B",
                        valorH: 12,
                        stars: 5,
                    },
                    qnt: 1,
                },
                {
                    id: "3",
                    product: {
                        id: 3,
                        name: "Drink C",
                        shortDesc: "Mock Drink C",
                        description: "Details C",
                        valorH: 8,
                        stars: 3,
                    },
                    qnt: 4,
                },
                {
                    id: "4",
                    product: {
                        id: 4,
                        name: "Drink D",
                        shortDesc: "Mock Drink D",
                        description: "Details D",
                        valorH: 15,
                        stars: 4,
                    },
                    qnt: 3,
                },
                {
                    id: "5",
                    product: {
                        id: 5,
                        name: "Drink E",
                        shortDesc: "Mock Drink E",
                        description: "Details E",
                        valorH: 20,
                        stars: 5,
                    },
                    qnt: 5,
                },
            ],
        };
    });

    test('should remove product in the cart', () => {
        const deleteProduct = useStore.getState().removeProduct;
        deleteProduct("1");
        const state = useStore.getState().cart;
        expect(state.products).toHaveLength(4);        
        const existingProductIndex = state.products.findIndex((p) => p.id === "1");
        expect(state.products).toHaveLength(4);        
        expect(existingProductIndex).toBe(-1);
    });

    test('should return state if id dont exist', () => {
        const deleteProduct = useStore.getState().removeProduct;
        deleteProduct("a");
        const state = useStore.getState().cart;
        expect(state.products).toHaveLength(5);                
    });

    test('should modify quantitie from a product', () => {
        const mod = useStore.getState().modQnt;        
        mod("1", 5);
        const state = useStore.getState().cart;
        const existingProductIndex = state.products.find((p) => p.id === "1");
        expect(existingProductIndex?.qnt).toBe(5);
    });

    test('should return nothing if wrong id', () => {
        const mod = useStore.getState().modQnt;        
        mod("b", 5);
        const state = useStore.getState().cart;
        const existingProductIndex = state.products.find((p) => p.id === "b");
        expect(existingProductIndex?.qnt).toBe(undefined);
    });

    test('should return total value', ()=>{
        const totalValue = useStore.getState().getTotal();
        expect(totalValue).toBe(209);
    })
})