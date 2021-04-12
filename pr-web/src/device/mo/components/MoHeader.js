import React from "react";
import styled from "styled-components";
const HeaderPageStyle = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 64px;
  background-color: #ffffff;
  box-shadow: 0px 3px 6px 0.1px rgba(0, 0, 0, 0.04);
`;
const HeaderIconBoxStyle = styled.div`
  margin-right: 2.857rem;
  margin-left: 2.857rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.714rem;
`;
const HeaderLogo = styled.img`
  cursor: pointer;
  margin-bottom: 1.571rem;
`;
function MoHeader() {
  return (
    <HeaderPageStyle>
      <HeaderIconBoxStyle>
        <HeaderLogo src="./mo/logo.svg" alt="logo"></HeaderLogo>
      </HeaderIconBoxStyle>
    </HeaderPageStyle>
  );
}

export default MoHeader;
