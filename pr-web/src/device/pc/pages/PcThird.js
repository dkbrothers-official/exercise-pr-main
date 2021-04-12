import React from "react";
import styled from "styled-components";
import { ThirdPageStyle, PageInnerStyle } from "../style/PageStyle";
const ThirdLeftBoxStyle = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
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
const ThirdIconBoxStyle = styled.div`
  margin-top: 5rem;
`;
const ThirdImageStyle = styled.img`
  width: 39rem;
  height: 15.3rem;
`;
const TalkBoxStyle = styled.div`
  padding-top: 10rem;
  width: 65.4rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 9rem;
`;
const TalkRightContentsStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
`;
const TalkLeftContentStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const RightArrowBoxStyle = styled.div`
  position: relative;
  background: #336cf2;
  border-radius: 14px;
  padding: 1.8rem 1.6rem;
  font-weight: regular;
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: #ffffff;
  box-shadow: 0px 3px 6px 0.1px rgba(6, 86, 255, 0.14);

  &:after {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(136, 183, 213, 0);
    border-left-color: #336cf2;
    border-width: 14px;
    margin-top: -14px;
  }
`;
const LeftArrowBoxStyle = styled.div`
position: relative;
  background: #FFFFFF;
  border-radius: 14px;
  padding: 1.8rem 1.6rem;
  font-weight: regular;
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: #333333;
  box-shadow: 0px 3px 6px 0.1px rgba(6,86,255, .14);

  &:after {
    right: 100%;
	top: 50%;
	border: solid transparent;
	content: "";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(136, 183, 213, 0);
	border-right-color: #FFFFFF;
	border-width: 14px;
	margin-top: -14px;
`;
const ThirdIconStyle = styled.img`
  width: 5.4rem;
  height: 5.4rem;
  margin-left: 3rem;
`;
const ThirdLeftIconStyle = styled.img`
  width: 5.4rem;
  height: 5.4rem;
  margin-right: 3rem;
`;

function PcThird() {
  return (
    <ThirdPageStyle>
      <PageInnerStyle>
        <ThirdLeftBoxStyle>
          <ContentHeadTextStyle>
            원하는 시간, 원하는 장소에서!
          </ContentHeadTextStyle>
          <MainTextStyle>
            혼자서도 ‘함께’ 운동을 즐길 수 있습니다.
            <br />
            시간 맞는 사람들과 소통하고 운동해요.
          </MainTextStyle>
          <ThirdIconBoxStyle>
            <ThirdImageStyle src="./pc/pc_thrid_icon.png"></ThirdImageStyle>
          </ThirdIconBoxStyle>
        </ThirdLeftBoxStyle>
        <TalkBoxStyle>
          <TalkLeftContentStyle>
            <RightArrowBoxStyle>
              안녕하세요~ 오늘 등산 함께하기로 한 멤버 입니다!
              <br />
              아차산역 어디로 가면 될까요?
            </RightArrowBoxStyle>
            <ThirdIconStyle
              src="./pc/pc_third_icon1.png"
              alt="talk"
            ></ThirdIconStyle>
          </TalkLeftContentStyle>
          <TalkRightContentsStyle>
            <ThirdLeftIconStyle
              src="./pc/pc_third_icon2.png"
              alt="talk"
            ></ThirdLeftIconStyle>
            <LeftArrowBoxStyle>
              안녕하세요! 오늘 저녁 8시까지 아차산역 2번 출구
              <br />
              롯데리아 앞으로 오시면 됩니다!
              <br />
              야간등산이니 랜턴 꼭 챙겨주세요!
            </LeftArrowBoxStyle>
          </TalkRightContentsStyle>
          <TalkLeftContentStyle>
            <RightArrowBoxStyle>
              네, 알겠습니다!
              <br />
              오늘 저녁에 뵐게요^^
            </RightArrowBoxStyle>
            <ThirdIconStyle
              src="./pc/pc_third_icon1.png"
              alt="talk"
            ></ThirdIconStyle>
          </TalkLeftContentStyle>
        </TalkBoxStyle>
      </PageInnerStyle>
    </ThirdPageStyle>
  );
}

export default PcThird;
