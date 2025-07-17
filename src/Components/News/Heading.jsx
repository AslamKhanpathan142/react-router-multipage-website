import React from 'react'
import Style from './Heading.module.css'

const Heading = () => {
  return (
    <>
     <div className="container-fluid">
        <div className="row bg-dark" id={Style.div}>
            <h1 className="mt-5">Top Bollywood News</h1>
            <h5>New Movie "Stardom" Hits Theatres</h5>
            <p>The much-anticipated movie "Stardom" has finally hit theatres across India. Featuring some of Bollywood's biggest stars, this film is set to break box office records with its mix of action, drama, and romance. Early reviews praise the chemistry between the lead actors and the engaging storyline.</p>

        </div>
     </div>
    </>
  )
}

export default Heading
