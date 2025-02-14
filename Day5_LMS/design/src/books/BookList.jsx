import { Link } from "react-router-dom";
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

export default function BookList({ books }) {
  return (
    
    <>
      <PageHeader />
      <div className="container text-center mt-4">
    <marquee 
        width="100%" 
        direction="left" 
        height="100px" 
        style={{
            color: "#ffcc00", 
            fontSize: "32px", 
            fontWeight: "bold", 
            fontFamily: "'Comic Sans MS', cursive, sans-serif",
            backgroundColor: "#222",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(255, 204, 0, 0.5)"
        }}
    >
        📚 Book List 📚
    </marquee>
</div>



     <div className="container mt-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-primary fw-bold">📚 Book List</h2>
        <Link to="/book/create" className="btn btn-primary shadow-lg px-4 py-2">
            ➕ Add Book
        </Link>
    </div>

    <div className="table-responsive">
        <table className="table table-hover table-bordered shadow-lg rounded text-center">
            <thead className="bg-dark text-light">
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.length > 0 ? (
                    books.map((book) => (
                        <tr key={book.id} className="align-middle">
                            <td className="fw-bold">{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>
                                <Link className="btn btn-success me-2 shadow-sm" to={`/book/view?id=${book.id}`}>
                                    👁️ View
                                </Link>
                                <Link className="btn btn-warning shadow-sm" to={`/book/edit?id=${book.id}`}>
                                    ✏️ Edit
                                </Link>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5" className="text-center text-danger fw-bold py-3">
                            🚫 No books available
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
</div>

      <PageFooter />
    </>
  );
}
