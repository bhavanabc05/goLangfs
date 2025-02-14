import BookView from "./books/BookView"
import BookList from "./books/BookList"
import BookAdd from "./books/BookAdd"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<BookList/>}/>
            <Route path="/book/list" element={<BookList/>}/>
            <Route path="/book/Add" element={<BookAdd/>}/>
            <Route path="/book/view" element={<BookView/>}/>
            <Route path="book/book/view" element={<BookView/>}/>
            <Route path="book/book/Add" element={<BookAdd/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App;