import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import logo from '../assets/logotipo.png';
import crepe01 from '../assets/crepe01.jpeg';
import crepe02 from '../assets/crepe02.jpeg';

export default function Home() {

  return (
    <main className="flex flex-col justify-between min-h-screen bg-orange-100">
      <div>
        <div className='bg-orange-300 flex items-center justify-start flex-wrap h-15 p-2 border-b-2 border-orange-600'>
          <div><Image src={logo} height={70} width={70} alt='' /></div>
          <div className="flex-grow font-bold text-center text-red-700 text-4xl font-irish">MENU</div>
        </div>

        <div className='flex justify-between'>
          <div className='flex-grow p-2 bg-orange-100 font-bold text-center text-blue-950'>CREPES</div>
          <div className='flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950'>PRATOS</div>
          <div className='flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950'>SOBREMESAS</div>
          <div className='flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950'>BEBIDAS</div>
        </div>

        <div className='flex flex-col mb-2'>
          <div className='flex justify-between bg-slate-200 mt-2'>
            <div className='flex flex-grow justify-start items-center mt-1 pl-2 h-20'>
              <Image src={crepe01} alt='Crepe' className='w-16 h-16 rounded-full' />
              <div className='ml-4'>
                <div className='font-bold text-xm text-left'>Banana + Chocolate</div>
                <div className='font-bold text-xl text-left'>R$ 9,99</div>
              </div>
            </div>
            <div className='flex flex-col justify-center w-24 mr-4'>
              <div className='bg-blue-500 p-1 h-8 mb-1 text-center font-semibold'>+ Detalhes</div>
              <div className='bg-green-500 p-1 h-8 mt-1 text-center font-semibold'>Adicionar</div>
            </div>
          </div>

          <div className='flex justify-between bg-slate-200 mt-2'>
            <div className='flex flex-grow justify-start items-center mt-1 pl-2 h-20'>
              <Image src={crepe02} alt='Crepe' className='w-16 h-16 rounded-full' />
              <div className='ml-4'>
                <div className='font-bold text-xm text-left'>Frango + Azeitona</div>
                <div className='font-bold text-xl text-left'>R$ 9,99</div>
              </div>
            </div>
            <div className='flex flex-col justify-center w-24 mr-4'>
              <div className='bg-blue-500 p-1 h-8 mb-1 text-center font-semibold'>+ Detalhes</div>
              <div className='bg-green-500 p-1 h-8 mt-1 text-center font-semibold'>Adicionar</div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center bg-orange-300 p-2'>
        <div className='flex flex-col flex-grow'>
          <div className='font-bold'>Itens: 9</div>
          <div className='font-bold'>Total: R$ 9,99</div>
        </div>
        <div>
          <div className='bg-blue-500 w-24 text-center font-bold p-2'>Detalhes Pedido</div>
        </div>
      </div>
    </main>
  )
}
