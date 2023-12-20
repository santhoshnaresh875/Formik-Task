import React, { useEffect } from "react";
import BaseApp from "./baseApp";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useAppState } from "./Context/AppProvider";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import {data} from "./data/data"; // Import the data array

const userSchemaValidation = yup.object({
    id: yup.number().required("Id required"),
    name: yup.string().required("Name required"),
    image: yup.string().required("Image URL required"),
    author: yup.string().required("Author name required"),
    description: yup.string().required("Description required").min(15, "Minimum 15 letters required"),
});

const EditBook = () => {
    const { book, setBook } = useAppState();
    const navigate = useNavigate();
    const { id } = useParams();
    const idx = parseInt(id);

    // Find the selectedBook based on the provided ID
    const selectedBook = book.find((data) => data.id === idx) || {};

    // Find the index of the selectedBook
    const indexSelectedBook = book.findIndex((data) => data.id === idx);

    // Formik validation
    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
        resetForm // Added resetForm
    } = useFormik({
        initialValues: selectedBook,
        validationSchema: userSchemaValidation,
        onSubmit: (newData) => {
            const updatedBookList = [...book];
            updatedBookList[indexSelectedBook] = newData;
            setBook(updatedBookList);
            resetForm(); // Reset the form
            navigate("/book");
        }
    });

    // Fetch data when the component mounts
    useEffect(() => {
        // Find the book from the static data
        const selectedBookData = data.find((book) => book.id === String(idx));

        // If the book is found, set the form values with the fetched data
        if (selectedBookData) {
            values.id = selectedBookData.id;
            values.name = selectedBookData.name;
            values.image = selectedBookData.image;
            values.author = selectedBookData.author;
            values.description = selectedBookData.description;
        }
    }, [idx, values]);

    // Reusable input field component
    const renderInputField = (name, label, placeholder) => (
        <div className="form-group">
            <label>{label} :</label>
            <input
                className="form-control"
                placeholder={placeholder}
                name={name}
                value={values[name]}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {touched[name] && errors[name] ? <p style={{ color: "crimson" }}>{errors[name]}</p> : null}
        </div>
    );

    return (
        <BaseApp>
            <form className="form" onSubmit={handleSubmit}>
                {renderInputField("id", "Id", "ID")}<br /><br />
                {renderInputField("name", "Name", "Name")}<br /><br />
                {renderInputField("image", "Image URL", "Image URL")}<br /><br />
                {renderInputField("author", "Author Name", "Author")}<br /><br />
                {renderInputField("description", "Description", "Description")}<br /><br />

                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </BaseApp>
    );
};

// PropTypes for documenting the expected types of props
EditBook.propTypes = {
    book: PropTypes.array.isRequired,
    setBook: PropTypes.func.isRequired,
};

export default EditBook;