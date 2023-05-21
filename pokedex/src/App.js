import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import CherryDetails from "./CherryDetails.jsx";

function App() {
  // const [locale, setLocale] = useState(i18n.language);
  return (
    <>
      {/* // <LocaleContext.Provider value={{ locale, setLocale }}> */}
      {/* <Suspense fallback={<Loading />}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/cherry/agentDetails:id" element={<CherryDetails />} />
        </Routes>
      </BrowserRouter>
      {/* </Suspense> */}
      {/* </LocaleContext.Provider> */}
    </>
  );
}

export default App;
