import { Routes, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";
import NoMatch from "./Pages/nomatch";
import Home from "./Pages/Home";
import Episode from "./Pages/Episode";
import Podcast from "./Pages/Podcast";
import Search from "./Pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/episode" element={<Episode />} />
        <Route path="/search" element={<Search />} />

        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
