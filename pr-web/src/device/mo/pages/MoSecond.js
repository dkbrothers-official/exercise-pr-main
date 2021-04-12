import React from "react";
import styled from "styled-components";

const MoSecondPage = styled.div`
  width: 100%;
`;
const MoSecondInner = styled.div`
  margin-right: 2.857rem;
  margin-left: 2.857rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 8.571rem;
  text-align: center;
`;
const MoSecondHeadText = styled.span`
  font-weight: bold;
  font-size: 3.429rem;
  line-height: 5rem;
  color: #333333;
  margin-bottom: 2.286rem;
`;
const MoSecondMainText = styled.span`
  font-weight: regular;
  font-size: 2rem;
  line-height: 3.429rem;
  color: #333333;
  margin-bottom: 4.286rem;
`;
const MoSecondIcon = styled.img`
  width: 11.143rem;
  height: 11.143rem;
  margin-bottom: 1.714rem;
`;
const MoSecondContentHead = styled.span`
  font-weight: bold;
  font-size: 2.143rem;
  line-height: 3rem;
  color: #333333;
  margin-bottom: 1.143rem;
  color: #126dfc;
`;
const MoSecondContentMain = styled.span`
  font-weight: regular;
  font-size: 2rem;
  line-height: 3.429rem;
  color: #333333;
  margin-bottom: 5.714rem;
`;
const MoSecondImage = styled.img`
  width: 326px;
  height: 478px;
  margin-bottom: 8.571rem;
`;
function MoSecond() {
  return (
    <MoSecondPage>
      <MoSecondInner>
        <MoSecondHeadText>불편한 동호회 대신 모여라운동!</MoSecondHeadText>
        <MoSecondMainText>
          “회칙, 회비, 정모가 부담스러워요!”
          <br />
          동호회 활동이 부담스럽다면,
          <br />
          모여라 운동을 통해 사람들을 만나보세요.
        </MoSecondMainText>
        <MoSecondIcon src="./pc/pc_second_icon1.svg"></MoSecondIcon>
        <MoSecondContentHead>규칙은 NO! 자유롭게</MoSecondContentHead>
        <MoSecondContentMain>
          모여라운동을 통해 사람들을 만나보세요.
        </MoSecondContentMain>
        <MoSecondIcon src="./pc/pc_second_icon2.svg"></MoSecondIcon>
        <MoSecondContentHead>원하는 시간과 장소에서!</MoSecondContentHead>
        <MoSecondContentMain>
          시간 맞는 사람들과 함께 소통하고 운동해요.
        </MoSecondContentMain>
        <MoSecondIcon src="./pc/pc_second_icon3.svg"></MoSecondIcon>
        <MoSecondContentHead>함께하는 즐거움이!</MoSecondContentHead>
        <MoSecondContentMain>
          무슨 일이든지 재미와 흥미를 느껴야 성장할 수 있어요.
        </MoSecondContentMain>
        <MoSecondImage src="./mo/mo_second.png"></MoSecondImage>
      </MoSecondInner>
    </MoSecondPage>
  );
}

export default MoSecond;
