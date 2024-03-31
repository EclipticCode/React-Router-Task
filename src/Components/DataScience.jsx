import React from 'react'
import Card1 from './Cards/Card1'

const DataScience = () => {
    const cardDatas = [
    {id:"1",img:"./src/assets/DS1.webp",cardTitle:"Roles and REsponsibilities of a Data Scientist",cardBody:"By Jaishree Tomar" },
    {id:"2",img:"./src/assets/DS2.jpg",cardTitle:"Can A Commerce Student Do Data Science",cardBody:"By Saakshi Priyadarshini" },
    {id:"3",img:"./src/assets/DS3.png",cardTitle:"A Complete Guide on Data Scientist | 2024",cardBody:"By Archana" }
    
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

export default DataScience