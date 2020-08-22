import React from 'react'
import UserComment from './UserComment'
import Card from './Card'



const UserCommentGrid = ({ items }) => {

  const findCard = (value) => {
    return items.cardData
      .find(
        function (card) { return card.id === value }
      );
  }

  return (
    <section className='userCommentGrid'>
      {items.userData.map((item) => (
        <UserComment 
          key={item.id} 
          item={item}
          cardData={<Card data={findCard(item.cardId)} />}

        />
      ))}
    </section>
  )
}

export default UserCommentGrid
