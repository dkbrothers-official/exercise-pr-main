import React from "react";
import styled from "styled-components";

const MoThirdPage = styled.div`
  background-color: #f8f9fa;
  width: 100%;
`;
const MoThirdInner = styled.div`
  margin-right: 2.857rem;
  margin-left: 2.857rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 8.571rem;
  align-items: center;
`;
const MoThirdHeadText = styled.span`
  font-weight: bold;
  font-size: 3.429rem;
  line-height: 5rem;
  color: #333333;
  text-align: center;
  margin-bottom: 2.286rem;
`;
const MoThirdMainText = styled.span`
  font-weight: regular;
  font-size: 2rem;
  line-height: 3.429rem;
  color: #333333;
  text-align: center;
  margin-bottom: 5.714rem;
`;
const MoThirdContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 9.143rem;
  max-width: 51.429rem;
`;
const MoTalkRightContentsStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
  width: 100%;
`;
const MoTalkLeftContentStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MoRightUpArrowBoxStyle = styled.div`
  position: relative;
  background: #336cf2;
  border-radius: 2rem;
  padding: 1.8rem 1.6rem;
  font-weight: regular;
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: #ffffff;
  box-shadow: 0px 3px 6px 0.1px rgba(6, 86, 255, 0.14);
  width: 100%;

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
    border-width: 2rem;
    margin-top: -2rem;
  }
`;
const MoRightArrowBoxStyle = styled.div`
  position: relative;
  background: #336cf2;
  border-radius: 2rem;
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
    border-width: 2rem;
    margin-top: -2rem;
  }
`;
const MoLeftArrowBoxStyle = styled.div`
  position: relative;
  background: #FFFFFF;
  border-radius: 14px;
  padding: 1.8rem 1.6rem;
  font-weight: regular;
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: #333333;
  box-shadow: 0px 3px 6px 0.1px rgba(6,86,255, .14);
  width:100%;

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
	border-width: 2rem;
	margin-top: -2rem;
`;
const MoThirdIconStyle = styled.img`
  width: 5.4rem;
  height: 5.4rem;
  margin-left: 3rem;
`;
const MoThirdLeftIconStyle = styled.img`
  width: 5.4rem;
  height: 5.4rem;
  margin-right: 3rem;
`;
function MoThird() {
  return (
    <MoThirdPage>
      <MoThirdInner>
        <MoThirdHeadText>원하는 시간, 원하는 장소에서!</MoThirdHeadText>
        <MoThirdMainText>
          혼자서도 ‘함께’ 운동을 즐길 수 있습니다.
          <br />
          시간 맞는 사람들과 소통하고 운동해요.
        </MoThirdMainText>
        <MoThirdContentBox>
          <MoTalkLeftContentStyle>
            <MoRightUpArrowBoxStyle>
              안녕하세요~
              <br /> 오늘 등산 함께하기로 한 멤버 입니다!
              <br /> 아차산역 어디로 가면 될까요?
            </MoRightUpArrowBoxStyle>
            <MoThirdIconStyle src="./pc/pc_third_icon1.png"></MoThirdIconStyle>
          </MoTalkLeftContentStyle>
          <MoTalkRightContentsStyle>
            <MoThirdLeftIconStyle src="./pc/pc_third_icon2.png"></MoThirdLeftIconStyle>
            <MoLeftArrowBoxStyle>
              안녕하세요!
              <br />
              오늘 저녁 8시까지 아차산역 2번 출구
              <br />
              롯데리아 앞으로 오시면 됩니다!
              <br />
              야간등산이니 랜턴 꼭 챙겨주세요!
            </MoLeftArrowBoxStyle>
          </MoTalkRightContentsStyle>
          <MoTalkLeftContentStyle>
            <MoRightArrowBoxStyle>
              네, 알겠습니다!
              <br />
              오늘 저녁에 뵐게요^^
            </MoRightArrowBoxStyle>
            <MoThirdIconStyle src="./pc/pc_third_icon1.png"></MoThirdIconStyle>
          </MoTalkLeftContentStyle>
        </MoThirdContentBox>
      </MoThirdInner>
    </MoThirdPage>
  );
}

export default MoThird;
