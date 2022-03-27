import React from 'react';
import '../PhotoCard/PhotoCard.scss';

function PhotoCard({ photo, onEditClick, onRemoveClick }) {
  return (
    <div className="photo">
      <img
        src={photo.imageUrl}
        alt={photo.title}
        className="object-cover w-full h-full group-hover:scale-125"
      />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <button
              onClick={() => onEditClick(photo)}
              className="px-2 py-1 text-gray-700 bg-yellow-400 rounded-md"
            >
              Edit
            </button>
          </div>

          <div>
            <button
              onClick={() => onRemoveClick(photo)}
              className="px-2 py-1 text-gray-700 bg-red-400 rounded-md"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
