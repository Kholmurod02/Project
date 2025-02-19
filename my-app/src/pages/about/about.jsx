import Cards from '@/components/card/cards'
import Card2 from '@/components/card2/card2'
import { Card } from '@mui/material'
import React from 'react'
import africans from '../../assets/africans.svg'
import img from '../../assets/img1.svg'
import ws from '../../assets/ws.svg'

const About = () => {
  let data = [
    {
      id: 1,
      image: img,
      title: "10.5K",
      desc: "Sallers active our site",
    },
    {
      id: 2,
      image: img,
      title: "10.5K",
      desc: "Sallers active our site",
      bg: "#DB4444"
    },
    {
      id: 3,
      image: img,
      title: "10.5K",
      desc: "Sallers active our site",
    },
    {
      id: 4,
      image: img,
      title: "10.5K",
      desc: "Sallers active our site",
    },
  ]
  let data2 = [
    {
      id: 1,
      image: ws,
      title: "Tom Cruise",
      desc: "Product Designer",
    },
    {
      id: 2,
      image: ws,
      title: "Tom Cruise",
      desc: "Product Designer",
    },
    {
      id: 3,
      image: ws,
      title: "Tom Cruise",
      desc: "Product Designer",
    }
  ]
  let data3 = [
    {
      id: 1,
      image: img,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    
    },
    {
      id: 2,
      image: img,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    
    },
    {
      id: 3,
      image: img,
      title: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
    
    }
  ]
  return (
    <div>
      <section className='p-[30px] flex justify-between sm:flex-col sm:p-[20px]'>
        <div className='flex flex-col gap-5 p-[20px] '>
          <h1 className='font-[600] text-[50px]'>Our Story</h1>
          <p className='font-[400]'> Launced in 2015, Exclusive is South Asia’s premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves <br /> 3 millioons customers across the region.  </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. <br /> Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div><img src={africans} alt="" /></div>
      </section>

      <section className='flex justify-evenly gap-5 sm:flex-col sm:p-[20px] mt-[70px]'>
        {
          data.map((el) => {
            return (
              <div key={el.id}>
                <Cards img={el.image} title={el.title} desc={el.desc} bg={el.bg} />
              </div>
            )
          })
        }
      </section>

      <section className='flex justify-evenly mt-[90px] gap-5 sm:flex-col p-[50px]'>
        {
          data2.map((el) => {
            return (
              <div key={el.id}>
                <Card2 img={el.image} title={el.title} desc={el.desc} bg={el.bg} />
              </div>
            )
          })
        }
      </section>


      <section className='flex justify-evenly gap-5 sm:flex-col sm:p-[20px] m-[100px] sm:m-5'>
        {
          data3.map((el) => {
            return (
              <div key={el.id}>
                <Cards img={el.image} title={el.title} desc={el.desc} bg={el.bg} />
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default About