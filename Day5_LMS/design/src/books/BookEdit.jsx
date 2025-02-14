import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

export default function BookEdit() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const bookId = queryParams.get("id");

    const [book, setBook] = useState({ title: "", author: "", genre: "" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch book details when component mounts
    useEffect(() => {
        axios.get(`http://localhost:8080/books/${bookId}`)
            .then(response => {
                setBook(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("🚫 Book not found");
                setLoading(false);
            });
    }, [bookId]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:8080/books/${bookId}`, book);
            alert("✅ Book updated successfully!");
            navigate("/book/list"); // Redirect to book list
        } catch (error) {
            console.error("Error updating book:", error);
            alert("❌ Failed to update book.");
        }
    };

    return (
        <>
            <PageHeader />
            <h3>
                <button onClick={() => navigate(-1)} className="btn btn-light">Go Back</button> Edit Book
            </h3>
            <div className="container mt-5">
    {book ? (
        <div className="card shadow-lg border-0 rounded p-4" style={{ maxWidth: "600px", margin: "auto" }}>
            <div className="card-body">
                <h3 className="text-center text-primary fw-bold mb-4">✏️ Edit Book</h3>

                <div className="mb-3">
                    <label className="form-label fw-bold text-secondary">📚 Book Title:</label>
                    <input
                        type="text"
                        className="form-control border rounded-3 p-2"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        placeholder="Enter book title"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold text-secondary">✍️ Author:</label>
                    <input
                        type="text"
                        className="form-control border rounded-3 p-2"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        placeholder="Enter author name"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold text-secondary">🎭 Genre:</label>
                    <input
                        type="text"
                        className="form-control border rounded-3 p-2"
                        name="genre"
                        value={book.genre}
                        onChange={handleChange}
                        placeholder="Enter genre"
                    />
                </div>

                <div className="text-center">
                    <button 
                        className="btn btn-success px-4 py-2 shadow-sm fw-bold"
                        onClick={handleSave}
                    >
                        💾 Save Changes
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <h5 className="text-danger text-center fw-bold mt-4">🚫 Book not found</h5>
    )}
</div>

            <PageFooter />
        </>
    );
}
