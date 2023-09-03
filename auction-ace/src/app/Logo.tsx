import React from 'react';
import logo from 'public/auction.png' 
import Image from 'next/image';

export default function Logo() {
  return (
      <div className='position-absolute'>
        <Image src={logo} width="70" height="20" alt="Auction Ace logo"/>
      </div>
  )
}
