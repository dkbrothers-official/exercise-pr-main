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
            ????????? ??????, ????????? ????????????!
          </ContentHeadTextStyle>
          <MainTextStyle>
            ???????????? ???????????? ????????? ?????? ??? ????????????.
            <br />
            ?????? ?????? ???????????? ???????????? ????????????.
          </MainTextStyle>
          <ThirdIconBoxStyle>
            <ThirdImageStyle src="./pc/pc_thrid_icon.png"></ThirdImageStyle>
          </ThirdIconBoxStyle>
        </ThirdLeftBoxStyle>
        <TalkBoxStyle>
          <TalkLeftContentStyle>
            <RightArrowBoxStyle>
              ???????????????~ ?????? ?????? ??????????????? ??? ?????? ?????????!
              <br />
              ???????????? ????????? ?????? ??????????
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
              ???????????????! ?????? ?????? 8????????? ???????????? 2??? ??????
              <br />
              ???????????? ????????? ????????? ?????????!
              <br />
              ?????????????????? ?????? ??? ???????????????!
            </LeftArrowBoxStyle>
          </TalkRightContentsStyle>
          <TalkLeftContentStyle>
            <RightArrowBoxStyle>
              ???, ???????????????!
              <br />
              ?????? ????????? ?????????^^
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
