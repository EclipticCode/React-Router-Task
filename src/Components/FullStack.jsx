import React from 'react'
import Card1 from './Cards/Card1'
import img1 from '../assets/FS1.webp'
import img2 from '../assets/FS2.jpg'
import img3 from '../assets/FS3.jpg'
const FullStack = () => {

  const cardDatas = [
    {id:"1",img:img1,cardTitle:"Best Web Development Online Courses",cardBody:"By Isha Sharma",cardDate:"26 Mar, 2024" },
    {id:"2",img:img2,cardTitle:"6 Essential Preequisities For Learning ReactJS",cardBody:"By RamKumar",cardDate:"29 Mar, 2023" },
    {id:"3",img:img3,cardTitle:"Best Full-Stack Development Project Ideas",cardBody:"By Isha Sharma",cardDate:"20 Mar, 2024" }
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