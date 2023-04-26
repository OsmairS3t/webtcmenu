import React from "react";
import Image, { StaticImageData } from 'next/image'
import Link from "next/link";

interface CardProps {
    id: number;
    image: StaticImageData;
    name: string;
    price: string;
}

export default function Card({ id, image, name, price }: CardProps) {
    return (
        <div className='flex justify-between bg-slate-200 mt-2'>
            <Link href={`../../product/${id}`}>
                <div className='flex flex-grow justify-start items-center mt-1 pl-2 h-20'>
                    <Image src={image} alt='Crepe' width={64} height={64} className='w-16 h-16 rounded-full' />
                    <div className='ml-4'>
                        <div className='font-bold text-xm text-left'>{name}</div>
                        <div className='font-bold text-xl text-left'>{price}</div>
                    </div>
                </div>
            </Link>
            <div className='flex flex-col justify-center w-24 mr-4'>
                <Link href={`../../order/add/${id}`} className='flex justify-center bg-green-500 p-1 h-16 text-center font-semibold'>
                    <button onClick={() => { }}>INCLUIR PEDIDO</button>
                </Link>
            </div>
        </div>
    )
}