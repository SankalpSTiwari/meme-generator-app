import React, { useEffect } from 'react';
import MemeCard from '../components/Card';
import { getAllMemes } from '../api/memes';

const Homepage = () => {
  useEffect(() => {
    getAllMemes().then((memes) => console.log(memes));
  });
  return (
    <div>
      <MemeCard />
    </div>
  );
};

export default Homepage;
