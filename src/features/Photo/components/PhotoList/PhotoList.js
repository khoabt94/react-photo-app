import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

function PhotoList({ photoList, onPhotoEditClick, onPhotoRemoveClick }) {
  return (
    <div className="grid w-full max-w-4xl grid-cols-3 gap-6 mx-auto">
      {photoList.map((photo) => (
        <div key={photo.id}>
          <PhotoCard
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </div>
      ))}
    </div>
  );
}

export default PhotoList;
