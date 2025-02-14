import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from 'axios';
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";


function BookView() {
    const [book, setBook] = useState({ id: '', title: '', genre: '', author: '', year: '' });
    const { id } = useParams();

    useEffect(() => {
        const readById = async () => {
            const baseUrl = "http://localhost:8080";
            try {
                const response = await axios.get(`${baseUrl}/books/${id}`);
                setBook(response.data);
            } catch (error) {
                alert('Server Error');
            }
        };
        readById();
    }, [id]);

    return (
        <>
            <PageHeader/>
            <h3><a href="/books/list" className="btn btn-light">Go Back</a> View Book</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label className="form-label">Title:</label>
                    <div className="form-control bg-light">{book.title}</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Genre:</label>
                    <div className="form-control bg-light">{book.genre}</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Author:</label>
                    <div className="form-control bg-light">{book.author}</div>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Year of Publication:</label>
                    <div className="form-control bg-light">{book.year}</div>
                </div>
            </div>
            <PageFooter />
        </>
    );
}

export default BookView;
