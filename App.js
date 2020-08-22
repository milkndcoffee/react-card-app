import React from 'react';
import UserCommentGrid from './components/UserCommentGrid';
import Header from './components/ui/Header';

import './App.css';

function App() {
  //const[state, setState] = useState('0');
  const state = {
    cardData: [
      {
        id: 0,
        img: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        title: 'Sunflowers!',
        desc: 'A beautiful picture containing a bright surplus of sunflowers'
      },
      {
        id: 1,
        img: 'https://images.unsplash.com/photo-1546201483-a0fa9e5ed258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        title: 'Bulldawg',
        desc: 'Look at this photogenic bulldog! One of the cutest in the world'
      },
      {
        id: 2,
        img: 'https://images.unsplash.com/photo-1519077204685-ed90d0cc05b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
        title: 'Ramen',
        desc: 'What makes ramen so unique from other foods? Click on the article and find out now!'
      }
    ],
    userData: [
      {
        id: 0,
        cardId: 0,
        username: 'fakeguy01',
        comment: 'woah, these flowers r cool',
        date: '08-15-2020'
      },
      {
        id: 1,
        cardId: 2,
        username: 'ramenlover',
        comment: 'ugh, this article is all wrong!! what a disgrace to ramen lovers all around the world!!!',
        date: '08-15-2020'
      },
      {
        id: 2,
        cardId: 1,
        username: 'sophine',
        comment: 'i need me one of these',
        date: '08-14-2020'
      },
      {
        id: 3,
        cardId: 0,
        username: '5unfl0w3r_h4t3r',
        comment: 'so ugly lmao wym @fakeguy01',
        date: '08-21-2020'
      }
    ]
  }

  //.<UserComment item={state.userData} />
  

  return (
    <div className="container">
      <Header />
      <UserCommentGrid items={state} />
    </div>
  );
}

export default App;
