import { useEffect, useState } from "react";

import axios from 'axios';
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

function BookList() {
    // const [books, setBooks] = useState([{id:'', title:'', genre:'', author:'', year:''}]);
    
    // const readAllBooks = async () => {
    //     try {
    //         const baseUrl = 'http://localhost:8080';
    //         const response = await axios.get(`${baseUrl}/books`);
    //         const queriedBooks = response.data;
    //         setBooks(queriedBooks);
    //     } catch(error) {
    //         alert('Server Error');
    //     }
    // };
    
    // const deleteBook = async (id) => {
    //     if(!confirm("Are you sure to delete?")) {
    //         return;
    //     }
    //     const baseUrl = "http://localhost:8080";
    //     try {
    //         const response = await axios.delete(`${baseUrl}/books/${id}`);
    //         alert(response.data.message);
    //         await readAllBooks();
    //     } catch(error) {
    //         alert('Server Error');
    //     }
    // };
    
    // useEffect(()=>{
    //     readAllBooks();
    // },[]);
    
    return (
        <>
            <PageHeader/>
            <h3>List of Books</h3>
            <div className="container">
                <table className="table table-success table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Author</th>
                            <th scope="col">Year</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody> 
                        {(books && books.length > 0) ? books.map(
                            (book) =>  {return (<tr key={book.id}>
                            <th scope="row">{book.id}</th>
                            <td>{book.title}</td>
                            <td>{book.genre}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td><a href={`/books/view/${book.id}`} 
                                className="btn btn-success">View</a>
                                &nbsp;
                                <a href={`/books/edit/${book.id}`} 
                                className="btn btn-warning">Edit</a>
                                &nbsp;
                                <button  
                                className="btn btn-danger"
                                onClick={()=>deleteBook(book.id)}>Delete</button></td>
                        </tr>);}
                        ) : <tr><td colSpan="6">No Data Found</td></tr>}
                    </tbody>
                </table>
            </div>
            <PageFooter/>
        </>
    );
}

export default BookList;
