import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import BookDetails from './Components/BookDetails';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';
import { AppProvider } from './Components/Context/AppProvider';

function App() {
  return (
    <div className="App">
      <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/edit/:id" element={<EditBook />} />
          <Route path="/book/add" element={<AddBook />} />
          <Route path="/book" element={<BookDetails />} />
        </Routes>
      </Router>
      </AppProvider>
    </div>
  );
}

export default App;