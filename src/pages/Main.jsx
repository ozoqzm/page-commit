import React, { useState, useCallback } from "react";
import styled from "styled-components";
import data from "./data.json";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background: #902443;
`;

const WhiteBox = styled.div`
  position: absolute;
  width: 269px;
  height: 498px;
  left: 60px;
  top: 149px;

  background: #fff9f8;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.59);
  border-radius: 5px;
`;

const Logo = styled.div`
  position: absolute;
  width: 81px;
  height: 81px;
  left: 85px;
  top: 50px;
`;

const TextBox = styled.div`
  position: absolute;
  width: 275px;
  height: 48px;
  top: 155px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  text-align: center;

  color: #5e162b;
`;

const BarName = styled.div`
  position: absolute;
  width: 14px;
  height: 0px;
  left: 30px;
  top: 250px;

  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;
const BarPhone = styled.div`
  position: absolute;
  width: 14px;
  height: 0px;
  left: 30px;
  top: 350px;

  border: 5px solid #dc7190;
  transform: rotate(90deg);
`;

const TextName = styled.div`
  position: absolute;
  width: 40px;
  height: 26px;
  left: 50px;
  top: 245px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;

const TextPhone = styled.div`
  position: absolute;
  width: 74px;
  height: 26px;
  left: 50px;
  top: 345px;

  font-family: "SUIT";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  color: #000000;
`;
const InputName = styled.input`
  position: absolute;
  width: 210px;
  height: 35px;
  left: 30px;
  top: 270px;

  background: #cd99a6;
  border-radius: 50px;
`;

const InputPhone = styled.input`
  position: absolute;
  width: 210px;
  height: 35px;
  left: 30px;
  top: 370px;

  background: #cd99a6;
  border-radius: 50px;
`;
const Button = styled.button`
  position: absolute;
  width: 93px;
  height: 36px;
  left: 85px;
  top: 438px;

  background: #902443;
  border-radius: 10px;
`;
const ButtonText = styled.div`
  font-family: "SUIT";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
`;
const Text = styled.div`
  position: absolute;
  width: 260px;
  height: 29px;
  left: 69px;
  top: 683px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

//func
const Main = () => {
  const navigate = useNavigate();

  //state
  const [text, setText] = useState({
    name: "",
    ph: "",
  });

  //뭐임.. 왜 하는 거임?
  const onChange = useCallback(
    (e) => {
      // 이벤트?
      const { value, name } = e.target;
      setText({ ...text, [name]: value }); //음?
    },
    [text]
  );

  const discriminate = () => {
    for (var i = 0; i < 9; i++) {
      if (
        text.name == data[i].name &&
        text.ph == data[i].phone &&
        data[i].pass == 1
      ) {
        navigate("/pass", { state: data[i].name }); // 이게 뭐?
        break;
      } else if (
        text.name == data[i].name &&
        text.ph == data[i].phone &&
        data[i].pass == 0
      ) {
        navigate("/fail");
        break;
      } else if (
        (i == 8 && text.name != data[i].name) ||
        (i == 8 && text.ph != data[i].phone)
      ) {
        alert(
          "등록되지 않은 성함/번호입니다. \n성함과 번호를 다시 한 번 확인해주세요!"
        );
        console.log(text.name, text.ph, data[i].name);
        break;
      }
    }
  };

  return (
    <Background>
      <WhiteBox>
        <Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 1.png`}
            alt="logo"
            width="100px"
          />
        </Logo>
        <TextBox>
          동덕여자대학교 멋쟁이사자처럼
          <br />
          11기 아기사자 합격자 발표
        </TextBox>
        <BarName></BarName>
        <TextName>성함</TextName>
        {/*왜 input할 때 name 써줘야 하는지? */}
        <InputName
          type="text"
          name="name"
          value={text.name}
          onChange={onChange}
        ></InputName>
        <BarPhone></BarPhone>
        <TextPhone>전화번호</TextPhone>
        <InputPhone
          type="text"
          name="ph"
          value={text.ph}
          onChange={onChange}
        ></InputPhone>
        <Button onClick={discriminate}>
          <ButtonText>입력</ButtonText>
        </Button>
      </WhiteBox>
      <Text>DONGDUK x LIKELION</Text>
    </Background>
  );
};

export default Main;
