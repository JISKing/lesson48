import "./App.css";
import Main from "./components/Main";
import Posts from "./components/Posts";
import Login from "./components/Login";
import SinglePost from './components/SinglePost';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <nav className="menu">
          <Link to="/">Main</Link>
          <Link to="/Posts">Posts</Link>
          <Link to="/Login">Login</Link>
        </nav>

        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/Posts" element={<Posts />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/news/:id' element={<SinglePost />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
