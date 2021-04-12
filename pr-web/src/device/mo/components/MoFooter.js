import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const FooterPage = styled.div`
  background-color: #2d2d2d;
  margin-bottom: 64px;
  width: 100%;
`;
const FooterInner = styled.div`
  padding-right: 2.857rem;
  padding-left: 2.857rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 3.429rem;
  border-bottom: 1px solid #474747;
`;
const FooterIcon = styled.img`
  margin-bottom: 2.286rem;
`;
const FooterHeadText = styled.span`
  font-weight: regular;
  font-size: 1.714rem;
  line-height: 5rem;
  color: #ffffff;
`;
const FooterMainText = styled.span`
  font-weight: light;
  font-size: 1.3rem;
  line-height: 3.571rem;
  color: #ffffff;
  margin-bottom: 4.286rem;
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
  font-size: 2rem;
  line-height: 3.714rem;
  color: #ffffff;
  margin-left: 1rem;
`;
const FooterDownBox = styled.div`
  padding-right: 2.857rem;
  padding-left: 2.857rem;
  padding-bottom: 2rem;
`;
const MoFooterIcon = styled.img`
  width: 3.429rem;
  height: 3.429rem;
`;
const MoFooterPhoneIcon = styled.img`
  width: 3rem;
  height: 3rem;
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
function MoFooter() {
  return (
    <FooterPage>
      <FooterInner>
        <FooterIcon src="./pc/footer_logo.svg" alt="logo"></FooterIcon>
        <FooterHeadText>
          <TermLinkStyle to="/usage">이용약관</TermLinkStyle> ㅣ{" "}
          <TermLinkStyle to="/privacy">개인정보 취급방침</TermLinkStyle>
        </FooterHeadText>
        <FooterMainText>
          서치플레이 ㅣ 대표자: 김남재
          <br />
          사업자등록번호:603-57-00365
          <br />
          통신판매업신고번호:2021-서율용산-0677
          <br />
          서울시 용산구 후암로16길 18 1층
          <br />ⓒ Moyeora
        </FooterMainText>
      </FooterInner>
      <FooterDownBox>
        <FooterIconBoxStyle>
          <MoFooterIcon src="./pc/footer_icon1.svg" alt="main"></MoFooterIcon>
          <FooterIconTextStyle>help@cs.team</FooterIconTextStyle>
        </FooterIconBoxStyle>
        <FooterIconBoxStyle>
          <MoFooterPhoneIcon
            src="./pc/footer_icon2.svg"
            alt="phone"
          ></MoFooterPhoneIcon>
          <FooterIconTextStyle>02-778-2920</FooterIconTextStyle>
        </FooterIconBoxStyle>
        <FooterIconBoxStyle>
          <AlinkStyle href="https://blog.naver.com/mowoon1" target="blank">
            <MoFooterIcon src="./pc/blog.svg" alt="blog"></MoFooterIcon>
            <FooterIconTextStyle>Blog</FooterIconTextStyle>
          </AlinkStyle>
        </FooterIconBoxStyle>
        <FooterIconBoxStyle>
          <AlinkStyle
            href="https://instagram.com/mowoon_official?igshid=dv2s7oo6rp7h"
            target="blank"
          >
            <MoFooterIcon src="./pc/insta.svg" alt="insta"></MoFooterIcon>
            <FooterIconTextStyle>Instagram</FooterIconTextStyle>
          </AlinkStyle>
        </FooterIconBoxStyle>
      </FooterDownBox>
    </FooterPage>
  );
}

export default MoFooter;
