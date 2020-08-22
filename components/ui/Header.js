import React from 'react'

export const Header = () => {
  return (
    <div style={headerStyle}>
      <h1>react-card-app</h1>
      <h3>a React Project of creating cards to study how to utilize react.</h3>
      <p>Special thanks to Dave Ceddia from his article <a href="https://daveceddia.com/react-practice-projects/">6 Fun React Project Ideas.</a> This
      was the first project he listed on his site and I thought to myself this would be fun to do. <br></br><br></br> 
      Although I am satisfied with what I have done so far,
      I may try to encorporate parts like a "retweet" or "like" button. But in doing so they may just be empty functions of a button. Other plans
      would include things such as a mobile viewport format and fetching json information from another site.
      </p>
      <a href="https://github.com/milkndcoffee/react-card-app">Access the source code here!</a>
    </div>
  )
}

const headerStyle = {
  width: "30rem"
}

export default Header
