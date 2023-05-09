import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import Card from '@/components/cards/products';
import { orders, products } from './api/data';
import { IOrder, IProduct } from './api/interface';
import ProductDetail from './product';
import OrderDetail from './order';

const orderNumber = 1;

export default function Home() {
  const [category, setCategory] = useState(1);
  const [valueActive1, setValueActive1] = useState('flex-grow p-2 bg-orange-100 font-bold text-center text-blue-950')
  const [valueActive2, setValueActive2] = useState('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
  const [valueActive3, setValueActive3] = useState('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
  const [valueActive4, setValueActive4] = useState('flex-grow p-2 bg-orange-300 font-bold text-center text-blue-950')
  const [isModalOpenProduct, setIsModalOpenProduct] = useState(false);
  const [isModalOpenOrder, setIsModalOpenOrder] = useState(false);
  const [prod, setProd] = useState<IProduct>({
    category_id: 0,
    category_name: '',
    id: 0,
    name: '',
    price: 0,
    image: '',
    active: '',
    ingredients: [],
    time: ''
  });
  const [order, setOrder] = useState<IOrder>({
    id: 0,
    order: 0,
    place: '',
    cliente: '',
    products: [{
      category_id: 0,
      category_name: '',
      id: 0,
      name: '',
      price: 0,
      image: '',
      active: '',
      ingredients: [],
      time: ''
    }],
    amount: 0,
    price: 0
  });

  useEffect(() => {
    const data = orders.find(item => item.id === orderNumber);
    setOrder(data)
  }, [orderNumber])

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

  function handleAmountPrice(price: number) {
    const data: IOrder = {
      id: order.id,
      amount: order.amount + 1,
      cliente: order.cliente,
      place: order.place,
      order: order.order,
      price: order.price + price,
      products: order.products
    }
    setOrder(data);
  }

  function handleOpenModalOrder() {
    setIsModalOpenOrder(true);
  }

  return (
    <main className="flex flex-col justify-start text-blue-950">
      <section>
        <div className='flex justify-between'>
          <button onClick={() => handleChange(1)} className={valueActive1}>CREPES</button>
          <button onClick={() => handleChange(2)} className={valueActive2}>PRATOS</button>
          <button onClick={() => handleChange(3)} className={valueActive3}>SOBREMESAS</button>
          <button onClick={() => handleChange(4)} className={valueActive4}>BEBIDAS</button>
        </div>
      </section>

      <section className='my-2 overflow-y-auto'>
        {products.map(product => {
          return (
            product.category_id === category &&
            <div className='flex flex-col' key={product.id}>
              <Card
                key={product.id}
                product={product}
                isOpen={isModalOpenProduct}
                setOpen={setIsModalOpenProduct}
                setProd={setProd}
                setPriceAmount={() => handleAmountPrice(product.price)}
              />
            </div>
          )
        })}
      </section>

      <section>
        <div className='flex justify-between items-center bg-orange-300 p-2 border-t-2 border-orange-500'>
          <div className='flex justify-start space-x-10'>
            <div className='flex flex-col flex-grow'>
              <div className='font-semibold'>CLIENTE: {order.cliente}</div>
              <div className='font-semibold'>MESA: {order.place}</div>
            </div>
            <div className='flex flex-col flex-grow'>
              <div className='font-semibold'>ITENS: {order.amount}</div>
              <div className='font-semibold'>
                TOTAL: {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(order.price)}
              </div>
            </div>
          </div>
          <div>
            <button onClick={handleOpenModalOrder} className='bg-blue-600 w-32 p-2 text-center font-bold text-white hover:bg-blue-500'>
              DETALHES PEDIDO
            </button>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpenProduct} className='flex w-screen justify-center items-center mt-24' ariaHideApp={false}>
        <ProductDetail
          prod={prod}
          isOpen={isModalOpenProduct}
          setModalOpen={setIsModalOpenProduct}
          order={order}
          setOrder={setOrder}
        />
      </Modal>

      <Modal isOpen={isModalOpenOrder} className='flex w-screen justify-center items-center' ariaHideApp={false}>
        <OrderDetail ord={order} isOpen={isModalOpenOrder} setModalOpen={setIsModalOpenOrder} />
      </Modal>
    </main >
  )
}
