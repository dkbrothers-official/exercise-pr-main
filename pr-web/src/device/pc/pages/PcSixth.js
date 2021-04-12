import React from "react";
import styled from "styled-components";
import { SixthPageStyle, SixPageInnerStyle } from "../style/PageStyle";
const SixImageStyle = styled.img`
  margin: 3rem 1rem;
  width: 23rem;
  height: 6rem;
  cursor: pointer;
`;
const AStyle = styled.a`
  all: unset;
  cursor: pointer; ;
`;
function PcSixth() {
  return (
    <SixthPageStyle>
      <SixPageInnerStyle>
        <AStyle
          href="https://apps.apple.com/kr/app/%EB%AA%A8%EC%97%AC%EB%9D%BC%EC%9A%B4%EB%8F%99/id1538529856"
          target="blank"
        >
          <SixImageStyle src="./pc/app_store.svg" alt="apple"></SixImageStyle>
        </AStyle>
        <SixImageStyle src="./pc/google_play.svg" alt="google"></SixImageStyle>
      </SixPageInnerStyle>
    </SixthPageStyle>
  );
}

export default PcSixth;
