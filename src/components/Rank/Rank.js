import React from 'react';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className='white f3'>
        {`${name}, Your Current Image Entry Count is...`}
      </div>
      <div className='white f1'>
        {entries}
      </div>
    </div>
  );
}

export default Rank;