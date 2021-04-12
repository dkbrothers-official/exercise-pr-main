import React from "react";
import styled from "styled-components";
import { FifthPageStyle, PageInnerStyle } from "../style/PageStyle";
const FifthContentStyle = styled.div`
  padding-top: 12rem;
`;
const FifthTextBoxStyle = styled.div`
  position: absolute;
`;
const FifthImageBoxStyle = styled.div`
  position: absolute;
  width: 140rem;
  height: 69rem;
  background-image: url("./pc/pc_fifth.png");
  background-size: cover;
`;
const ContentHeadTextStyle = styled.span`
  font-weight: bold;
  font-size: 4rem;
  line-height: 6.4rem;
  color: #333333;
`;
const MainTextStyle = styled.span`
  font-weight: regular;
  font-size: 2.2rem;
  line-height: 3.8rem;
  color: #333333;
`;
function PcFifth() {
  return (
    <FifthPageStyle>
      <PageInnerStyle>
        <FifthContentStyle>
          <FifthTextBoxStyle>
            <ContentHeadTextStyle>
              단돈 1,100원으로 즐기는
              <br />
              다양한 운동 콘텐츠
              <br />
            </ContentHeadTextStyle>
            <MainTextStyle>
              아직도 비싼 돈 주고 강습 들으세요? 배움 이전에 재미를 느껴보자!
              <br />
              함께한다면 재미가 2배로!
            </MainTextStyle>
          </FifthTextBoxStyle>
          <FifthImageBoxStyle></FifthImageBoxStyle>
        </FifthContentStyle>
      </PageInnerStyle>
    </FifthPageStyle>
  );
}

export default PcFifth;
