import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

export default function BookCreate({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!title || !author || !genre) {
      alert("Please fill all fields!");
      return;
    }

    try {
        await axios.post("http://localhost:8080/books", { title, author, genre });
        alert("✅ Book added successfully!");
        navigate("/book/list"); // Redirect to book list
      } catch (error) {
        console.error("Error adding book:", error);
        alert("❌ Failed to add book.");
      }
    };

  return (
    <>
      <PageHeader />
      <h3 className="d-flex align-items-center gap-3">
        <a
          href="/"
          className="btn btn-outline-primary fw-bold shadow-sm"
          style={{ borderRadius: "8px", transition: "0.3s" }}
        >
          ⬅ Go Back
        </a>
        <span className="text-primary fw-bold">📖 Add Book</span>
      </h3>

      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="card shadow-lg p-4"
          style={{ width: "40rem", borderRadius: "10px" }}
        >
          <h3 className="text-center text-primary mb-4">📚 Add a New Book</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="title" className="form-label fw-bold">
                📖 Book Title:
              </label>
              <input
                type="text"
                className="form-control border-primary shadow-sm"
                id="title"
                placeholder="Enter book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="author" className="form-label fw-bold">
                ✍️ Author:
              </label>
              <input
                type="text"
                className="form-control border-success shadow-sm"
                id="author"
                placeholder="Enter author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="genre" className="form-label fw-bold">
                📂 Genre:
              </label>
              <input
                type="text"
                className="form-control border-warning shadow-sm"
                id="genre"
                placeholder="Enter book genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold"
              style={{ borderRadius: "8px", transition: "0.3s" }}
            >
              ➕ Add Book
            </button>
          </form>
        </div>
      </div>

      <PageFooter />
    </>
  );
}