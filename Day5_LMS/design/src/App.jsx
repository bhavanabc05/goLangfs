import BookView from "./books/BookView"
import BookList from "./books/BookList"
import BookCreate from "./books/BookCreate"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<BookList/>}/>
            <Route path="/book/list" element={<BookList/>}/>
            <Route path="/book/create" element={<BookCreate/>}/>
            <Route path="/book/view" element={<BookView/>}/>
            <Route path="book/book/view" element={<BookView/>}/>
            <Route path="book/book/create" element={<BookCreate/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;