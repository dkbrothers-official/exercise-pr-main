import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const FooterStyle = styled.div`
  width: 100%;
  height: 200px;
  background-color: #2c2c2f;
  border-bottom: 1px solid #474747;
`;
const FooterDownStyle = styled.div`
  width: 100%;
  height: 50px;
  background-color: #2c2c2f;
`;
const FooterUpBoxStyle = styled.div`
  margin-left: 24rem;
  margin-right: 24rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media ${(props) => props.theme.desktop} {
    margin-left: 15rem;
    margin-right: 15rem;
  }
`;
const FooterImageBoxStyle = styled.div`
  margin-top: 2rem;
  padding-right: 5rem;
`;
const FooterHeadTextStyle = styled.span`
  font-weight: regular;
  font-size: 1.4rem;
  line-height: 3.5rem;
  color: #ffffff;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
`;

const FooterMainTextStyle = styled.span`
  font-weight: light;
  font-size: 1.3rem;
  line-height: 2.6rem;
  color: #ffffff;
`;

const FooterUpTextBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterDownBoxStyle = styled.div`
  margin-left: 26rem;
  margin-right: 26rem;
  display: flex;
  flex-direction: row;
`;
const FooterIconBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5rem;
  margin-top: 1.5rem;
  align-items: center;
`;
const FooterIconTextStyle = styled.span`
  font-weight: regular;
  font-size: 1.4rem;
  line-height: 2.6rem;
  color: #ffffff;
  margin-left: 1rem;
  padding-bottom: ${(props) => props.paddingB};
`;
const IconStyle = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
const PhoneIconStyle = styled.img`
  width: 2.3rem;
  height: 2.3rem;
`;
const NewIconStyle = styled.img`
  width: 2.8rem;
  height: 2.8rem;
`;

const AlinkStyle = styled.a`
  all: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
const TermLinkStyle = styled(Link)`
  display: inline;
  all: unset;
  cursor: pointer;
  color: #ffffff;
`;

function PcFooter() {
  return (
    <div>
      <FooterStyle>
        <FooterUpBoxStyle>
          <FooterImageBoxStyle>
            <img src="./pc/footer_logo.svg" alt="logo"></img>
          </FooterImageBoxStyle>
          <FooterUpTextBoxStyle>
            <FooterHeadTextStyle>
              <TermLinkStyle to="/usage">이용약관</TermLinkStyle> ㅣ{" "}
              <TermLinkStyle to="/privacy">개인정보 취급방침</TermLinkStyle>
            </FooterHeadTextStyle>
            <FooterMainTextStyle>
              서치플레이 ㅣ 대표자:김남재 ㅣ 사업자등록번호: 603-57-00365ㅣ
              통신판매업신고번호:2021-서울용산-0677
            </FooterMainTextStyle>
            <FooterMainTextStyle>
              서울시 용산구 후암로16길 18 1층
            </FooterMainTextStyle>
            <FooterMainTextStyle>ⓒ Moyeora</FooterMainTextStyle>
          </FooterUpTextBoxStyle>
        </FooterUpBoxStyle>
      </FooterStyle>
      <FooterDownStyle>
        <FooterDownBoxStyle>
          <FooterIconBoxStyle>
            <IconStyle src="./pc/footer_icon1.svg" alt="main"></IconStyle>
            <FooterIconTextStyle paddingB={"0.3rem"}>
              cs@mowoon.com
            </FooterIconTextStyle>
          </FooterIconBoxStyle>
          <FooterIconBoxStyle>
            <PhoneIconStyle
              src="./pc/footer_icon2.svg"
              alt="phone"
            ></PhoneIconStyle>
            <FooterIconTextStyle paddingB={"0.2rem"}>
              02-778-2920
            </FooterIconTextStyle>
          </FooterIconBoxStyle>
          <FooterIconBoxStyle>
            <AlinkStyle href="https://blog.naver.com/mowoon1" target="blank">
              <NewIconStyle src="./pc/blog.svg" alt="blog"></NewIconStyle>
              <FooterIconTextStyle paddingB={"0.3rem"}>
                Blog
              </FooterIconTextStyle>
            </AlinkStyle>
          </FooterIconBoxStyle>
          <FooterIconBoxStyle>
            <AlinkStyle
              href="https://instagram.com/mowoon_official?igshid=dv2s7oo6rp7h"
              target="blank"
            >
              <NewIconStyle src="./pc/insta.svg" alt="instagram"></NewIconStyle>
              <FooterIconTextStyle paddingB={"0.2rem"}>
                Instagram
              </FooterIconTextStyle>
            </AlinkStyle>
          </FooterIconBoxStyle>
        </FooterDownBoxStyle>
      </FooterDownStyle>
    </div>
  );
}

export default PcFooter;
