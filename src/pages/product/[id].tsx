import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../api/data';
import { IProduct } from "@/pages/api/interface";

export default function Product() {
  const [product, setProduct] = useState<IProduct>()
  const { query } = useRouter()

  useEffect(() => {
   const data = products.find(prod => prod.id === Number(query.id))
   setProduct(data)
  }, [query])

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-white border-gray-500 text-blue-950'>
      <div className='flex flex-col justify-around items-center w-96 h-2/3 border-2 p-5'>
        <div className='text-blue-950 font-semibold text-2xl mt-5 mb-5'>Detalhes do produto</div>
        <Image 
          src={product?.image}
          width={144} 
          height={144} 
          alt='Crepe' 
          className='rounded-full mb-5' 
        />
        <div className='font-bold text-lg mb-5'>
          {product?.name}
        </div>
        <div className='font-bold text-blue-950 text-3xl mb-5'>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product?.price)}
        </div>
        <div className='flex flex-col justify-start'>
          <div className='font-semibold text-lg'>Ingredientes:</div>
          <div className='text-lg'>
            {product?.ingredients}
          </div>
        </div>
        <Link href={`../`} className='bg-blue-950 p-2 w-40 mt-10 font-semibold items-center text-center rounded-xl text-white hover:bg-blue-800'>
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  )
}