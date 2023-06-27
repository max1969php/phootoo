import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Thumbnails } from './pages/thumbnail'
import { Users } from "./pages/users";
import Navbar from './components/navbar'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Thumbnails />}/>
          <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
