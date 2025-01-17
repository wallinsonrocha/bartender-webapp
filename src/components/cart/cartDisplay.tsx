import Image from "next/image";
import useStore from "@/app/store/cartStore";

interface CartProps {
    openCart: boolean
    handleOpenCart: () => void;
}

export default function CartDisplay(props: CartProps) {

    function closeCart() {
        props.handleOpenCart();
    }

    const cart = useStore((state) => state.cart);
    console.log(cart.products); // Debug: Veja o que está na lista de produtos


    return (
        <div className={`h-full w-full z-10 bg-black-100/40 backdrop-blur-sm py-12 sm:py-16 lg:py-20 fixed inset-0 grid place-content-center ${!props.openCart ? 'hidden' : ''}`}>
            <div className="relative min-h-[80dvh] flex flex-col">
                <button className="self-end mb-4" onClick={closeCart}>
                    <Image src={'/icons/close-button.svg'} width={24} height={24} alt="Close button" />
                </button>
                <div className="mx-auto h-full w-[80vw]">
                    <div className="mx-auto h-full lg:max-w-2xl">
                        <div className="bg-white h-4/5 shadow">
                            <div className="px-4 py-6 h-full justify-end flex flex-col sm:px-8 sm:py-10">
                                <div className="flow-root h-fit">
                                    <ul className="">
                                        {cart.products.length > 0 ? (
                                            <pre>
                                                {JSON.stringify(cart.products, null, 2)}
                                            </pre>
                                        ) : (
                                            <h2>Adicione produtos</h2>
                                        )}
                                    </ul>
                                </div>

                                <div>
                                    <div className="mt-6 border-t border-b py-2">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-400">Subtotal</p>
                                            <p className="text-lg font-semibold text-gray-900">$399.00</p>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-gray-400">Shipping</p>
                                            <p className="text-lg font-semibold text-gray-900">$8.00</p>
                                        </div>
                                    </div>
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
                </div>
            </div>
        </div>
    )
}