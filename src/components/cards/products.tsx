import React, { useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import { IProduct } from "@/pages/api/interface";

interface CardProps {
    product: IProduct;
    amount: number;
    setAmount: Function;
    priceAmount: number;
    setPriceAmount: Function;
}

export default function Card({ product, amount, setAmount, priceAmount, setPriceAmount }: CardProps) {

    function handleAmountPrice(price: number) {
        setAmount(amount + 1);
        setPriceAmount(priceAmount + price);
    }

    return (
        <div className='flex justify-between items-center bg-orange-100 border-orange-200 border-b-2'>
            <Link href={`../../product/${product.id}`} className='flex justify-between w-full hover:bg-white'>
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
                <div>
                    <Link 
                        className='flex items-center 
                            w-24 mt-2 mr-4
                            bg-green-600 
                            p-1 h-16 
                            text-center 
                            font-semibold 
                            hover:bg-green-400
                            hover:border-2
                            hover:border-green-600'
                        onClick={() => handleAmountPrice(product.price)}
                        href='#'>
                        INCLUIR PEDIDO
                    </Link>
                </div>
            </Link>
        </div>
    )
}