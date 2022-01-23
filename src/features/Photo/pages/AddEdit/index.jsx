import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { randomNumber } from "utils/common";
import "./styles.scss";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) => {
    const foundPhoto = state.photos.find((x) => x.id === +photoId);
    console.log({ photos: state.photos, photoId, foundPhoto });
    return foundPhoto;
  });
  console.log({ photoId, editedPhoto });

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;
  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form submit: ", values);

      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          const action = addPhoto(newPhoto);
          console.log({ action });
          dispatch(action);
        } else {
          // Do something here
          const action = updatePhoto(values);
          dispatch(action);
        }
      }, 2000);
      history.push("/photos");
      resolve(true);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEditPage;
