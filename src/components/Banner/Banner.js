import React from 'react';
import OrangeBackground from './images/orange-bg.jpg';
import PinkBackground from './images/pink-bg.jpg';

const BACKGROUND = {
  photo: OrangeBackground,
  add: PinkBackground,
};

const Banner = ({ imageUrl, title }) => {
  return (
    <div
      className="w-full h-[300px] banner bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${BACKGROUND[imageUrl]})`,
      }}
    >
      <h1 className="font-bold text-white/90 text-4xl">{title}</h1>
    </div>
  );
};

export default Banner;
