import React from 'react'

//TODO: Have a grid system so that i 
//will not utilize arrays here but on another component

const UserComment = ({ item }) => {
  return (
    <div style={wholeCardContainer}>
      <img alt='profile-pic' style={profilePicStyle}></img>
      <div style={containStyle}>

        <div>
          <div style={topStyle}>
            <p style={usernameStyle}>{item[0].username}</p>
            <p>{item[0].date}</p>
          </div>
          <p>{item[0].comment}</p>
          <div style={cardPlacementStyle}>
            <img alt='card-img' src={item[0].img}></img>
          </div>
          <div>
           <p>CARD INFO</p>
          </div>
        </div>
      </div>

    </div>
  )
}

const wholeCardContainer = {
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'row'
}
const profilePicStyle = {
  margin: '1rem',
}
const containStyle = {
  background: '#f4f4f4'
}
const topStyle = {
  background: 'gray',
  display: 'inline-flex',
  alignItems: 'center'
}
const usernameStyle = {
  fontSize: '13pt',
  fontWeight: 'bold',
  paddingRight: '1rem'
}
const cardPlacementStyle={
  background: 'black',
  width: '440px',
  height: '240px',
  borderRadius: '6px'
}

export default UserComment
