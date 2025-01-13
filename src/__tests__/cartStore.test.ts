import useStore from "@/app/store/cartStore";
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

    test('shold add product to the cart', () => {
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

describe.only('Test Sub CartStore from my zustand store', () => {
    afterEach(() => {
        const store = useStore.getState();
        store.cart = {
            products: [
                {
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

    test('shold add product to the cart', () => {
        const addProduct = useStore.getState().addProduct;
        addProduct(product, 2);
        const state = useStore.getState().cart;
        expect(state.products).toHaveLength(1);
    });
})