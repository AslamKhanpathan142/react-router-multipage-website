import React from 'react'
import Style from './Detail.module.css'

const Detail = () => {
  const page = [
    {
      h3: 'Homepage',
      p: 'If you’re signed in, you’ll see a selection of popular films, reviews and lists from Letterboxd members. As you follow more people, we personalize this page to show what’s popular in your network.'
    },
    {
      h3: 'Films',
      p: 'This section shows which films our members are watching and reviewing the most. It’s also your starting point for browsing the whole database, by decade/year, genre, popularity, rating, streaming service and more.'
    },
    {
      h3: 'Lists',
      p: 'This section shows our most popular lists, and a selection of recently added content. From here you can create a list of your own, browse more popular lists, or browse by the tags applied to each by its creator.'
    },
    {
      h3: 'Members',
      p: 'Here you’ll find others whose content is being enjoyed most by our community. Click through to see if you like their style, or locate your real-life Facebook friends that also use Letterboxd.'
    }
  ]
  return (
    <>
    <div className="bg-dark mt-5">
    <h2 className="text-white text-center" id={Style.h2}>Here’s what you’ll find in our main sections…</h2>
    <div className="container d-flex justify-content-between align-items-center" id={Style.main}>
        
        {page.map((page) => (

        
        <div className={Style.cont}>
            <h3>{page.h3}</h3>
            <p>
              {page.p}
            </p>
        </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default Detail
