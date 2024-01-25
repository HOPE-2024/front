import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UnderLinedStyle } from "../../css/common/UnderLinedStyle";
import {
  SignupContainer,
  StyledSvg,
  Title,
  Items,
  Input,
  Instruction,
  Instruction2,
} from "../../css/member/SignupCss";
import { MemberAxiosApi } from "../../api/MemberAxiosApi";

export const Signup = () => {
  // 회원가입 정보 입력
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRecheck, setPasswordRecheck] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // 휴대폰 인증후 번호 받음.

  // 오류 메세지
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordReCheckMessage, setPasswordRecheckMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordRecheck, setIsPasswordRecheck] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  // 중복 체크
  const isUnique = async (num, checkVal) => {
    const msgList = [setIdMessage, setNickNameMessage];
    const validList = [setIsId, setIsNickName];
    try {
      // type: 0(아이디), 1(닉네임) value: 체크할 값
      const rsp = await MemberAxiosApi.checkUnique(num, checkVal);
      console.log("중복 체크 : ", !rsp.data);
      if (!rsp.data) {
        msgList[num]("사용 가능합니다."); // 수정
        validList[num](true); // 수정
      } else {
        msgList[num]("이미 사용 중 입니다.");
        validList[num](false); // 수정
      }
    } catch (error) {
      console.log("중복 !! : ", error);
    }
  };

  // 아이디 조건에 맞는지 확인
  const onChangeId = (e) => {
    const idRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,20}$/;
    const enteredId = e.target.value;
    setId(enteredId);

    // 입력된 아이디가 1글자 이상일 경우,
    if (enteredId.length > 0) {
      if (!idRegex.test(enteredId)) {
        setIdMessage("숫자, 영문자 조합으로 5자리 이상 입력해 주세요");
        setIsId(false);
      } else {
        setIsId(true);
        isUnique(0, enteredId);
      }
    } else {
      // 입력된 아이디가 없을 때는 메시지를 숨김
      setIdMessage("");
      setIsId(false);
    }
  };

  // 비밀번호가 특정조건에 맞는지 확인
  const onChangePw = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,20}$/;
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);

    // 입력된 비밀번호가 1글자 이상일 경우,
    if (enteredPassword.length > 0) {
      if (!passwordRegex.test(enteredPassword)) {
        setPasswordMessage(
          "숫자, 영문자, 특수문자 조합으로 8자리 이상 입력해 주세요."
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("안전한 비밀번호에요 !");
        setIsPassword(true);
      }
    } else {
      // 입력된 비밀번호가 없으면 숨김
      setPasswordMessage("");
      setIsPassword(false);
    }
  };

  // 비밀번호 재확인
  const onChangePwReCheck = (e) => {
    const enteredPasswordRecheck = e.target.value;
    setPasswordRecheck(enteredPasswordRecheck);

    // 입력된 비밀번호 재입력 값이 없을 경우 메시지를 숨김
    if (enteredPasswordRecheck.length === 0) {
      setPasswordRecheckMessage("");
      setIsPasswordRecheck(false);
    }
    // 입력된 비밀번호 재입력 값이 기존의 비밀번호와 다를 경우
    else if (enteredPasswordRecheck !== password) {
      setPasswordRecheckMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordRecheck(false);
    }
    // 입력된 비밀번호 재입력 값이 기존의 비밀번호와 일치할 경우
    else {
      setPasswordRecheckMessage("비밀번호가 일치합니다.");
      setIsPasswordRecheck(true);
    }
  };

  // 이름 입력
  const onChangeName = (e) => {
    setName(e.target.value);
    setIsName(true);
  };

  // 닉네임 입력
  const onChangeNickName = (e) => {
    const enteredNickName = e.target.value;
    setNickName(enteredNickName);

    if (enteredNickName.length < 2 || enteredNickName.length > 10) {
      setNickNameMessage("2자 이상 10자 이내로 입력하세요.");
      setIsNickName(false);
    } else {
      setIsNickName(true);
      isUnique(1, enteredNickName);
    }
  };

  // 이메일 형식이 맞는지 확인
  const onChangeMail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // 입력된 이메일이 1글자 이상일 경우,
    if (enteredEmail.length > 0) {
      if (!emailRegex.test(enteredEmail)) {
        setEmailMessage("올바른 이메일 양식이 아닙니다.");
        setIsEmail(false);
      } else {
        setEmailMessage("올바른 이메일 양식 입니다.");
        setIsEmail(true);
      }
    } else {
      setEmailMessage("");
      setIsEmail(false);
    }
  };

  // 휴대폰 번호 맞는지 확인
  const onChangePhone = (e) => {
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    const enteredPhoneNumber = e.target.value;
    setPhoneNumber(enteredPhoneNumber);

    if (!phoneRegex.test(enteredPhoneNumber)) {
      setPhoneMessage("잘못 입력 했습니다.");
      setIsPhone(false);
    } else {
      setPhoneMessage("맞는 양식입니다.");
      setIsPhone(true);
    }
  };

  // 가입 버튼 클릭
  const onClickJoin = async () => {
    try {
      // 비밀번호가 8자리 미만일 경우 회원가입 막음
      if (password.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.");
        return;
      }

      //  비밀번호와 비밀번호 재확인 값이 일치하지 않으면 회원가입 막음
      if (password !== passwordRecheck) {
        alert("비밀번호가 일치하지 않습니다. 다시 확인해 주세요.");
        return;
      }

      const rsp = await MemberAxiosApi.memberJoin(
        id,
        password,
        name,
        nickName,
        email,
        phoneNumber
      );
      console.log("가입 응답 : ", rsp);
      if (rsp.status === 200) {
        alert("앞으로의 건강 케어를 함께 해요. 회원 가입을 축하 드립니다!");
        navigate("/login");
      } else {
        console.log("회원가입 실패");
      }
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  // 취소 버튼 누를시 홈으로 이동
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <SignupContainer>
        <StyledSvg />
        <Title>Sign up Now</Title>
        <Items className="item1">
          <Input
            type="id"
            placeholder="ID 입력(영어, 숫자 포함 5-20자이내)"
            value={id}
            onChange={onChangeId}
          />
        </Items>
        <Items className="item2">
          <Instruction>{idMessage}</Instruction>
        </Items>
        <Items className="item1">
          <Input
            type="password"
            placeholder="Password (숫자,영문자,특수문자 포함 8-20자 이내)"
            value={password}
            onChange={onChangePw}
          />
        </Items>
        <Items className="item2">
          <Instruction>{passwordMessage}</Instruction>
        </Items>
        <Items className="item1">
          <Input
            type="password"
            placeholder="Password 재입력"
            onChange={onChangePwReCheck}
          />
        </Items>
        <Items className="item2">
          <Instruction>{passwordReCheckMessage}</Instruction>
        </Items>
        <Items className="item1">
          <Input placeholder="이름 입력" value={name} onChange={onChangeName} />
        </Items>
        <Items className="item1">
          <Input
            placeholder="닉네임 입력(2-10자)"
            value={nickName}
            onChange={onChangeNickName}
          />
        </Items>
        <Items className="item2">
          <Instruction>{nickNameMessage}</Instruction>
        </Items>
        <Items className="item1">
          <Input
            placeholder="Email 입력"
            value={email}
            onChange={onChangeMail}
          />
        </Items>
        <Instruction2>
          추후 아이디/비밀번호 찾기에 활용되니 자주 사용하는 이메일로 기재해
          주세요
        </Instruction2>
        <Items className="item2">
          <Instruction>{emailMessage}</Instruction>
        </Items>
        <Items className="item1">
          <Input
            placeholder="휴대폰번호"
            value={phoneNumber}
            onChange={onChangePhone}
          />
        </Items>
        <Items className="item3">
          <UnderLinedStyle
            style={{ margin: "25px", fontWeight: "bold" }}
            onClick={onClickJoin}
          >
            가입
          </UnderLinedStyle>
          <UnderLinedStyle
            style={{ margin: "25px", fontWeight: "bold" }}
            onClick={handleCancel}
          >
            취소
          </UnderLinedStyle>
        </Items>
      </SignupContainer>
    </>
  );
};
