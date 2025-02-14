import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

export default function BookView() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const bookId = queryParams.get("id");

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch book details from MongoDB when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:8080/books/${bookId}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("🚫 Book not found");
                setLoading(false);
            });
    }, [bookId]);

    return (
        <>
            <PageHeader />
            <h3>
                <button onClick={() => navigate(-1)} className="btn btn-light">⬅ Go Back</button> View Book
            </h3>

            <div className="container mt-5">
                {loading ? (
                    <h5 className="text-primary text-center">⏳ Loading book details...</h5>
                ) : error ? (
                    <h5 className="text-danger text-center fw-bold mt-4">{error}</h5>
                ) : (
                    <div className="card shadow-lg border-0 rounded p-4" style={{ maxWidth: "600px", margin: "auto" }}>
                        <div className="card-body">
                            <h3 className="text-center text-primary fw-bold mb-4">📖 Book Details</h3>

                            <div className="mb-3">
                                <label className="form-label fw-bold text-secondary">📚 Title:</label>
                                <div className="form-control border-0 bg-light">{book.title}</div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold text-secondary">✍️ Author:</label>
                                <div className="form-control border-0 bg-light">{book.author}</div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold text-secondary">📂 Genre:</label>
                                <div className="form-control border-0 bg-light">{book.genre}</div>
                            </div>

                            <div className="text-center">
                                <button 
                                    className="btn btn-warning px-4 py-2 shadow-sm fw-bold"
                                    onClick={() => navigate(`/book/edit?id=${book.id}`)}
                                >
                                    ✏️ Edit Book
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <PageFooter />
        </>
    );
}
