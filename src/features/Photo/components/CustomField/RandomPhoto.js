import { useField, set } from 'formik';
import React, { useState } from 'react';

const getRandomUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

const RandomPhoto = ({ field, form }) => {
  const { name, value } = field;

  const handlePhotoClick = (imageUrl) => {
    form.setFieldValue(name, imageUrl);
  };

  return (
    <RandomPhotoChild
      name={name}
      imageUrl={value}
      onPhotoClick={handlePhotoClick}
    ></RandomPhotoChild>
  );
};

const RandomPhotoChild = ({ onPhotoClick, imageUrl }) => {
  const handleRandomClick = () => {
    const result = getRandomUrl();
    onPhotoClick(result);
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <label>Photo</label>
      <div className="mb-2">
        <button
          type="button"
          onClick={handleRandomClick}
          className="w-[200px] inline-block px-4 py-2 rounded-md bg-pink-200"
        >
          Random a photo
        </button>
      </div>
      <div>
        <div className="w-[200px] h-[200px]">
          <img
            src={imageUrl}
            className="object-cover w-full h-full rounded-md"
            alt="Please try another image"
            // onError={(e) => (e.target.src = getRandomUrl())}
          />
        </div>
      </div>
    </div>
  );
};

export default RandomPhoto;
