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
        <MoThirdHeadText>????????? ??????, ????????? ????????????!</MoThirdHeadText>
        <MoThirdMainText>
          ???????????? ???????????? ????????? ?????? ??? ????????????.
          <br />
          ?????? ?????? ???????????? ???????????? ????????????.
        </MoThirdMainText>
        <MoThirdContentBox>
          <MoTalkLeftContentStyle>
            <MoRightUpArrowBoxStyle>
              ???????????????~
              <br /> ?????? ?????? ??????????????? ??? ?????? ?????????!
              <br /> ???????????? ????????? ?????? ??????????
            </MoRightUpArrowBoxStyle>
            <MoThirdIconStyle src="./pc/pc_third_icon1.png"></MoThirdIconStyle>
          </MoTalkLeftContentStyle>
          <MoTalkRightContentsStyle>
            <MoThirdLeftIconStyle src="./pc/pc_third_icon2.png"></MoThirdLeftIconStyle>
            <MoLeftArrowBoxStyle>
              ???????????????!
              <br />
              ?????? ?????? 8????????? ???????????? 2??? ??????
              <br />
              ???????????? ????????? ????????? ?????????!
              <br />
              ?????????????????? ?????? ??? ???????????????!
            </MoLeftArrowBoxStyle>
          </MoTalkRightContentsStyle>
          <MoTalkLeftContentStyle>
            <MoRightArrowBoxStyle>
              ???, ???????????????!
              <br />
              ?????? ????????? ?????????^^
            </MoRightArrowBoxStyle>
            <MoThirdIconStyle src="./pc/pc_third_icon1.png"></MoThirdIconStyle>
          </MoTalkLeftContentStyle>
        </MoThirdContentBox>
      </MoThirdInner>
    </MoThirdPage>
  );
}

export default MoThird;
