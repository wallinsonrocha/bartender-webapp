"use client"
import Image from 'next/image';
import Star from '../../star';
import './style.css';
import { useState } from 'react';
import useStore from '@/store/cartStore';
import { useRouter } from 'next/navigation';
import { DrinkProduct } from '../../../../public/data/drinks';

export default function DrinkDetail(props: DrinkProduct) {
  const addCart = useStore((state) => state.addProduct)
  const router = useRouter();

  // Cria um array com o número de estrelas definido pela prop "stars"
  const stars = Array.from({ length: props.stars });

  const [quantitie, setQuantitie] = useState<number>(1);

  // Função para adicionar
  const handleAdd = () => {
    setQuantitie((prev) => prev + 1);
  }

  // Função para subtrair
  const handleSub = () => {
    setQuantitie((prev) => (prev > 1 ? prev - 1 : 1))
  }

  const handleAddProduct = (quantitie: number) => {    
    addCart({...props}, quantitie);
    setQuantitie(1);
    router.back();
  }

  return (
    <div key={props.id} id="drink-product-screen">
      {/* Tela com insformações principais */}
      <div id="drink-product-detail" className='drinkActive'>
        {/* Container */}
        <button className='back-button' onClick={()=>router.back()} >Fechar</button>
        {/* Container de informações */}
        <div className='drink-product-detail__container'>
          <div className='drink-product__image-container'>
            <Image src={props.image} alt="Image Drink" width={0} height={0} layout='responsive' style={{ objectFit: "cover" }} />
          </div>
          {/* Informações do produto */}
          <div className="drink-product-container">
            <h3>{props.name}</h3>
            <div className="drink-product-star-price">
              <div className='flex'>
                {stars.map((_, index) => (
                  <Star key={`${props.name}-${index}`} index={`${props.name}-${index}`} />
                ))}
              </div>
              <p>Preço: R$ {props.valorH.toFixed(2).replace(".", ",")}</p>
            </div>
            <div>
              <p>
                {props.description}
              </p>
            </div>
            {/* Preço e quantidade */}
            <div className="drink-product__qnt">
              <p className='qnt__price'>R$ {(props.valorH * quantitie).toFixed(2).replace(".", ",")}</p>
              <div className='qnt__button'>
                <button aria-label='sub' onClick={handleSub}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z" /></svg>
                </button>
                <p aria-label='quantitie'>{quantitie}</p>
                <button aria-label='add' onClick={handleAdd}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2" /></svg>
                </button>
              </div>
            </div>

            <button
              // Continuar aqui para verificar a reorganização da quantidade de produtos e o seu armazenamento (produto e qnt)
              onClick={()=>handleAddProduct(quantitie)}
            >
              Adicionar no carrinho
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
