import React from "react";
import styled from "styled-components";

const PageStyle = styled.div`
  display: flex;
  justify-content: center;
`;
const InnerStyle = styled.div`
  margin-top: 30px;
  width: 800px;
  padding-left: 5%;
  padding-right: 5%;
  margin-bottom: 50px;
`;
const HFirst = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-top: 60px;
  padding-bottom: 30px;
`;
const HSecond = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const HThird = styled.h3`
  padding-top: 15px;
  padding-bottom: 15px;
  @media ${(props) => props.theme.tablet} {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
function PrivacyTerm() {
  window.scrollTo(0, 0);
  return (
    <PageStyle>
      <InnerStyle>
        <HFirst>1. 총칙</HFirst>
        <HSecond>
          서치플레이 [이하 “회사”]는 회원의 개인정보보호를 소중하게
          생각하고, 회원의 개인정보를 보호하기 위하여 항상 최선을 다해 노력하고
          있습니다.
        </HSecond>
        <HSecond>
          (1) 회사는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 비롯한
          모든 개인정보보호 관련 법률규정을 준수하고 있으며, 관련 법령에 의거한
          개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.
        </HSecond>
        <HSecond>
          (2) 회사는 「개인정보처리방침」을 제정하여 이를 준수하고 있으며, 이를
          인터넷사이트 및 모바일 앱에 공개하여 이용자가 언제나 용이하게 열람할
          수 있도록 하고 있습니다.
        </HSecond>
        <HFirst>2. 항목</HFirst>
        <HSecond>
          회사는 이메일, 나이, 성별, 서비스 이용기록, 결제 및 환불
          기록, 생년월일, 휴대폰번호, 관심분야 등에 관한 정보를 수집합니다.
        </HSecond>
        <HSecond>
          서비스를 이용하는 과정에서 방문일시, 사용이력, 기기정보, 접속로그,
          IP주소 등이 자동으로 생성·수집 될 수 있습니다.
        </HSecond>
        <HSecond>
          회사는 회원가입, 구매 등 서비스 제공을 위한 최소한의 범위 내에서
          이용자의 동의하에 개인정보를 수집하며, 수집한 모든 개인정보는 고지한
          목적 범위 내에서만 이용됩니다.
        </HSecond>
        <HSecond>(1) 회원이 회원가입 또는 본인확인을 할 경우</HSecond>
        <HSecond>
          -주소, 아이디, 이메일, 휴대폰번호, 성별, 나이, 이름, 닉네임, 마케팅수신
          동의여부
        </HSecond>
        <HSecond>
          (2) 회원이 신분증(주민등록증, 운전면허증) 인증을 할 경우
        </HSecond>
        <HSecond>-이름, 주민등록번호 앞자리, 주소</HSecond>
        <HSecond>(3) 회원이 회사와 약정을 체결 할 경우</HSecond>
        <HSecond>-이름, 주소, 연락처</HSecond>
        <HSecond>(4) 회원이 제휴/협력 및 게시 요청을 할 경우</HSecond>
        <HSecond>-단체명, 이름, 직책, 이메일, 연락처</HSecond>
        <HSecond>
          ※ 각 항목 또는 추가적으로 수집이 필요한 항목의 개인정보는 문의하기를
          통한 회원지원 과정 및 별도의 알림 창을 통해서 서비스 이용 중 수집될 수
          있습니다.
        </HSecond>
        <HSecond>
          ※ 서비스 이용과정에서 IP주소 등 서비스 이용기록과 기기정보가 자동으로
          생성되어 수집될 수 있습니다.
        </HSecond>
        <HSecond>
          ※ 회사는 인종, 사상, 의료정보 등 회원의 민감정보를 절대로 수집 하지
          않습니다.
        </HSecond>
        <HFirst>3. 개인정보 이용목적 및 수집방법</HFirst>
        <HSecond>
          (1) 회사는 회원의 식별·확인, 회원가+입 의사 확인, 중복가입 여부
          확인, 계약의 체결·이행·관리, 결제 및 환불, 활동 지역 통계 분석, 운동
          주기 분석, 서비스 개선, 민원 기타 문의 사항 처리, 부정이용에 대한 조사
          및 대응, 고지사항 전달, 청구서 등의 발송, 법령상 의무
          이행, 사은/판촉행사 등 각종 이벤트, 개인 맞춤형 서비스 제공, 새로운
          상품 기타 행사 관련 정보 안내 및 마케팅 활동, 이메일 초대권 활용 내역
          조회, 회사 및 제휴사 상품/서비스 안내 및 권유의 목적으로 개인정보를
          이용합니다.
        </HSecond>
        <HSecond>
          (2) 회사는 홈페이지, 앱, 고객센터, 게시판, 이벤트 참여, 제휴사로부터의
          전달 등을 통해 개인정보를 수집합니다. 이용자는 회사가 마련한 개인정보
          처리 동의서에 대해 「동의」 버튼을 클릭함으로써 개인정보 처리에 대하여
          동의 여부를 표시할 수 있습니다.
        </HSecond>
        <HFirst>4. 개인정보의 보유 및 이용기간</HFirst>
        <HSecond>
          귀하가 제공한 개인정보는 법령에서 별도로 정하거나 귀하와 별도 합의하는
          등의 특별한 사정이 없는 한 회사가 제공하는 서비스를 받는 동안 또는
          위에서 정한 목적을 달성할 때까지 회사가 보유ㆍ이용하게 됩니다. 회사는
          관련 법령(아래의 경우에 한정되지 않습니다)의 규정에 의하여 보존하여야
          하는 기록은 일정 기간 보관 후 파기합니다.
        </HSecond>
        <HSecond>
          가. 계약 또는 청약철회 등에 관한 기록 (보존기간 : 5년) : 전자상거래
          등에서의 소비자 보호에 관한 법률
        </HSecond>
        <HSecond>
          나. 대금결제 및 재화 등의 공급에 관한 기록 (보존기간 : 5년)
          : 전자상거래 등에서의 소비자 보호에 관한 법률
        </HSecond>
        <HSecond>
          다. 소비자의 불만 또는 분쟁처리에 관한 기록 (보존기간 : 3년)
          : 전자상거래 등에서의 소비자 보호에 관한 법률
        </HSecond>
        <HSecond>
          라. 홈페이지 방문에 관한 기록 (보존 기간: 3개월) : 통신비밀보호법
        </HSecond>
        <HFirst>5. 모여라운동 이용 규칙 확인(필수)</HFirst>
        <HSecond>
          (1) 모여라 모임의 방의 상세정보, 리더정보, 참여자목록, 관심있는
          멤버목록 등 예민한 개인정보를 절대로 외부로 유출해서는 안됩니다.
        </HSecond>
        <HSecond>
          (2) 타인의 개인정보 및 계정을 수집, 저장, 공개, 이용하거나, 자신의
          개인정보 및 계정을 공개, 공유해서는 안됩니다.
        </HSecond>
        <HSecond>(3) 그 외 모든 서비스 이용규칙을 지켜야 합니다.</HSecond>
      </InnerStyle>
    </PageStyle>
  );
}

export default PrivacyTerm;
