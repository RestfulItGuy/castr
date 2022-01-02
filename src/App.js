import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import NoMatch from "./Pages/NoMatch";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
