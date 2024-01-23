import "./App.css";
import GlobalStyle from "./utils/GlobalStyle";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Login } from "./pages/member/Login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
