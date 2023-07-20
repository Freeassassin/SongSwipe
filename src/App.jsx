import "./App.scss";
import { useSelector } from "react-redux";
import { tokenSelector } from "./state/authSlice";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Redirect } from "./pages/Redirect/Redirect";
import { Sources } from "./pages/Sources/Sources";
import { Spotify } from "./pages/Spotify/Spotify";
import { Page404 } from "./pages/Page404/Page404";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function App() {
  return (
    <BrowserRouter>
      <TransitionRoutes />
    </BrowserRouter>
  );
}

const TransitionRoutes = () => {
  const { token } = useSelector(tokenSelector);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={token ? <Home /> : <Login />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/spotify" element={<Spotify />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </CSSTransition>
      <Navbar token={token} />
    </TransitionGroup>
  );
};

export default App;
