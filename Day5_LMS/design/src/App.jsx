import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import BookList from "./books/BookList";
import BookCreate from "./books/BookCreate";
import BookView from "./books/BookView";

function App() {
    const [books, setBooks] = useState([]);

    // Load books from localStorage when the app starts
    useEffect(() => {
        const storedBooks = localStorage.getItem("books");
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
    }, []);

    // Save books to localStorage whenever the state updates
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);

    const addBook = (newBook) => {
        setBooks([...books, newBook]);
    };

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BookList books={books} />} />
                    <Route path="/book/list" element={<BookList books={books} />} />
                    <Route path="/book/create" element={<BookCreate onAddBook={addBook} />} />
                    <Route path="/book/view" element={<BookView books={books} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
