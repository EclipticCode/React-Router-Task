import React from 'react'
import Card1 from './Cards/Card1'
import img1 from '../assets/FS1.webp'
import img2 from '../assets/FS2.jpg'
import img3 from '../assets/FS3.jpg'
import img4 from '../assets/DS1.webp'
import img5 from '../assets/DS2.jpg'
import img6 from '../assets/DS3.png'
import img7 from '../assets/CS1.webp'
import img8 from '../assets/CS2.jpg'
import img9 from '../assets/CS3.png'
import img10 from '../assets/BC1.jpeg'
import img11 from '../assets/BC2.webp'
import img12 from '../assets/BC3.webp'
const All = () => {
  const cardDatas = [
    { id: "1", img:img1, cardTitle: "Best Web Development Online Courses", cardBody: "By Isha Sharma", cardDate: "26 Mar, 2024" },
    { id: "10", img: img10, cardTitle: "A Guide To Learning Blockchain Technology", cardBody: "By Lukesh S", cardDate: "13 Feb, 2024" },
    { id: "2", img: img2, cardTitle: "6 Essential Preequisities For Learning ReactJS", cardBody: "By RamKumar", cardDate: "29 Mar, 2023" },
    { id: "5", img: img5, cardTitle: "Can A Commerce Student Do Data Science", cardBody: "By Saakshi Priyadarshini", cardDate: "25 Mar, 2024" },
    { id: "3", img: img3, cardTitle: "Best Full-Stack Development Project Ideas", cardBody: "By Isha Sharma", cardDate: "20 Mar, 2024" },
    { id: "12", img: img12, cardTitle: "Best Books to Learn Blockchain", cardBody: "By Meghana D", cardDate: "10 Mar, 2024" },
    { id: "4", img: img4, cardTitle: "Roles and Responsibilities of a Data Scientist", cardBody: "By Jaishree Tomar", cardDate: "18 Mar, 2024" },
    { id: "11", img:img11, cardTitle: "Non-Coding Jobs in Blockchain", cardBody: "By Jaishree Tomar", cardDate: "22 Mar, 2024" },
    { id: "6", img: img6, cardTitle: "A Complete Guide on Data Scientist | 2024", cardBody: "By Archana", cardDate: "09 Mar, 2024" },
    { id: "7", img: img7, cardTitle: "Non-Coding Jobs in Cybersecurity", cardBody: "By Jaishree Tomar", cardDate: "15 Mar, 2024" },
    { id: "8", img: img8, cardTitle: "Top 7 Cyber Security Attacks in Real Life", cardBody: "By Lahari Chandana", cardDate: "28 Mar, 2024" },
    { id: "9", img: img9, cardTitle: "How is Cyber Security Important To Our Lives ?", cardBody: "By GUVI Geek", cardDate: "23 Mar, 2024" },
  ]
  return (
    <div className='container-sm'>
      <div className="row">
        {cardDatas.map(data => (
          <div className='col-sm-12 col-md-6 col-lg-4 col-xl-3 justify-content-center align-items-center' key={data.id}>
            <Card1
              {...data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default All