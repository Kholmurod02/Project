import { Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
className='bg- text-blue-white w-full p-2 mt-2 opacity-0 group-hover:opacity-100 transition duration-300'
const ProductCard = ({ data }) => {
  return (
    <div className='flex justify-around'>
      {
        data?.map((el) => {
          return (
            <Card className='w-[300px] flex flex-col p-[10px] hover:'>
              <div className='flex justify-between'>
                <span className='bg-[red] text-white w-[60px] rounded flex items-center justify-center'>-{el.discount}%</span>
               <div className='flex flex-col'>
               <button className='z-2 '>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </button>
                <button className='z-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
               </div>
              </div>
                <img src={el.image} alt="" />
                <button className='bg-black' >Add To Cart</button>
                <div>
                  <h1 className='font-[600] text-[20px]'>{el.title}</h1>
                  <p className='text-[red] font-[500]'>${el.price}</p>
                </div>
            </Card>
          )
        })
      }
    </div>
  )
}

export default ProductCard