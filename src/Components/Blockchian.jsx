import React from 'react'
import Card1 from './Cards/Card1'

const Blockchian = () => {
  const cardDatas = [
    { id: "1", img: "./src/assets/BC1.jpeg", cardTitle: "A Guide To Learning Blockchain Technology", cardBody: "By Lukesh S", cardDate: "13 Feb, 2024" },
    { id: "2", img: "./src/assets/BC2.webp", cardTitle: "Non-Coding Jobs in Blockchain", cardBody: "By Jaishree Tomar", cardDate: "22 Mar, 2024" },
    { id: "3", img: "./src/assets/BC3.webp", cardTitle: "Best Books to Learn Blockchain", cardBody: "By Meghana D", cardDate: "10 Mar, 2024" }
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