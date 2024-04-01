import React from 'react'
import Card1 from './Cards/Card1'
import img10 from '../assets/BC1.jpeg'
import img11 from '../assets/BC2.webp'
import img12 from '../assets/BC3.webp'

const Blockchian = () => {
  const cardDatas = [
    { id: "1", img: img12, cardTitle: "A Guide To Learning Blockchain Technology", cardBody: "By Lukesh S", cardDate: "13 Feb, 2024" },
    { id: "2", img: img10, cardTitle: "Non-Coding Jobs in Blockchain", cardBody: "By Jaishree Tomar", cardDate: "22 Mar, 2024" },
    { id: "3", img: img11, cardTitle: "Best Books to Learn Blockchain", cardBody: "By Meghana D", cardDate: "10 Mar, 2024" }
  ]
  return (
    <div className='container'>
      <div className="row">
        {cardDatas.map(data => (
          <div className='col-sm-12 col-md-6 col-lg-4 justify-content-center margin' key={data.id}>
            <Card1
              {...data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blockchian