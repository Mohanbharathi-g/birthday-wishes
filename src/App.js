import React, { useState } from 'react';
import './App.css';

import data from './data';

import Profile from './component/Profile';

const App = () => {
  return (
    <div className='main-section'>
      <Profile />
    </div>
  );
};

export default App;
