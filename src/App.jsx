import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import GlobalContext from "./context/GlobalContext";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
