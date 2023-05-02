import React, { useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import { IOrder, IProduct } from "@/pages/api/interface";

interface CardProps {
    product: IProduct;
    amount: number;
    setAmount: Function;
    priceAmount: number;
    setPriceAmount: Function;
}

export default function Card({ product, amount, setAmount, priceAmount, setPriceAmount }: CardProps) {
    const [order, setOrder] = useState<IOrder>()
    function handleAmountPrice(price: number) {
        setAmount(amount + 1);
        setPriceAmount(priceAmount + price);
    }

    return (
        <div className='flex justify-between items-center bg-orange-100 border-orange-200 border-b-2'>
            <Link href={`../../product/${product.id}`} className='flex justify-between w-full hover:bg-orange-100 hover:bg-gradient-to-r from-white'>
                <div className='flex flex-grow items-center mt-1 pl-2 h-20'>
                    <Image src={product.image} alt='Crepe' width={64} height={64} className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                        <div className='font-semibold text-xm text-left'>{product.name}</div>
                        <div className='font-bold text-xl text-left'>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(product.price)}
                        </div>
                    </div>
                </div>
            </Link>
            <div className="mr-2">
                <Link
                    className='flex items-center 
                        w-full 
                        h-16 
                        p-1
                        bg-green-600 
                        border-4
                        border-green-600
                        text-center 
                        text-white
                        font-semibold 
                        hover:text-green-800
                        hover:bg-green-400
                        hover:border-4
                        hover:border-green-600'
                    onClick={() => handleAmountPrice(product.price)}
                    href='#'>
                    ADICIONAR
                </Link>
            </div>
        </div>
    )
}