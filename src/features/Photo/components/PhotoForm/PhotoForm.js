import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import InputField from '../CustomField/InputField';
import PHOTO_CATEGORY_OPTIONS from '../CustomField/options';
import RandomPhoto from '../CustomField/RandomPhoto';
import SelectField from '../CustomField/SelectField';

const validationSchema = yup.object({
  title: yup.string().required('Required').max(20, 'No more than 20 letters'),
  categoryId: yup.number().required('Please choose an option'),
  // imageUrl: yup.string().required('Please choose an image'),
});

const PhotoForm = (props) => {
  return (
    <Formik
      initialValues={props.initialValue}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        return (
          <Form className="w-full max-w-xl p-10 mx-auto my-10 border border-gray-300 rounded-lg shadow-sm">
            <InputField
              name="title"
              id="titleId"
              placeholder="Eg: Wow nature ..."
              label="Title"
              type="text"
            />

            <SelectField
              label="Category"
              id="categoryId"
              name="categoryId"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField name="imageUrl" component={RandomPhoto} />

            <div>
              <button
                type="submit"
                className="inline-block w-[200px] px-4 py-2 rounded-md bg-pink-200"
              >
                {formikProps.isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                  `${props.isAddmode ? 'Add To Album' : 'Update Photo'}`
                )}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;
