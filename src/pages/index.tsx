import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Card from '@/components/cards/products';

import logo from '../assets/logotipo.png';
import crepe01 from '../assets/crepe01.jpeg';
import crepe02 from '../assets/crepe02.jpeg';

export default function Home() {
  const [category, setCategory] = useState(1)
  const [valueActive1, setValueActive1] = useState('flex-grow p-2 bg-orange-100 font-bold text-center text-blue-950')
  const [valueActive2, setValueActive2] = useState('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
  const [valueActive3, setValueActive3] = useState('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
  const [valueActive4, setValueActive4] = useState('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
  const products = [
    {
      'category': 1,
      'id': 1,
      'image': crepe01,
      'name': 'Banana + Chocolate',
      'price': 'R$ 9,99',
      'ingredients': [
        'Massa do crepe',
        'Banana',
        'Doce de leite',
        'Queijo mussarela'
      ]
    },
    {
      'category': 1,
      'id': 2,
      'image': crepe02,
      'name': 'Frango + Azeitona',
      'price': 'R$ 11,99',
      'ingredients': [
        'Massa do crepe',
        'Frango',
        'Azeitona',
        'Queijo mussarela'
      ]
    },
    {
      'category': 3,
      'id': 3,
      'image': crepe01,
      'name': 'Banana + Chocolate',
      'price': 'R$ 19,99',
      'ingredients': [
        'Massa do crepe',
        'Banana',
        'Doce de leite',
        'Queijo mussarela'
      ]
    },
    {
      'category': 1,
      'id': 4,
      'image': crepe02,
      'name': 'Frango + Azeitona',
      'price': 'R$ 10,99',
      'ingredients': [
        'Massa do crepe',
        'Frango',
        'Azeitona',
        'Queijo mussarela'
      ]
    },
  ]

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
    <main className="flex flex-col justify-between min-h-screen bg-orange-100">
      <div>
        <div className='bg-orange-300 flex items-center justify-start flex-wrap h-15 p-2 border-b-2 border-orange-600'>
          <div><Image src={logo} height={70} width={70} alt='' /></div>
          <div className="flex-grow font-bold text-center text-red-700 text-4xl font-irish">MENU</div>
        </div>

        <div className='flex justify-between'>
          <button onClick={() => handleChange(1)} className={valueActive1}>CREPES</button>
          <button onClick={() => handleChange(2)} className={valueActive2}>PRATOS</button>
          <button onClick={() => handleChange(3)} className={valueActive3}>SOBREMESAS</button>
          <button onClick={() => handleChange(4)} className={valueActive4}>BEBIDAS</button>
        </div>

        {products.map(product => {
          return (
            product.category === category &&
            <div className='flex flex-col mb-2' key={product.id}>
              <Card id={product.id} image={product.image} name={product.name} price={product.price} />
            </div>
          )
        })}

      </div>

      <div className='flex justify-between items-center bg-orange-300 p-2'>
        <div className='flex flex-col flex-grow'>
          <div className='font-bold'>Itens: 9</div>
          <div className='font-bold'>Total: R$ 9,99</div>
        </div>
        <div>
          <Link href={`/order/1`}>
            <button onClick={() => { }} className='bg-blue-500 w-24 text-center font-bold p-2'>
              Detalhes Pedido
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
