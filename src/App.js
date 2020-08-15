import React from 'react';
import UserComment from './components/UserComment';

import './App.css';

function App() {
  //const[state, setState] = useState('0');
  const state = {
    cardData: [
      {
        id: 0,
        img: 'pictures/flowers-5479950_1920.jpg',
        title: 'Flowers!',
        desc: 'A beautiful picture containing flowers flowering in the foreground relished by grasses.'
      }
    ],
    userData: [
      {
        id: 0,
        cardId: 0,
        username: 'fakeguy01',
        comment: 'woah, these flowers r cool',
        date: '08-15-2020'
      }
    ]
  }


  return (
    <div className="container">
      <UserComment item={state.userData} />
    </div>
  );
}

export default App;
