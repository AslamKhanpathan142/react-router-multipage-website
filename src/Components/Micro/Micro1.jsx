import React from 'react'
import style from './Micro1.module.css'

const Micro1 = () => {
  return (
    <>
        <div className="container d-flex align-items-center mt-5" id={style.mic}>
            <div className="d-flex justify-content-center align-items-center" id={style.con1}>
                <div className={style.text}>
                    <h2 className="mb-3">Watch the latest movies and TV shows wherever you go</h2>
                    <p>With Microsoft Movies & TV, you can rent or buy the latest hit movies and commercial-free TV shows and watch them using the Movies & TV app, on your Xbox console and your Windows device. With our huge catalogue of entertainment content, you’ll always find something great to watch.</p>

                    <a href="#">▷ Watch Now</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Micro1
