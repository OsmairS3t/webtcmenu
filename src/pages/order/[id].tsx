import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Order() {
    const { query } = useRouter()

    return (
        <div className='flex justify-center w-screen h-screen bg-white border-gray-500'>
            <div className='flex flex-col justify-start items-center w-96 h-full border-2 p-5'>
                <div className='text-blue-950 font-bold text-2xl mt-5 mb-3'>Detalhes do pedido</div>
                <div className='mt-2 border-b border-gray-500'>
                    <h2 className='font-bold'>CREPES:</h2>
                    <div className='font-semibold flex justify-between w-80 p-0.5'>
                        <span className='flex-grow'>Banana + doce de leite</span>
                        <span className='w-7'>1</span>
                        <span>R$ 9,99</span>
                    </div>
                    <div className='font-semibold flex justify-between w-80 p-0.5'>
                        <span className='flex-grow'>Banana + doce de leite</span>
                        <span className='w-7'>1</span>
                        <span>R$ 9,99</span>
                    </div>
                </div>
                <div className='w-80 text-right font-bold'>
                    <span>R$ 9,99</span>
                </div>

                <div className='mt-2 border-b border-gray-500'>
                    <h2 className='font-bold'>PRATOS:</h2>
                    <div className='font-semibold flex w-80 p-0.5'>
                        <span className='flex-grow'>Entrecot</span>
                        <span className='w-7'>2</span>
                        <span>R$ 9,99</span>
                    </div>
                </div>
                <div className='w-80 text-right font-bold'>
                    <span>R$ 9,99</span>
                </div>

                <div className='mt-2 border-b border-gray-500'>
                    <h2 className='font-bold'>SOBREMESAS:</h2>
                    <div className='font-semibold flex justify-between w-80 p-0.5'>
                        <span className='flex-grow'>Crem Bullet</span>
                        <span className='w-7'>2</span>
                        <span>R$ 9,99</span>
                    </div>
                </div>
                <div className='w-80 text-right font-bold'>
                    <span>R$ 9,99</span>
                </div>

                <div className='mt-2 border-b border-gray-500'>
                    <h2 className='font-bold'>BEBIDAS:</h2>
                    <div className='font-semibold flex justify-between w-80 p-0.5'>
                        <span className='flex-grow'>Suco de laranja</span>
                        <span className='w-7'>2</span>
                        <span>R$ 9,99</span>
                    </div>
                </div>
                <div className='w-80 text-right font-bold'>
                    <span>R$ 9,99</span>
                </div>

                <div className='border-t border-gray-500 mt-5 w-80 text-center font-bold space-x-2'>
                    <span>TOTAL:</span>
                    <span>R$ 9,99</span>
                </div>

                <Link href={`../`} className='bg-blue-950 p-2 w-40 mt-6 font-semibold items-center text-center rounded-xl text-white hover:bg-blue-800'>
                    <button>Voltar</button>
                </Link>
            </div>
        </div>
    )
}