import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Layout from "./components/layout/layout";
import List from "./components/list/list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
