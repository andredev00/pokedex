import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import CherryDetails from "./CherryDetails.jsx";
import Cherry from "./Cherry.jsx";

function App() {
  // const [locale, setLocale] = useState(i18n.language);
  return (
    <>
      {/* // <LocaleContext.Provider value={{ locale, setLocale }}> */}
      {/* <Suspense fallback={<Loading />}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cherry />} />
          <Route path="/cherry/:id" element={<CherryDetails />} />
        </Routes>
      </BrowserRouter>
      {/* </Suspense> */}
      {/* </LocaleContext.Provider> */}
    </>
  );
}

export default App;
