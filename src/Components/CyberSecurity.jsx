import React from 'react'
import Card1 from './Cards/Card1'

const CyberSecurity = () => {
  const cardDatas = [
    {id:"1",img:"./src/assets/CS1.webp",cardTitle:"Non-Coding Jobs in Cybersecurity",cardBody:"By Jaishree Tomar" },
    {id:"2",img:"./src/assets/CS2.jpg",cardTitle:"Top 7 Cyber Security Attacks in Real Life",cardBody:"By Lahari Chandana" },
    {id:"3",img:"./src/assets/CS3.png",cardTitle:"How is Cyber Security Important To Our Lives ?",cardBody:"By GUVI Geek" }
  ]
  return (
    <div className='container'>
        <div className="row">
            {cardDatas.map(data=>(
              <div className='col-sm-12 col-md-6 col-lg-4  justify-content-center margin' key={data.id}>
              <Card1
              {...data}/>
              </div>
            ))}
        </div>
    </div>
  )
}

export default CyberSecurity