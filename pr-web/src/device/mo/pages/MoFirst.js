import React from "react";
import styled from "styled-components";

const MoFirstPageStyle = styled.div`
  padding-top: 64px;
  background-color: #4f7eed;
  width: 100%;
`;
const MoFirstInnerStyle = styled.div`
  margin-right: 2.857rem;
  margin-left: 2.857rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8.571rem;
`;
const MoFirstHeadText = styled.span`
  font-weight: bold;
  font-size: 3.429rem;
  line-height: 5rem;
  color: #ffffff;
  margin-bottom: 2.286rem;
`;
const MoFirstMainText = styled.span`
  font-weight: regular;
  font-size: 2rem;
  line-height: 3.429rem;
  color: #ffffff;
  margin-bottom: 4.286rem;
  text-align: center;
`;
const MoFirstImage = styled.img`
  width: 343.64px;
  height: 578.18px;
  margin-bottom: 8.571rem;
`;
function MoFirst() {
  return (
    <MoFirstPageStyle>
      <MoFirstInnerStyle>
        <MoFirstHeadText>운동하고 싶을 때 운동하자</MoFirstHeadText>
        <MoFirstMainText>
          언제 어디서나 쉽고, 편하게 모여 운동할 수 있는
          <br />
          운동모임 서비스 플랫폼입니다
          <br />
          원하는 모임에 참여도 하고, 모임을 만들어 보세요.
        </MoFirstMainText>
        <MoFirstImage src="./mo/mo_first.png"></MoFirstImage>
      </MoFirstInnerStyle>
    </MoFirstPageStyle>
  );
}

export default MoFirst;
