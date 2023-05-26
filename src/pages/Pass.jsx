import React from "react";
import styled from "styled-components";
//import { useLocation } from "react-router-dom";

const Background = styled.div`
  position: relative;
  width: 390px;
  height: 844px;

  background: #fae4ea;
`;

const WhiteBox = styled.div`
  position: absolute;
  width: 327px;
  height: 596px;
  left: 31px;
  top: 79px;

  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(100, 100, 100, 0.25);
  border-radius: 5px;
`;

const Logo = styled.div`
  position: absolute;
  width: 58px;
  height: 58px;
  left: 147px;
  top: 50px;
`;

const TextBox = styled.div`
  position: absolute;
  width: 195px;
  height: 80px;
  left: 70px;
  top: 100px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 43px;
  text-align: center;

  color: #000000;
`;

const TextUser = styled.div`
  position: absolute;
  width: 203px;
  height: 23px;
  left: 100px;
  top: 224px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #0075ff;
`;
const TextMain = styled.div`
  position: absolute;
  width: 314px;
  height: 259px;
  left: 5px;
  top: 265px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #000000;
`;
const Stamp = styled.div`
  position: absolute;
  width: 325.33px;
  height: 221.25px;
  left: 0px;
  top: 480px;
`;

const pass = () => {
  //const location = useLocation(); //뭐냐..
  return (
    <Background>
      <WhiteBox>
        <Logo>
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/images/ddwu_logo 3.png`}
            alt="logo"
            width="43px"
          />
        </Logo>
        <TextBox>
          합격을
          <br />
          축하합니다!
        </TextBox>
        <TextUser> 님은</TextUser>
        <TextMain>
          동덕여대 멋사 11기에 최종합격 하셨습니다! 🎉
          <br />
          긴 선발 과정에 참여하시느라 고생 많으셨습니다.
          <br />
          자세한 사항은 discord를 통해 안내드리겠습니다.
          <br />
          <br />
          https://discord.gg/BSHH7mck
          <br />
          <br />
          3월 17일까지 디스코드에 들어와주세요! 3/26(일) 동덕 멋사 OT에서
          만나요~
          <br />
          *장소 추후 안내 예정
        </TextMain>
      </WhiteBox>
      <Stamp>
        <img
          src={`${process.env.PUBLIC_URL}/images/envelope.png`}
          alt="letter"
          width="120%"
        />
      </Stamp>
    </Background>
  );
};

export default pass;
