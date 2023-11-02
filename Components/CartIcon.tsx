import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartIcon = () => {
  return (
    <Link href='/cart'  className='flex gap-2 items-center justify-center'>
        <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <FaShoppingCart size ={20}/>

        </div>

    </Link>

  )
}

export default CartIcon