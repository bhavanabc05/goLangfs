import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

function BookCreate() {
    // const [book, setBook] = useState({title:'', genre:'', author:'', year:''});
    // const navigate = useNavigate();

    // const txtBoxOnChange = event => {
    //     const updatableBook = {...book};
    //     updatableBook[event.target.id] = event.target.value;
    //     setBook(updatableBook);
    // };

    // const createBook = async () => {
    //     const baseUrl = "http://localhost:8080";
    //     try {
    //         const response = await axios.post(`${baseUrl}/books`, {...book});
    //         const createdBook = response.data.book;
    //         setBook(createdBook);
    //         alert(response.data.message);
    //         navigate('/books/list');
    //     } catch(error) {
    //         alert('Server Error');
    //     }
    // };
    
    return(
        <>
           <PageHeader/>     
            <h3><a href="/books/list" className="btn btn-danger">Go Back</a> Add Book</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" 
                        placeholder="Please enter book title"
                        value={book.title} 
                        onChange={txtBoxOnChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="genre" className="form-label">Genre:</label>
                    <input type="text" className="form-control" id="genre" 
                        placeholder="Please enter book genre"
                        value={book.genre} 
                        onChange={txtBoxOnChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="author" className="form-label">Author:</label>
                    <input type="text" className="form-control" id="author" 
                        placeholder="Please enter author name"
                        value={book.author} 
                        onChange={txtBoxOnChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="year" className="form-label">Year of Publication:</label>
                    <input type="text" className="form-control" id="year" 
                        placeholder="Please enter year of publication"
                        value={book.year} 
                        onChange={txtBoxOnChange}/>
                </div>
                <button className="btn btn-primary" onClick={createBook}>Create Book</button>
            </div>
            <PageFooter/>
        </>
    );
}

export default BookCreate;
