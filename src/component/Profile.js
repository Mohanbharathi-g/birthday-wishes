import React, { useState } from 'react';
import data from '../data';

const Profile = () => {
  // console.log(datas);

  const [wish, setWish] = useState(data);

  // console.log(data);

  const deleteWish = (id) => {
    const updateDog = wish.filter((dog) => dog.id !== id);

    console.log(updateDog);

    setWish(updateDog);

    // setNumber;
  };

  return (
    <div>
      <h1>
        <span>{wish.length} </span>Birthday today
      </h1>
      <div className='profile'>
        {wish.map((dog) => {
          return (
            <div className='profile-main' key={dog.id}>
              <div className='profile-dog'>
                <img src={dog.image} alt='id' />
                <div className='name'>
                  <h2>{dog.name}</h2>
                  <h4>{dog.age}</h4>
                </div>
                <button
                  type='btn'
                  className='delete'
                  onClick={() => deleteWish(dog.id)}
                >
                  X
                </button>
              </div>
            </div>
          );
        })}

        <button type='button' className='button' onClick={() => setWish([])}>
          clear all
        </button>
      </div>
    </div>
  );
};

export default Profile;
