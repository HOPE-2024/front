import "./App.css";
import GlobalStyle from "./utils/GlobalStyle";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Login } from "./pages/member/Login";
import { ChatList } from "./pages/chat/ChatList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/ChatList" element={<ChatList />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
