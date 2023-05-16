import React from 'react'
import EmptyBasket from '../components/EmptyBasket'
import AsideBasket from '../components/AsideBasket'
import CardBasket from '../components/cards/CardBasket';

const BasketView = () => {
  return (
    <main className='flex justify-around'>
      {/* <EmptyBasket /> */}
      
      <section className='w-1/3'>
        <CardBasket />
      </section>

      <AsideBasket />
    </main>
  )
}

export default BasketView