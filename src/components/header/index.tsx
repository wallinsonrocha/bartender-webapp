import Link from 'next/link';
// import './style.css'
import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex z-[2] justify-between p-4 items-center sticky top-0 w-full bg-slate-500'>
      <Link className='' href="/">Bartender</Link>
      <div className='flex gap-4'>
        <nav className='flex gap-4 justify-center items-center'>
          <Link href="/bartenders">Bartenders</Link>
          <Link href="/drinks">Drinks</Link>
        </nav>
        <button className='rounded-full grid place-content-center border-solid border-2 p-1.5'>
          <Image src={'/icons/cart.svg'} width={24} height={24} alt='Simbolo Cart' />
        </button>
      </div>
    </header>
  );
}
