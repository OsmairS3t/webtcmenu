import { useEffect, useState } from 'react';
import Image from 'next/image';
import { products } from '../api/data';
import { IOrder, IProduct } from "@/pages/api/interface";

interface Props {
    prod: IProduct;
    isOpen: boolean;
    setModalOpen: Function;
    order: IOrder;
    setOrder: Function;
}
export default function ProductDetail({ prod, isOpen, setModalOpen, order, setOrder }: Props) {
    const [product, setProduct] = useState<IProduct>(prod)
    const [countProduct, setCountProduct] = useState(0)

    function handleMinusProduct(id: number, price: number) {
        if (countProduct === 0) {
            alert('Quantidade mínima já informada');
        } else {
            setCountProduct(countProduct - 1)
            const dataTemp = {
                id: 1,
                order: 1,
                place: 1,
                cliente: 'Osmair',
                product_id: id,
                amount: countProduct - 1,
                price: price * (countProduct - 1)
            }
            //setOrder(dataTemp)
            console.log(dataTemp)
        }
    }

    function handlePlusProduct(id: number, price: number) {
        setCountProduct(countProduct + 1)
        const dataTemp = {
            id: 1,
            order: 1,
            place: 1,
            cliente: 'Osmair',
            product_id: id,
            amount: countProduct + 1,
            price: price * (countProduct + 1)
        }
        //setOrder(dataTemp)
        console.log(dataTemp)
    }

    function handleOrder(countProduct: number, valueOrder: number) {
        const data: IOrder = {
            id: order.id,
            amount: order.amount + countProduct,
            cliente: order.cliente,
            place: order.place,
            order: order.order,
            price: order.price + (countProduct * valueOrder),
            products: order.products
        }
        setOrder(data);
        setModalOpen(false);
    }

    function handleCloseModal() {
        isOpen ? setModalOpen(false) : setModalOpen(true);
    }

    useEffect(() => {
        const data = products.find(item => item.id === Number(prod.id))
        setProduct(data ?? {
            category_id: 0,
            category_name: '',
            id: 0,
            name: '',
            price: 0,
            image: '',
            active: '',
            ingredients: [],
            time: ''
        })
    }, [prod])

    return (
        <div className='flex flex-col justify-around items-center w-96 h-auto border-2 p-5 border-orange-300 bg-white'>
            <div className='text-blue-950 font-semibold text-2xl mt-5 mb-5'>Detalhes do produto</div>
            <Image
                src={product?.image ?? '/assets/nocrepe.png'}
                width={144}
                height={144}
                alt='Crepe'
                className='rounded-full mb-5'
            />
            <div className='font-bold text-lg mb-5'>{product?.name}</div>
            <div className='font-bold text-blue-950 text-2xl mb-5'>
                {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(Number(product?.price))}
            </div>
            <div className='flex flex-col justify-start'>
                <div className='font-semibold text-lg'>Ingredientes:</div>
                <div className='text-lg'>
                    {product?.ingredients}
                </div>
            </div>
            <div className='font-bold text-lg mb-2'>Tempo de preparo: {product?.time}</div>

            <div className='flex justify-center items-center'>
                <div>
                    <button onClick={() => handleMinusProduct(Number(product?.id), Number(product?.price))}
                        className='m-2 w-14 h-14 flex justify-center border-2 border-orange-300 hover:bg-orange-100 font-bold text-4xl text-center rounded-xl'>
                        -
                    </button>
                </div>
                <div className='font-semibold text-xl m-4'>{countProduct}</div>
                <div>
                    <button onClick={() => handlePlusProduct(Number(product?.id), Number(product?.price))}
                        className='m-2 w-14 h-14 flex justify-center border-2 border-orange-300 hover:bg-orange-100 font-bold text-4xl text-center rounded-xl'>
                        +
                    </button>
                </div>
            </div>

            <div className='text-center font-bold text-blue-950 text-2xl mb-2'>
                Total do Produto: {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(countProduct * Number(product?.price))}
            </div>

            <div className='flex justify-center items-center space-x-2'>
                <button onClick={() => handleOrder(countProduct, product?.price)} className='bg-green-800 p-2 w-40 mt-2 h-20 font-semibold items-center text-center rounded-xl text-white hover:bg-green-600'>
                    INCLUIR NO PEDIDO
                </button>

                <button onClick={handleCloseModal} className='bg-red-950 p-2 w-40 mt-3 h-20 font-semibold items-center text-center rounded-xl text-white hover:bg-red-800'>
                    FECHAR
                </button>
            </div>
        </div>
    )
}