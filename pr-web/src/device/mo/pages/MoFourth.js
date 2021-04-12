import React from "react";
import styled from "styled-components";
const MoFourthPage = styled.div`
  width: 100%;
`;
const MoFourthInner = styled.div`
  margin-right: 2.857rem;
  margin-left: 2.857rem;
  display: flex;
  flex-direction: column;
  padding-top: 8.571rem;
  align-items: center;
`;
const MoFourthHeadText = styled.span`
  font-weight: bold;
  font-size: 3.429rem;
  line-height: 5rem;
  color: #333333;
  text-align: center;
  margin-bottom: 2.286rem;
`;
const MoFourthMainText = styled.span`
  font-weight: regular;
  font-size: 2rem;
  line-height: 3.429rem;
  color: #333333;
  text-align: center;
  margin-bottom: 5.714rem;
`;
const MoFourthImg = styled.img`
  width: 332px;
  height: 587px;
  margin-bottom: 8.571rem;
`;
function MoFourth() {
  return (
    <MoFourthPage>
      <MoFourthInner>
        <MoFourthHeadText>잘할 필요 없어! 함께 즐기면 돼!</MoFourthHeadText>
        <MoFourthMainText>
          서툴면 좀 어때요, 운동은 함께 해서 즐거운거잖아요.
          <br />
          무슨 일이든지 재미와 흥미를 느껴야
          <br />잘 할 수 있고 성장할 수 있어요.
        </MoFourthMainText>
        <MoFourthImg src="./mo/mo_fourth.png"></MoFourthImg>
      </MoFourthInner>
    </MoFourthPage>
  );
}

export default MoFourth;
