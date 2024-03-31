import React from 'react'
import Card1 from './Cards/Card1'

const CyberSecurity = () => {
  const cardDatas = [
    {id:"1",img:"./src/assets/CS1.webp",cardTitle:"Non-Coding Jobs in Cybersecurity",cardBody:"By Jaishree Tomar",cardDate:"15 Mar, 2024" },
    {id:"2",img:"./src/assets/CS2.jpg",cardTitle:"Top 7 Cyber Security Attacks in Real Life",cardBody:"By Lahari Chandana",cardDate:"28 Mar, 2024"},
    {id:"3",img:"./src/assets/CS3.png",cardTitle:"How is Cyber Security Important To Our Lives ?",cardBody:"By GUVI Geek",cardDate:"23 Mar, 2024"  }
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