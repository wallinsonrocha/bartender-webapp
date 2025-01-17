'use client'
import Link from 'next/link';
// import './style.css'
import Image from 'next/image';
import CartDisplay from '../cart/cartDisplay';
import { useState } from 'react';

export default function Header() {
  const [openCart, setOpenCart] = useState<boolean>(false);

  function toggleCart() {
    setOpenCart(!openCart);
  }

  return (
    <header className='sticky top-0 w-full z-10'>
      <div className='flex justify-between p-4 items-center bg-slate-500'>
        <Link className='' href="/">Bartender</Link>
        <div className='flex gap-4'>
          <nav className='flex gap-4 justify-center items-center'>
            <Link href="/bartenders">Bartenders</Link>
            <Link href="/drinks">Drinks</Link>
          </nav>
          <button onClick={toggleCart} className='rounded-full grid place-content-center border-solid border-2 p-1.5'>
            <Image src={'/icons/cart.svg'} width={24} height={24} alt='Simbolo Cart' />
          </button>
        </div>
      </div>
      <CartDisplay openCart={openCart} handleOpenCart={toggleCart}/>
    </header>
  );
}
