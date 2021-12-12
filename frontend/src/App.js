import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarAdmin from "./components/NavbarAdmin.js";
import TableTdup from "./components/TableTdup.js";
import AddTdup from "./components/AddTdup.js";
import DetailTdup from "./components/DetailTdup.js";

function App() {
  return (
    <BrowserRouter>
      <NavbarAdmin />
      <div className="container mt-4">
        <Routes>
          <Route path="/" exact element={<TableTdup/>} />
          <Route path="/addTdup" element={<AddTdup/>} />
          <Route path="/usaha/:id" element={<DetailTdup/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
