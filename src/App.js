import Home from "./components/Home";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='details/:category/:id' element={<Movie/>}/>
          <Route path='watchlist' element={<WatchList/>}/>
          <Route path='watched' element={<Watched/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
