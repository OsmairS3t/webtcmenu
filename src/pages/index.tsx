import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className='w-5 h-5 bg-orange-300'><image href='../assets/logotio.png' /></div>
      <div className="items-center bg-white p-2 text-center font-bold">MENU</div>
    </main>
  )
}
