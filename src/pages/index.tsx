import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import logo from '../assets/logotipo.png';

export default function Home() {

  return (
    <main className="flex-col min-h-screen">
      <div className='bg-orange-300 flex items-center justify-start flex-wrap h-15 p-2'>
        <div><Image src={logo} height={70} width={70} alt='' /></div>
        <div className="flex-grow font-bold text-center">MENU</div>
        <div className='flex-col w-25 justify-items-center'>
          <div>MESA: 99</div>
          <div>PEDIDO: R$ 9,99</div>
        </div>
      </div>
    </main>
  )
}
