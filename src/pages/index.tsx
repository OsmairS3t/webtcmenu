import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Card from '@/components/cards/products';

import { products } from './api/data';

export default function Home() {
  const [category, setCategory] = useState(1)
  const [amount, setAmount] = useState(0)
  const [priceAmount, setPriceAmount] = useState(0)
  const [valueActive1, setValueActive1] = useState('flex-grow p-2 bg-orange-100 font-bold text-center text-blue-950')
  const [valueActive2, setValueActive2] = useState('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
  const [valueActive3, setValueActive3] = useState('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
  const [valueActive4, setValueActive4] = useState('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')

  function handleChange(btn: Number) {
    if (btn === 1) {
      setCategory(1)
      setValueActive1('flex-grow p-2 bg-orange-100 font-bold text-center text-blue-950')
      setValueActive2('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
      setValueActive3('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
      setValueActive4('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
    }
    if (btn === 2) {
      setCategory(2)
      setValueActive1('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
      setValueActive2('flex-grow p-2 bg-orange-100 font-bold text-center text-blue-950')
      setValueActive3('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
      setValueActive4('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
    }
    if (btn === 3) {
      setCategory(3)
      setValueActive1('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
      setValueActive2('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
      setValueActive3('flex-grow p-2 bg-orange-100 font-bold text-center text-blue-950')
      setValueActive4('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
    }
    if (btn === 4) {
      setCategory(4)
      setValueActive1('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
      setValueActive2('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
      setValueActive3('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
      setValueActive4('flex-grow p-2 bg-orange-100 font-bold text-center text-blue-950')
    }
  }

  return (
    <main className="flex flex-col justify-start text-blue-950">
      <section>
        <div className='flex 
            items-center 
            justify-start 
            flex-wrap 
            bg-orange-300 
            p-2 
            border-b-2 
            border-orange-500'>
          <div><Image src={'/assets/logotipo.png'} height={70} width={70} alt='Tio do Crepe' /></div>
          <div className="flex-grow font-bold text-center text-red-700 text-4xl font-irish">MENU</div>
        </div>

        <div className='flex justify-between'>
          <button onClick={() => handleChange(1)} className={valueActive1}>CREPES</button>
          <button onClick={() => handleChange(2)} className={valueActive2}>PRATOS</button>
          <button onClick={() => handleChange(3)} className={valueActive3}>SOBREMESAS</button>
          <button onClick={() => handleChange(4)} className={valueActive4}>BEBIDAS</button>
        </div>
      </section>

      <section className='mb-1 overflow-y-auto'>
        {products.map(product => {
          return (
            product.category_id === category &&
            <div className='flex flex-col' key={product.id}>
              <Card 
                key={product.id}
                product={product}
                amount={amount}
                setAmount={setAmount}
                priceAmount={priceAmount} 
                setPriceAmount={setPriceAmount}
              />
            </div>
          )
        })}
      </section>

      <section>
        <div className='flex justify-between items-center bg-orange-300 p-2 border-t-2 border-orange-500'>
          <div className='flex flex-col flex-grow'>
            <div className='font-bold'>Itens: {amount}</div>
            <div className='font-bold'>
              Total: {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(priceAmount)}
            </div>
          </div>
          <div>
            <Link href={`/order/1`}>
              <button className='bg-blue-500 w-24 p-2 mr-2 text-center font-bold'>
                DETALHES PEDIDO
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
