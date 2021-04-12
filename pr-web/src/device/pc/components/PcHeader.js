import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const HeaderPageStyle = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 10rem;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px 0.1px rgba(0, 0, 0, 0.04);
`;
const HeaderIconBoxStyle = styled.div`
  margin-right: 24rem;
  margin-left: 24rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${(props) => props.theme.laptop} {
    margin-left: 7rem;
    margin-right: 7rem;
  }
  @media ${(props) => props.theme.desktop} {
    margin-left: 15rem;
    margin-right: 15rem;
  }
`;
const HeaderLogStyle = styled.img`
  margin-top: 1.8rem;
  width: 10.2rem;
  height: 6.5rem;
  cursor: pointer;
`;
const HeaderAppleStyle = styled.img`
  margin-right: 2rem;
  margin-top: 2rem;
  width: 23rem;
  height: 6rem;
  cursor: pointer;
`;
const HeaderGoogleStyle = styled.img`
  margin-top: 2rem;
  width: 23rem;
  height: 6rem;
  cursor: pointer;
`;
const AStyle = styled.a`
  all: unset;
  cursor: pointer; ;
`;
function PcHeader() {
  return (
    <div>
      <HeaderPageStyle>
        <HeaderIconBoxStyle>
          <Link to="/">
            <HeaderLogStyle src="./pc/logo.svg"></HeaderLogStyle>
          </Link>
          <div>
            <AStyle
              href="https://apps.apple.com/kr/app/%EB%AA%A8%EC%97%AC%EB%9D%BC%EC%9A%B4%EB%8F%99/id1538529856"
              target="blank"
            >
              <HeaderAppleStyle src="./pc/app_store.svg"></HeaderAppleStyle>
            </AStyle>
            <HeaderGoogleStyle src="./pc/google_play.svg"></HeaderGoogleStyle>
          </div>
        </HeaderIconBoxStyle>
      </HeaderPageStyle>
    </div>
  );
}

export default PcHeader;
