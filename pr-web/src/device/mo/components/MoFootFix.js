import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterBox = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 30;
  height: 64px;
  background-color: #155bff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: auto;
`;
const FooterFixTextBoxStyle = styled.div`
  font-size: 2.286rem;
  font-weight: bold;
  color: #ffffff;
`;
function MoFootFix() {
  const [link, setLink] = useState();
  useEffect(() => {
    const checkMobile = () => {
      const varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
      console.log(varUA);

      if (varUA.indexOf("android") > -1) {
        //안드로이드
        return "https://play.google.com/store?hl=ko";
      } else if (
        varUA.indexOf("iphone") > -1 ||
        varUA.indexOf("ipad") > -1 ||
        varUA.indexOf("ipod") > -1
      ) {
        //IOS
        return "https://apps.apple.com/kr/app/%EB%AA%A8%EC%97%AC%EB%9D%BC%EC%9A%B4%EB%8F%99/id1538529856";
      } else {
        //아이폰, 안드로이드 외
        return "http://mowoon.com/";
      }
    };
    setLink(checkMobile);
  }, [setLink]);

  return (
    <a href={link}>
      <FooterBox>
        <FooterFixTextBoxStyle>다운로드</FooterFixTextBoxStyle>
      </FooterBox>
    </a>
  );
}

export default MoFootFix;
