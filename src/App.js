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
import { Query } from "./pages/admin/Query";
import { QueryView } from "./pages/admin/QueryView";
import { QueryList } from "./pages/admin/QueryList";
import { Signup } from "./pages/member/SignUp";
import { ChatRoom } from "./pages/chat/ChatRoom";
import { Template } from "../src/component/template/Template";
import { AuthContextProvider } from "./context/AuthContext";
import { LifeResult } from "./pages/result/LifeResult";
import { Country } from "./pages/predict/Country";
import { Diabetes } from "./pages/predict/Diabetes";
import { Face } from "./pages/predict/Face";
import { LifeExpectancy } from "./pages/predict/LifeExpectancy";
import { AgreeCheck } from "./pages/agreeToTerms/AgreeCheck";
import { MedicineResult } from "./pages/search/MedicineResult";
import { FindId } from "./pages/member/FindId";
import { FindPw } from "./pages/member/FindPw";
import { MyPage } from "./pages/myPage/MyPage";
import { DiabResult } from "./pages/result/DiabResult";
import { FaceResult } from "./pages/result/FaceResult";
import { CountryResult } from "./pages/result/CountryResult";
import { IdComplement } from "./pages/member/IdComplete";
import { StartFindPw } from "./pages/member/StartFindPw";
import { MedicineDetail } from "./pages/search/MedicineDetail";
import { EffectModal } from "./utils/modal/EffectModal";
import { PwReset } from "./pages/member/PwReset";
import { MyCalendar } from "./pages/myCalendar/MyCalendar";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            {/* 소문자로 통일 */}
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/agreecheck" element={<AgreeCheck />} />
            <Route path="/findid" element={<FindId />} />
            <Route path="/findpw" element={<FindPw />} />
            <Route path="/idcomplement" element={<IdComplement />} />
            <Route path="/startfindpw" element={<StartFindPw />} />
            <Route path="/startfindpw" element={<StartFindPw />} />
            <Route path="/pwreset" element={<PwReset />} />
            <Route element={<Template />}>
              <Route path="/" element={<Home />} />
              <Route path="/ChatList" element={<ChatList />} />
              <Route path="/ChatRoom/:roomId" element={<ChatRoom />} />
              <Route path="MyPage" element={<MyPage />} />
              <Route path="/MemberList2" element={<MemberList2 />} />
              <Route path="/MemberList" element={<MemberList />} />
              <Route path="/Query" element={<Query />} />
              <Route path="/Query/:id" element={<Query />} />
              <Route path="/QueryView/:id" element={<QueryView />} />
              <Route path="/QueryList" element={<QueryList />} />
              <Route path="/Report" element={<Report />} />
              <Route path="/Map" element={<Map />} />
              <Route path="/LifeExpectancy" element={<LifeExpectancy />} />
              <Route path="/Country" element={<Country />} />
              <Route path="/Face" element={<Face />} />
              <Route path="/Diabetes" element={<Diabetes />} />
              <Route path="/LifeResult" element={<LifeResult />} />
              <Route path="/DiabResult" element={<DiabResult />} />
              <Route path="/FaceResult" element={<FaceResult />} />
              <Route path="/CountryResult" element={<CountryResult />} />
              <Route path="/medicineresult" element={<MedicineResult />} />
              <Route path="/MyCalendar" element={<MyCalendar />} />
              <Route
                path="/medicinedetail/:medicineId"
                element={<MedicineDetail />}
              />
              <Route path="/effect" element={<EffectModal />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}
export default App;
