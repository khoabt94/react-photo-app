import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Banner from '../../../components/Banner/Banner';
import PhotoForm from '../components/PhotoForm/PhotoForm';
import { addPhoto, updatePhoto } from '../PhotoSlice';
import Faker from '@faker-js/faker';

AddEditPage.propTypes = {};

const initialValues = {
  title: '',
  categoryId: 0,
  imageUrl: 'https://picsum.photos/id/1948/300/300',
};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const photoState = useSelector((state) => state.photos);

  const { photoId } = useParams();
  const isAddmode = !photoId;

  const photoQuery = !isAddmode
    ? photoState.find((el) => el.id === photoId)
    : initialValues;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddmode) {
          const photoSubmit = {
            ...values,
            id: Faker.datatype.uuid(),
          };
          const action = addPhoto(photoSubmit);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        navigate('../photo');
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div>
      <Banner imageUrl="add" title="Pick Your Amazing Photo" />

      <PhotoForm
        isAddmode={isAddmode}
        initialValue={photoQuery}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddEditPage;
