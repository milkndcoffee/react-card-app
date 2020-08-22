import React from 'react'

//TODO: Have a grid system so that i 
//will not utilize arrays here but on another component

const UserComment = ({ item, cardData }) => {

  return (
    <div className='userComment'>

      <div style={userContainerStyle}>
        <img alt='profile-pic' style={profilePicStyle}></img>
        <div style={containStyle}>
          <div>
            <div style={{ paddingLeft: '1rem' }}>
              <div style={topStyle}>
                <p style={usernameStyle}>{item.username}</p>
                <p style={{ fontSize: '8pt', color: 'gray' }}>{item.date}</p>
              </div>
              <p style={{ marginTop: '-.6rem', fontFamily: 'calibri' }}>{item.comment}</p>
            </div>

            {cardData}

          </div>
        </div>

      </div>
    </div>

  )
}

//Stylings
const userContainerStyle = {
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'row',
  padding: '.2rem',
  width: '532px',
  margin: '1rem'
}

const profilePicStyle = {
  margin: '.2rem',
  marginRight: '.3rem',
  width: '50px',
  height: '50px',
  borderRadius: '30px',
  background: 'gray'
}
const containStyle = {
}
const topStyle = {
  display: 'inline-flex',
  alignItems: 'center'
}
const usernameStyle = {
  fontSize: '13pt',
  fontWeight: 'bold',
  paddingRight: '1rem'
}


export default UserComment
