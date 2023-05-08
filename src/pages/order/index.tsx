import { useEffect, useState } from 'react';
import { orders } from '../api/data';
import { IOrder } from '../api/interface';

interface Props {
    ord: IOrder;
    isOpen: boolean;
    setModalOpen: Function;
}

export default function OrderDetail({ ord, isOpen, setModalOpen }: Props) {
    const [order, setOrder] = useState<IOrder>(ord);
    let totalPrice = 0;

    function handleCloseModal() {
        isOpen ? setModalOpen(false) : setModalOpen(true);
    }

    order.products.map(item => {
        totalPrice = totalPrice + item.price
    })

    return (
        <div className='flex justify-center items-start mt-16 bg-orange-100 border-gray-500'>
            <div className='flex flex-col justify-around items-center w-96 h-2/3 border-2 border-orange-300 p-5 bg-white'>
                <div className='text-blue-950 font-bold text-2xl mt-5 mb-3'>Detalhes do pedido</div>
                <div className='flex justify-start w-80 p-0.5 space-x-2'>
                    <h2 className='font-bold'>Nº PEDIDO:</h2>
                    <span>{order.order}</span>
                </div>
                <div className='flex justify-start w-80 p-0.5 space-x-2'>
                    <h2 className='font-bold'>CLIENTE:</h2>
                    <span>{order.cliente}</span>
                </div>
                <div className='flex justify-start w-80 p-0.5 space-x-2'>
                    <h2 className='font-bold'>MESA:</h2>
                    <span>{order.place}</span>
                </div>

                {order.products.map(item => (
                    <div key={item.id}>
                        <div className='mt-2 border-b border-gray-500'>
                            <h2 className='font-bold'>
                                {item.category_name}:
                            </h2>
                            <div className='font-semibold flex justify-between w-80 p-0.5'>
                                <span className='flex-grow'>{item.name}</span>
                                <span className='w-7'>1</span>
                                <span>
                                    {Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(item.price)}
                                </span>
                            </div>
                        </div>
                        <div className='w-80 text-right font-bold'>
                            <span>
                                Sub-total: {
                                    Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(item.price)
                                }
                            </span>
                        </div>
                    </div>
                ))}

                <div className='border-t border-gray-500 mt-5 w-80 text-center font-bold space-x-2'>
                    <span>TOTAL:</span>
                    <span>
                        {
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(totalPrice)
                        }
                    </span>
                </div>

                <button
                    onClick={handleCloseModal}
                    className='bg-blue-950 p-2 w-40 mt-6 font-semibold items-center text-center rounded-xl text-white hover:bg-blue-800'>
                    FECHAR
                </button>
            </div>
        </div>
    )
}