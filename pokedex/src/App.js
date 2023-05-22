import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import PokemonDetails from "./PokemonDetails.jsx";
import Pokemon from "./Pokemon.jsx";

function App() {
  // const [locale, setLocale] = useState(i18n.language);
  return (
    <>
      {/* // <LocaleContext.Provider value={{ locale, setLocale }}> */}
      {/* <Suspense fallback={<Loading />}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokemon />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
      {/* </Suspense> */}
      {/* </LocaleContext.Provider> */}
    </>
  );
}

export default App;
