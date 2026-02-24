import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Home from "./Component/Home";
import Rose from "./Component/Rose";
import Sunflower from "./Component/Sunflower";
import Tulip from "./Component/Tulip";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rose" element={<Rose />} />
        <Route path="/sunflower" element={<Sunflower />} />
        <Route path="/tulip" element={<Tulip />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;