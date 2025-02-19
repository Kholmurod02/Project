import { Card } from '@mui/material'
import React from 'react'

const CategoryCard = ({ data }) => {
    return (
        <div className='flex gap-10'>
            {
                data.map((el) => {
                    return (
                        <div >
                            <Card key={el.id} className='flex flex-col p-[30px]'>
                                <img src={el.img} alt="" />
                                <h1>{el.title}</h1>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryCard