import React from "react";
import Image, { StaticImageData } from 'next/image'
import Link from "next/link";
import crepe01 from '../../assets/crepe01.jpeg';

interface CardProps {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;
}

export default function Card({ id, image, name, price }: CardProps) {
    return (
        <div className='bg-orange-100 border-orange-200 border-b-2'>
            <Link href={`../../product/${id}`} className='flex justify-between w-full hover:bg-white'>
                <div className='flex flex-grow justify-start items-center mt-1 pl-2 h-20'>
                    <Image src={crepe01} alt='Crepe' width={64} height={64} className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                        <div className='font-semibold text-xm text-left'>{name}</div>
                        <div className='font-bold text-xl text-left'>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(price)}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center w-24 mr-4'>
                    <Link href={`../../order/add/${id}`} className='flex justify-center bg-green-500 p-1 h-16 text-center font-semibold'>
                        <button onClick={() => { }}>INCLUIR PEDIDO</button>
                    </Link>
                </div>
            </Link>
        </div>
    )
}