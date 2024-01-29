import { createContext, useState, useEffect } from "react";

// UserContext를 생성하여 전역적으로 사용할 수 있는 컨텍스트 정의
export const UserContext = createContext({});

// 로그인 상태를 관리하는 컴포넌트 생성
export const AuthContextProvider = (props) => {
  // 로그인 상태
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem("loginStatus") || ""
  ); // "" 는 loginstatus 키에 해당하는 값이 있으면 그 값을 반환, 값이 없거나 null일 경우 빈 문자열("")을 반환

  useEffect(() => {
    // 로그인 상태가 변경될 때마다 상태 업데이트
    localStorage.setItem("loginStatus", loginStatus); // 로그인 상태를 저장
  }, [loginStatus]);

  // userContext.Provder를 사용하여 하위 컴포넌트에 로그인 상태와 상태를 업데이트 하는 함수 전달
  return (
    <UserContext.Provider
      value={{
        loginStatus, // 로그인 상태
        setLoginStatus, // 로그인 상태를 업데이트 하는 함수
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
