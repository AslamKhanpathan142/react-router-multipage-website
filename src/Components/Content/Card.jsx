import React from 'react'
import Styles from './Card.module.css'

const Card = () => {
    const Cont = [
        {
          h2: "Tell us what you’ve seen",
          p: "Get your Letterboxd underway by visiting our Popular section and marking a few films you’ve seen. Click the ‘eye’ on any film poster to tell us you’ve watched it (add a ‘like’ if you liked it and/or a rating). We add all watched titles to your Films tab and then we can show you reviews containing spoilers (usually hidden) and other cool stuff. If you’re Pro we compute detailed stats based on all your watched films (see below).  ",
          button: "Discover more now",
          img: "./card1.jpg",
        },
    
        {
          img: "./card2.jpg",
          h2: "Browse your watched films",
          p: "Now that you’ve added some films, you can find them in the Films tab of your profile. As you add more content, your profile starts to reflect your taste. You can also browse the films of other members, or the community, with Hide watched films activated to find more great films to watch.",
          button: "Watch Free",
        },

        {
            h2: "Save films to watch later",
            p: "One of our most-loved features, the Watchlist, lets you keep a list of films you want to see. Start in Most Anticipated and mark a few films you want to see—use the ‘clock’ on a film or review page, or open the options menu on any poster (shown opposite). If you subsequently log or mark a film as watched, we’ll move it from your Watchlist to your Films (and add it to your Diary, if you provide a date—more on that below).  ",
            button: "Discover more now",
            img: "./card3.jpg",
          },
      
          {
            img: "./card4.jpg",
            h2: "Your account, profile and settings",
            p: "Click your username (at the top of each page) for shortcuts to the main sections of your account. Your Profile, Films, Diary, Watchlist and other pages are here.You can customize your name, location, website, bio and favorite films in Settings. We use your X / Twitter avatar if you connect your account, or a Gravatar matching the email on your profile.",
            button: "Watch Free",
          },

          {
            h2: "Log a film",
            p: "Log a film to tell us you watched it on a particular date, and to attach a review, rating and tags. We put all films you log with a date into your Diary, a great reference for when it comes time to compile your year-end list.You can rate films without logging them too, either on a film or review page, or from the ‘more options’ menu on a poster.  ",
            button: "Discover more now",
            img: "./card5.jpg",
          },
      
          {
            img: "./card6.jpg",
            h2: "Following and activity",
            p: "The best way to find members to follow is by reading reviews of films you like, to identify the voices and opinions you dig. Our Members page lists popular accounts.As you follow more people, we create a personalized Activity stream full of reviews and recommendations from these members (and you’re bound to find new people to follow from the Likes included here). Use the Incoming tab to see who’s interacting with you, and upgrade to Pro to personalize the types of activity you see on each device.  ",
            button: "Watch Free",
          },

          {
            h2: "Make and share lists",
            p: "Lists are a great way to share a collection of related films, or to rank the films of your favorite genre, star, director or franchise. It’s fun to welcome suggestions for your lists from other members.Start a list on your Lists tab, then add films on the ‘Edit’ screen (or from the ‘more options’ menu on a poster). The first time you make a list public, it’s shared with your followers.  ",
            button: "Discover more now",
            img: "./card7.jpg",
          },
      
          {
            img: "./card8.jpg",
            h2: "Upgrade for stats + more!",
            p: "The more films you log on Letterboxd, the more ways we have to analyze your movie-watching habits. Upgrade to a Pro or Patron account and we’ll generate all-time stats based on every film you’ve added to your profile, and annual stats for each year with at least ten films logged.Stats include overview by week/year, highest rated decades, most watched and highest rated actors and directors, progress against milestone lists, genre, language and country breakdowns, and lots more.  ",
            button: "Watch Free",
          },
      ];
  return (
    <>
      {Cont.map((Cont, index) => (
      <div id={Styles.div} >
        <div className="container">
          {/* {Cont.map((Cont, index) => ( */}
            {/* <div className={index === 1 && "bg-dark"}> */}
              <div
                className="row d-flex justify-content-center align-items-center "
                id={Styles.main}
              >
                <div className="col-lg-6 ">
                  <h2 className={Styles.h2}>{Cont.h2}</h2>
                  <p className={Styles.p}>{Cont.p}</p>
                  <button
                    type="button"
                    class="btn btn-success"
                    id={Styles.buttn}
                  >
                    {Cont.button}
                  </button>
                </div>

                <div
                  className={`col-lg-6 ${index % 2 === 0 && 'order-first'}`}
                  id={Styles.imgDiv}
                >
                  <img src={Cont.img} alt="" id={Styles.img1} />
                </div>
              </div>
            </div>
          {/* ))} */}
        </div>
    //   </div>
       ))}
    </>
  )
}

export default Card
