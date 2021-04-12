import React from "react";
import styled from "styled-components";
import { FourthPageStyle, PageInnerStyle } from "../style/PageStyle";
const FourthImageStyle = styled.img`
  width: 50rem;
  height: 73rem;
  margin-top: 12rem;
`;
const FourthRightBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;
const ContentHeadTextStyle = styled.span`
  font-weight: bold;
  font-size: 4rem;
  line-height: 6.4rem;
  color: #333333;
  margin-bottom: 2rem;
`;
const MainTextStyle = styled.span`
  font-weight: regular;
  font-size: 2.2rem;
  line-height: 3.8rem;
  color: #333333;
`;
const FourthRightImageStyle = styled.img`
  margin-top: 12.4rem;
`;
function PcFourth() {
  return (
    <FourthPageStyle>
      <PageInnerStyle>
        <FourthImageStyle src="./pc/pc_fourth_phone.png"></FourthImageStyle>
        <FourthRightBoxStyle>
          <ContentHeadTextStyle>
            잘할 필요 없어! 함께 즐기면 돼!
          </ContentHeadTextStyle>
          <MainTextStyle>
            서툴면 좀 어때요, 운동은 함께 해서 즐거운거잖아요.
            <br />
            무슨 일이든지 재미와 흥미를 느껴야 잘 할 수 있고 성장할 수 있어요.
          </MainTextStyle>
          <FourthRightImageStyle src="./pc/pc_fourth_people.png"></FourthRightImageStyle>
        </FourthRightBoxStyle>
      </PageInnerStyle>
    </FourthPageStyle>
  );
}

export default PcFourth;
