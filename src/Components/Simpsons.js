import React from 'react';

function Simpsons({ simpson }) {
  return (
    simpson && (
      <div className='Simpsons'>
          <p>Quote: {simpson.quote}</p>
        <img src={simpson.image} alt={simpson.character} />
        <p>{simpson.character}</p>
      </div>
    )
  );
}

export default Simpsons;