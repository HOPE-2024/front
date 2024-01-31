import "./App.css";
import GlobalStyle from "./utils/GlobalStyle";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/member/Login";
import { ChatList } from "./pages/chat/ChatList";
import { Home } from "./pages/Home";
import { Map } from "./pages/map/Map";
import { MemberList2 } from "./pages/admin/MemberList2";
import { MemberList } from "./pages/admin/MemberList";
import { Report } from "./pages/admin/Report";
import { Signup } from "./pages/member/SignUp";
import { ChatRoom } from "./pages/chat/ChatRoom";
import { Template } from "../src/component/template/Template";
import { AuthContextProvider } from "./context/AuthContext";
import { LifeResult } from "./pages/result/LifeResult";
import { Country } from "./pages/predict/Country";
import { Diabetes } from "./pages/predict/Diabetes";
import { Face } from "./pages/predict/Face";
import { LifeExpectancy } from "./pages/predict/LifeExpectancy";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<Template />}>
              <Route path="/" element={<Home />} />
              <Route path="/ChatList" element={<ChatList />} />
              <Route path="/ChatRoom" element={<ChatRoom />} />
              <Route path="/MemberList2" element={<MemberList2 />} />
              <Route path="/MemberList" element={<MemberList />} />
              <Route path="/Report" element={<Report />} />
              <Route path="/Map" element={<Map />} />
              <Route path="/LifeExpectancy" element={<LifeExpectancy />} />
              <Route path="/Country" element={<Country />} />
              <Route path="/Face" element={<Face />} />
              <Route path="/Diabetes" element={<Diabetes />} />
              <Route path="/LifeResult" element={<LifeResult />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}
export default App;
