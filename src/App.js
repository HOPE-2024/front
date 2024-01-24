import "./App.css";
import GlobalStyle from "./utils/GlobalStyle";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/member/Login";
import { ChatList } from "./pages/chat/ChatList";
import { Home } from "./pages/Home";
import { Template } from ".//Template/Template";
import { Map } from "./pages/map/Map";
import { MemberList } from "./pages/admin/MemberList";
import { Report } from "./pages/admin/Report";
import { Signup } from "./pages/member/SignUp";
import { ChatRoom } from "./pages/chat/ChatRoom";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Template />}>
            <Route path="/" element={<Home />} />
            <Route path="/ChatList" element={<ChatList />} />
            <Route path="/ChatRoom" element={<ChatRoom />} />
            <Route path="/MemberList" element={<MemberList />} />
            <Route path="/Report" element={<Report />} />
            <Route path="/Map" element={<Map />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
