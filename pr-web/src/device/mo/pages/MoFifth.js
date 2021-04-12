import React from "react";
import styled from "styled-components";
const MoFifthPage = styled.div`
  background-color: #f8f9fa;
  width: 100%;
`;
const MoFifthInner = styled.div`
  margin-right: 2.857rem;
  margin-left: 2.857rem;
  display: flex;
  flex-direction: column;
  padding-top: 8.571rem;
  align-items: center;
`;
const MoFifthHeadText = styled.span`
  font-weight: bold;
  font-size: 3.429rem;
  line-height: 5rem;
  color: #333333;
  text-align: center;
  margin-bottom: 2.286rem;
`;
const MoFifthMainText = styled.span`
  font-weight: regular;
  font-size: 2rem;
  line-height: 3.429rem;
  color: #333333;
  text-align: center;
  margin-bottom: 5.714rem;
`;
const MoFifthImg = styled.img`
  width: 332px;
  height: 587px;
  margin-bottom: 8.571rem;
`;
function MoFifth() {
  return (
    <MoFifthPage>
      <MoFifthInner>
        <MoFifthHeadText>
          단돈 1,100원으로 즐기는
          <br />
          다양한 운동 콘텐츠
        </MoFifthHeadText>
        <MoFifthMainText>
          아직도 비싼 돈 주고 강습 들으세요?
          <br />
          배움 이전에 재미를 느껴보자!
          <br />
          함께한다면 재미가 2배로!
        </MoFifthMainText>
        <MoFifthImg src="./mo/mo_fifth.png"></MoFifthImg>
      </MoFifthInner>
    </MoFifthPage>
  );
}

export default MoFifth;
