import { Link } from "react-router-dom";
import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";

export default function BookList({ books }) {
    return (
        <>
            <PageHeader />
            <h3>Book List</h3>
            <div className="container">
                <Link to="/book/create" className="btn btn-primary mb-3">Add Book</Link>
                <table className="table table-success table-striped">
                    <thead>
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
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.genre}</td>
                                    <td>
                                        <Link className="btn btn-success me-2" to={`/book/view?id=${book.id}`}>View</Link>
                                        <Link className="btn btn-warning" to={`/book/edit?id=${book.id}`}>Edit</Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="5" className="text-center">No books available</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            <PageFooter />
        </>
    );
}
