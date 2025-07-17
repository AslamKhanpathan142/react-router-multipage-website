import React from 'react'
import Styles from './Partner.module.css';

const Partner = () => {
    const part = [
        {
            img: './part1.png'
        },
        {
            img: './part2.png'
        },
        {
            img: './part3.png'
        },
        {
            img: './part4.png'
        },
        {
            img: './part5.png'
        },
        {
            img: './part6.png'
        },
        {
            img: './part7.png'
        }
    ]
  return (
    <>
    <div className={Styles.maindiv}>
    <h1 className="text-center text-white mt-5 mb-5">Proud Partners with:</h1>
    <div className="container d-flex align-items-center justify-content-evenly">
        
        {part.map((part) => (
          <div className={Styles.div}>
            <img src={part.img} alt="" />
          </div>
        ))} 
      </div>
      </div>
    </>
  )
}

export default Partner
