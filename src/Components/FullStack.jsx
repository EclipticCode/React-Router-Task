import React from 'react'
import Card1 from './Cards/Card1'
// import './Card1.css'

const FullStack = () => {

  const cardDatas = [
    {id:"1",img:"./src/assets/FS1.jpg",cardTitle:"Best Web Development Roadmap for Beginners 2024 ",cardBody:"By Isha Sharma" },
    {id:"2",img:"./src/assets/FS2.jpg",cardTitle:"6 Essential Preequisities For Learning ReactJS",cardBody:"By RamKumar" },
    {id:"3",img:"./src/assets/FS3.jpg",cardTitle:"Best Full-Stack Development Project Ideas",cardBody:"By Isha Sharma" }
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