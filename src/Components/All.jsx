import React from 'react'
import Card1 from './Cards/Card1'

const All = () => {
  const cardDatas = [
    {id:"1",img:"./src/assets/FS1.webp",cardTitle:"Best Web Development Online Courses",cardBody:"By Isha Sharma" },
    {id:"2",img:"./src/assets/FS2.jpg",cardTitle:"6 Essential Preequisities For Learning ReactJS",cardBody:"By RamKumar" },
    {id:"3",img:"./src/assets/FS3.jpg",cardTitle:"Best Full-Stack Development Project Ideas",cardBody:"By Isha Sharma" },
    {id:"4",img:"./src/assets/DS1.webp",cardTitle:"Roles and Responsibilities of a Data Scientist",cardBody:"By Jaishree Tomar" },
    {id:"5",img:"./src/assets/DS2.jpg",cardTitle:"Can A Commerce Student Do Data Science",cardBody:"By Saakshi Priyadarshini" },
    {id:"6",img:"./src/assets/DS3.png",cardTitle:"A Complete Guide on Data Scientist | 2024",cardBody:"By Archana" },
    {id:"7",img:"./src/assets/CS1.webp",cardTitle:"Non-Coding Jobs in Cybersecurity",cardBody:"By Jaishree Tomar" },
    {id:"8",img:"./src/assets/CS2.jpg",cardTitle:"Top 7 Cyber Security Attacks in Real Life",cardBody:"By Lahari Chandana" },
    {id:"9",img:"./src/assets/CS3.png",cardTitle:"How is Cyber Security Important To Our Lives ?",cardBody:"By GUVI Geek" },
    {id:"10",img:"./src/assets/BC1.jpeg",cardTitle:"A Guide To Learning Blockchain Technology",cardBody:"By Lukesh S" },
    {id:"11",img:"./src/assets/BC2.webp",cardTitle:"Non-Coding Jobs in Blockchain",cardBody:"By Jaishree Tomar" },
    {id:"12",img:"./src/assets/BC3.webp",cardTitle:"Best Books to Learn Blockchain",cardBody:"By Meghana D" },
  ]
  return (
    <div className='container'>
        <div className="row">
            {cardDatas.map(data=>(
              <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center margin' key={data.id}>
              <Card1
              {...data}/>
              </div>
            ))}
        </div>
    </div>
  )
}

export default All