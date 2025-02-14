

import PageFooter from "../Footer/PageFooter";
import PageHeader from "../Header/PageHeader";






function BookView() {
    

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
          <PageFooter/>
        </>
    );
}

export default BookView;
