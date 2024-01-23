import "./App.css";
import GlobalStyle from "./utils/GlobalStyle";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/member/Login";
import { ChatList } from "./pages/chat/ChatList";
import { Home } from "./pages/Home";
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
            <Route path="/ChatList" element={<ChatList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
