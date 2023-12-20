import React from "react";
import { useNavigate } from "react-router-dom";
import BaseApp from "./baseApp";
import { useAppState } from "./Context/AppProvider"; // Changed to useAppState

export default function BookDetails() {
  const { book, setBook } = useAppState();
  const navigate = useNavigate();

  const deleteBook = (id) => {
    const updatedBookList = book.filter((data) => data.id !== id);
    setBook(updatedBookList);
  };

  return (
    <BaseApp>
      <div className="card-container">
        {book.map((data, index) => (
          <div className="card" key={index}>
            <div className="img-container">
              <img src={data.image} alt="Book" />
            </div>
            <div className="book-details">
              <div>
                <h3>{data.name}</h3>
                <p>by {data.author}</p>
                <p className="description">{data.description}</p>
              </div>

              <div>
                <button
                  onClick={() => navigate(`/book/edit/${data.id}`)}
                  type="button"
                  className="btn btn-primary"
                  style={{padding:"3px",color:"white",background:"green",border:"1px solid white transparent",margin:"2px",borderRadius:"4px"}}
                >
                  Edit
                </button>{" "}
                {/* Added space for better readability */}
                <button
                  onClick={() => deleteBook(data.id)}
                  type="button"
                  className="btn btn-danger" 
                  style={{padding:"3px" , color:"white",background:"red", border:"1px solid white transparent", margin:"2px",borderRadius:"4px"}}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BaseApp>
  );
}