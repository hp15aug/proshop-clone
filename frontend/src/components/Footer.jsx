import React from 'react'

const date=new Date().getFullYear();

const Footer = () => {
  return (
    <div className='text-center font-serif'>
        <p>ProShop &copy; {date}</p>
    </div>
  )
}

export default Footer