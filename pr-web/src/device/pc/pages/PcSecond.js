import React from "react";
import styled from "styled-components";
import { SecondPageStyle, PageInnerStyle } from "../style/PageStyle";
const RightBoxStyle = styled.img`
  width: 50.7rem;
  height: 73.1rem;
  margin-top: 12rem;
`;
const LeftBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const LeftUpBoxStyle = styled.div`
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 12rem;
`;
//중복
const ContentHeadTextStyle = styled.span`
  font-weight: bold;
  font-size: 4rem;
  line-height: 6.4rem;
  color: #333333;
  margin-bottom: 2rem;
`;
//중복
const MainTextStyle = styled.span`
  font-weight: regular;
  font-size: 2.2rem;
  line-height: 3.8rem;
  color: #333333;
`;
const LeftDownBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const LeftDownContentBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5rem;
`;
const LeftDownIconStyle = styled.img`
  width: 7.8rem;
  height: 7.8rem;
`;
const LeftDownContentHeadStyle = styled.div`
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 3.5rem;
  color: #126dfc;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
  display: inline-block;
`;
const LeftDownConstentMainStyle = styled.div`
  font-weight: regular;
  font-size: 2rem;
  line-height: 3rem;
  color: #333333;
`;
function PcSecond() {
  return (
    <SecondPageStyle>
      <PageInnerStyle>
        <LeftBoxStyle>
          <LeftUpBoxStyle>
            <ContentHeadTextStyle>
              불편한 동호회 대신 모여라운동!
            </ContentHeadTextStyle>
            <MainTextStyle>“회칙, 회비, 정모가 부담스러워요!”</MainTextStyle>
            <MainTextStyle>
              동호회 활동이 부담스럽다면, 모여라 운동을 통해 사람들을
              만나보세요.
            </MainTextStyle>
          </LeftUpBoxStyle>
          <LeftDownBoxStyle>
            <LeftDownContentBoxStyle>
              <div>
                <LeftDownIconStyle src="./pc/pc_second_icon1.svg"></LeftDownIconStyle>
              </div>
              <LeftDownContentHeadStyle>
                규칙은 NO! 자유롭게
              </LeftDownContentHeadStyle>
              <LeftDownConstentMainStyle>
                모여라운동을 통해
                <br />
                사람들을 만나보세요.
              </LeftDownConstentMainStyle>
            </LeftDownContentBoxStyle>
            <LeftDownContentBoxStyle>
              <div>
                <LeftDownIconStyle src="./pc/pc_second_icon2.svg"></LeftDownIconStyle>
              </div>
              <LeftDownContentHeadStyle>
                원하는 시간과 장소에서!
              </LeftDownContentHeadStyle>
              <LeftDownConstentMainStyle>
                무슨 일이든지 재미와
                <br />
                흥미를 느껴야 성장할 수 있어요.
              </LeftDownConstentMainStyle>
            </LeftDownContentBoxStyle>
            <LeftDownContentBoxStyle>
              <div>
                <LeftDownIconStyle src="./pc/pc_second_icon3.svg"></LeftDownIconStyle>
              </div>
              <LeftDownContentHeadStyle>
                함께하는 즐거움이!
              </LeftDownContentHeadStyle>
              <LeftDownConstentMainStyle>
                모여라운동을 통해
                <br />
                사람들을 만나보세요.
              </LeftDownConstentMainStyle>
            </LeftDownContentBoxStyle>
          </LeftDownBoxStyle>
        </LeftBoxStyle>
        <RightBoxStyle src="./pc/pc_second.png"></RightBoxStyle>
      </PageInnerStyle>
    </SecondPageStyle>
  );
}

export default PcSecond;
