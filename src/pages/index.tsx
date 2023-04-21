import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import logo from '../assets/logotipo.png';
import crepe01 from '../assets/crepe01.jpeg';
import crepe02 from '../assets/crepe02.jpeg';

export default function Home() {

  return (
    <main className="flex-col min-h-screen bg-orange-100">
      <div className='bg-orange-300 flex items-center justify-start flex-wrap h-15 p-2 border-b-2 border-orange-600'>
        <div><Image src={logo} height={70} width={70} alt='' /></div>
        <div className="flex-grow font-bold text-center text-red-700 text-4xl font-irish">MENU</div>
        <div className='flex-col w-25 justify-items-center'>
          <div className='text-red-700 font-bold'>MESA: 99</div>
          <div className='text-red-700 font-bold'>PEDIDO: R$ 9,99</div>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='flex-grow p-2 bg-orange-100 font-bold text-center text-blue-950'>CREPES</div>
        <div className='flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950'>PRATOS</div>
        <div className='flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950'>SOBREMESAS</div>
        <div className='flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950'>BEBIDAS</div>
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-col justify-around items-center mt-10 ml-5 w-64 h-64 bg-slate-200'>
          <Image src={crepe01} alt='Crepe' className='w-40 h-40 rounded-full' />
          <div className='font-bold text-xm text-center'>Banana + Chocolate</div>
          <div className='font-bold text-xl text-center'>R$ 9,99</div>
        </div>

        <div className='flex flex-col justify-around items-center mt-10 ml-5 w-64 h-64 bg-slate-200'>
          <Image src={crepe02} alt='Crepe' className='w-40 h-40 rounded-full' />
          <div className='font-bold text-xm text-center'>Frango + Azeitona</div>
          <div className='font-bold text-xl text-center'>R$ 9,99</div>
        </div>

      </div>
    </main>
  )
}
