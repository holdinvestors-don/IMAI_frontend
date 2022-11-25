import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ChatRoom from "./pages/ChatRoom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatRoom />} />
        <Route path="/learn" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}
