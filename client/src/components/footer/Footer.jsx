import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
Greetings! I'm Rajat Verma, and I'm thrilled to present my Blog Website Project created using the MERN stack. This project marks my maiden voyage into full-stack development, and I've poured my heart and soul into its creation. I sincerely hope you all will appreciate and enjoy this Blog website. Feel free to express your thoughts, share your experiences, and engage wholeheartedly. Let's come together to support and inspire one another. So, without further ado, let's dive in and make the most of this platform!
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 83032 31225</span>
          <span>GitHub: rajatHere01</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: Rourkela, Odisha</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer