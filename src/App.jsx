import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutPage from "./Pages/LayoutPage";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import MovieDetails from "./Components/MovieDetails";
import MoviesContextProvider from "./Context/MoviesContextProvider";
import NotFoundPage from "./Pages/NotFoundPage";
import VideosPage from "./Pages/VideosPage";
import SearchContextProvider from "./Context/SearchContextProvider";
function App() {
  let routerConfig = createBrowserRouter([
    {
      path: "",
      element: <LayoutPage></LayoutPage>,
      children: [
        { index: true, element: <HomePage></HomePage> },
        { path: "/about", element: <AboutPage></AboutPage> },
        { path: "/movie/:id", element: <MovieDetails></MovieDetails> },

        { path: "/trailer", element: <VideosPage></VideosPage> },
        { path: "/login", element: <LoginPage></LoginPage> },
        { path: "/register", element: <RegisterPage></RegisterPage> },
        { path: "*", element: <NotFoundPage></NotFoundPage> },
      ],
    },
  ]);
  return (
    <>
      <SearchContextProvider>
        <MoviesContextProvider>
          <RouterProvider router={routerConfig}></RouterProvider>
        </MoviesContextProvider>
      </SearchContextProvider>
    </>
  );
}

export default App;
