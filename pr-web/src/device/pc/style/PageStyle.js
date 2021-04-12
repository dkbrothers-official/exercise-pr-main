import styled from "styled-components";

const FirstColorPageStyle = styled.div`
  padding-top: 10rem;
  width: 100%;
  height: 78.6rem;
  background-color: #4f7eed;
`;
const SecondPageStyle = styled.div`
  width: 100%;
  height: 88.2rem;
`;
const ThirdPageStyle = styled.div`
  width: 100%;
  height: 50rem;
  background-color: #f8f9fa;
`;
const FourthPageStyle = styled.div`
  width: 100%;
  height: 95rem;
`;
const FifthPageStyle = styled.div`
  width: 100%;
  height: 93.5rem;
  background-color: #f8f9fa;
`;
const SixthPageStyle = styled.div`
  width: 100%;
  height: 12rem;
  background-color: #efefef;
`;

const FirstColorInnerStyle = styled.div`
  margin-left: 24rem;
  margin-right: 9.16rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media ${(props) => props.theme.desktop} {
    margin-left: 15rem;
  }
  @media ${(props) => props.theme.laptop} {
    margin-left: 7rem;
  }
`;
const PageInnerStyle = styled.div`
  margin-left: 24rem;
  margin-right: 24rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media ${(props) => props.theme.desktop} {
    margin-left: 15rem;
    margin-right: 15rem;
  }
  @media ${(props) => props.theme.laptop} {
    margin-left: 7rem;
    margin-right: 7rem;
  }
`;
const SixPageInnerStyle = styled.div`
  margin-left: 24rem;
  margin-right: 24rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-item: center;
  @media ${(props) => props.theme.desktop} {
    margin-left: 15rem;
    margin-right: 15rem;
  }
  @media ${(props) => props.theme.laptop} {
    margin-left: 7rem;
    margin-right: 7rem;
  }
`;

export {
  FirstColorPageStyle,
  SecondPageStyle,
  ThirdPageStyle,
  FourthPageStyle,
  FifthPageStyle,
  SixthPageStyle,
  FirstColorInnerStyle,
  PageInnerStyle,
  SixPageInnerStyle,
};
