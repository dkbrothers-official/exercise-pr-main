import React from "react";
import styled from "styled-components";
import { FirstColorPageStyle, FirstColorInnerStyle } from "../style/PageStyle";

const TextBoxStyle = styled.div`
  padding-top: 26.7rem;
`;
const TextBoxHeadStyle = styled.div`
  font-weight: bold;
  font-size: 5.2rem;
  line-height: 7.5rem;
  color: #ffffff;
  margin-bottom: 3rem;
`;
const TextBoxMainStyle = styled.div`
  font-weight: regular;
  font-size: 2.2rem;
  line-height: 3.8rem;
  color: #ffffff;
`;
const FirstImageStyle = styled.img`
  margin-top: 3.94rem;
  height: 68.759rem;
  width: 76.3rem;
`;
// background-image: url("./pc/pc_first.png");
// background-size: cover;
function PcFirst() {
  return (
    <FirstColorPageStyle class="FirstColorPageStyle">
      <FirstColorInnerStyle class="FirstColorInnerStyle">
        <TextBoxStyle>
          <TextBoxHeadStyle>운동하고 싶을 때 운동하자</TextBoxHeadStyle>
          <TextBoxMainStyle>
            언제 어디서나 쉽고, 편하게 모여 운동할 수 있는
            <br />
            운동모임 서비스 플랫폼입니다
            <br />
            원하는 모임에 참여도 하고, 모임을 만들어 보세요.
          </TextBoxMainStyle>
        </TextBoxStyle>
        <FirstImageStyle src="./pc/pc_first.png"></FirstImageStyle>
      </FirstColorInnerStyle>
    </FirstColorPageStyle>
  );
}

export default PcFirst;
