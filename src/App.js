import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./utils/GlobalStyle";
import { Home } from "./pages/Home";
import { Login } from "./pages/member/Login";
import { Template } from "./component/Template/Template";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route element={<Template />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
