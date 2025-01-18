import Image from "next/image";
import useStore from "@/app/store/cartStore";
import CartProduct from "./cartProduct";

interface CartProps {
    openCart: boolean
    handleOpenCart: () => void;
}

export default function CartDisplay(props: CartProps) {

    function closeCart() {
        props.handleOpenCart();
    }

    const cart = useStore((state) => state.cart);

    return (
        <div className={`h-full w-full z-10 bg-black-100/40 backdrop-blur-sm py-4 fixed inset-0 grid place-content-center ${!props.openCart ? 'hidden' : ''}`}>
            {/* Main Display */}
            <div className="bg-white w-80 md:w-[620px]  h-full shadow py-4 flex flex-col">
                {/* Close button */}
                <button className="self-end mb-4" onClick={closeCart}>
                    <Image src={'/icons/close-button.svg'} width={24} height={24} alt="Close button" />
                </button>
                {/* Container products and checkout */}
                <div className="px-4 py-4 h-full justify-end flex flex-col sm:px-8 sm:py-10">
                    {/* Container products */}
                    <div className="flow-col overflow-y-scroll flex max-h-80 h-full">
                        <div className="h-fit w-full">
                            <ul>
                                {cart.products.length > 0 ? (
                                    cart.products.map((p, i) => {
                                        return <CartProduct id={p.id} product={p.product} qnt={p.qnt} />
                                    })
                                    // <pre>
                                    //     {JSON.stringify(cart.products, null, 2)}
                                    // </pre>
                                ) : (
                                    <h2>Adicione produtos</h2>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* Checkout */}
                    <div>
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Total</p>
                            <p className="text-2xl font-semibold text-gray-900"><span className="text-xs font-normal text-gray-400">USD</span> 408.00</p>
                        </div>

                        <div className="mt-6 text-center">
                            <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}