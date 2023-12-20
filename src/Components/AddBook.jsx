import React from "react";
import BaseApp from "./baseApp";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useAppState } from "./Context/AppProvider";
import { useNavigate } from "react-router-dom";

const userSchemaValidation = yup.object({
  id: yup.string().required("Id required"),
  name: yup.string().required("Name required"),
  image: yup.string().required("Image URL required"),
  author: yup.string().required("Author name required"),
  description: yup.string().required("Description required").min(15, "Minimum 15 letters required"),
});

export default function AddBook() {
  const { book, setBook } = useAppState();
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      id: "",
      name: "",
      image: "",
      author: "",
      description: ""
    },
    validationSchema: userSchemaValidation,
    onSubmit: (newData) => {
      setBook([...book, newData]);
      navigate("/book");
    }
  });

  return (
    <BaseApp>
      <div className="container">
        <h2>Add Book</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id" style={{ color: errors.id && touched.id ? 'red' : 'black' }}>Id :</label>
            <input
              type="text"
              id="id"
              placeholder="ID"
              name="id"
              value={values.id}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ width: '900px', height: '40px' }}
            /><br />
            {touched.id && errors.id ? <p className="error-message">{errors.id}</p> : null}
          </div>

          <div className="form-group">
            <label htmlFor="name" style={{ color: errors.name && touched.name ? 'red' : 'black' }}>Name :</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ width: '900px', height: '40px' }}
            /><br />
            {touched.name && errors.name ? <p className="error-message">{errors.name}</p> : null}
          </div>

          <div className="form-group">
            <label htmlFor="image" style={{ color: errors.image && touched.image ? 'red' : 'black' }}>Image URL :</label>
            <input
              type="text"
              id="image"
              placeholder="Image URL"
              name="image"
              value={values.image}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ width: '900px', height: '40px' }}
            /><br />
            {touched.image && errors.image ? <p className="error-message">{errors.image}</p> : null}
          </div>

          <div className="form-group">
            <label htmlFor="author" style={{ color: errors.author && touched.author ? 'red' : 'black' }}>Author Name :</label>
            <input
              type="text"
              id="author"
              placeholder="Author"
              name="author"
              value={values.author}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ width: '900px', height: '40px' }}
            /><br />
            {touched.author && errors.author ? <p className="error-message">{errors.author}</p> : null}
          </div>

          <div className="form-group">
            <label htmlFor="description" style={{ color: errors.description && touched.description ? 'red' : 'black' }}>Description :</label>
            <textarea
              id="description"
              placeholder="Description"
              name="description"
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              style={{ width: '900px', height: '120px' }}
            /><br />
            {touched.description && errors.description ? <p className="error-message">{errors.description}</p> : null}
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </BaseApp>
  );
}