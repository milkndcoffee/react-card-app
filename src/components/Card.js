import React from 'react';

const Card = ({ data }) => {
  console.log(data);
  return (
    <div style={cardContainer}>
      <div style={innerContainer}>
        <img alt='card-img' style={cardImgStyle} src={data.img} />
        <div style={cardDescStyle}>
          <h2 style={{fontSize: '10pt', margin: '0'}}>{data.title}</h2>
          <p style={{fontSize: '10pt'}}>{data.desc}</p>
          <a style={linkStyle} href={data.img}>source</a>
        </div>
      </div>
    </div>
  )
}
const cardContainer = {
  width: '440px',
  border: '1px solid #ccc',
  borderRadius: '2px',
  background: 'white',
  padding: '1rem'
}
const innerContainer = {
  borderRadius: '6px',
  background: 'rgb(249, 249, 249)'
}
const cardImgStyle = {
  background: 'black',
  objectFit: 'cover',
  width: '440px',
  height: '240px',
  borderRadius: '6px 6px 0px 0px'
}
const cardDescStyle = {
  padding: '.3rem'
}
const linkStyle={
  display:'block',
  textAlign: 'right',
  fontSize: '8pt',
  color: 'gray', 
  textDecoration: 'none'
}

export default Card
