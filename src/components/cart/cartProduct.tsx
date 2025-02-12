import useStore, { DrinkQnt } from "@/store/cartStore"


export default function CartProduct({id, product, qnt}: DrinkQnt){

    const removeProduct = useStore(state => state.removeProduct);

    function handleDeletProduct(id: string){
        removeProduct(id);
    }

    return (
        <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">           
            <div className="relative flex flex-1 flex-col justify-between">
                <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    {/* Info product */}
                    <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">{product.name}</p>
                    </div>

                    <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        {/* Total value product */}
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">R$ {qnt*product.valorH}</p>                                          
                    </div>
                </div>

                <div className="w-full top-0 justify-end flex sm:bottom-0 sm:top-auto">
                    {/* Delet button */}
                    <button onClick={()=>handleDeletProduct(id)} type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    )
}