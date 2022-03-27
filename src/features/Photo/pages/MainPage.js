import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner/Banner';
import PhotoList from '../components/PhotoList/PhotoList';
import { removePhoto } from '../PhotoSlice';

MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePhotoEditClick = (photo) => {
    navigate(`../photo/${photo.id}`);
  };

  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action);
  };

  return (
    <div>
      <Banner imageUrl="photo" title="Your Awesome Photos" />
      <Link to="/photo/add" className="block py-5 mx-auto text-center ">
        <p className="inline-block p-5 font-bold transition-all bg-yellow-300 rounded-md hover:-translate-y-1 active:-translate-y-0">
          Add New Photo
        </p>
      </Link>

      <PhotoList
        photoList={photos}
        onPhotoEditClick={handlePhotoEditClick}
        onPhotoRemoveClick={handlePhotoRemoveClick}
      />
    </div>
  );
}

export default MainPage;
