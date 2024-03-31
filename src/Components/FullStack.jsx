import React from 'react'
import Card1 from './Cards/Card1'
const FullStack = () => {

  const cardDatas = [
    {id:"1",img:"./src/assets/FS1.webp",cardTitle:"Best Web Development Online Courses",cardBody:"By Isha Sharma",cardDate:"26 Mar, 2024" },
    {id:"2",img:"./src/assets/FS2.jpg",cardTitle:"6 Essential Preequisities For Learning ReactJS",cardBody:"By RamKumar",cardDate:"29 Mar, 2023" },
    {id:"3",img:"./src/assets/FS3.jpg",cardTitle:"Best Full-Stack Development Project Ideas",cardBody:"By Isha Sharma",cardDate:"20 Mar, 2024" }
  ]
  return (
    <div className='container'>
        <div className="row">
            {cardDatas.map(data=>(
              <div className='col-sm-12 col-md-6 col-lg-4 justify-content-center margin' key={data.id}>
              <Card1
              {...data}/>
              </div>
            ))}
        </div>
    </div>
  )
}

export default FullStack