import { FooterInfoUl } from './style';

const FooterInfo = () => {
    return (
        <FooterInfoUl>
            <li style={{ fontSize: 16 }}>(주)현대백화점</li>
            <li>
                <div>
                    <p>대표이사 : 정지선, 정지영</p>
                    <p>전화 : 02-1800-9549</p>
                    <p>이메일 : tohome@thehyundai.com</p>
                </div>
                <div>
                    <p>주소 : 서울 강남구 테헤란로98길 12 (대치동) 현대백화점</p>
                    <p>사업자 등록번호 : 211-87-21455</p>
                    <p>통신판매업자 신고번호 : 2010-서울강남-01882</p>
                </div>
            </li>
            <li>
                현대식품관 투홈의 개별 판매자가 등록한 상품(브랜드직송) 상품에 대한 광고, 상품주문,
                배송, 환불의 의무와 책임은 각 판매자가 부담하고, 현대식품관 투홈은 통신판매
                중개자로서의 의무와 책임을 다합니다. 고객님의 안전거래를 위해 현금결제 시 KG이니시스
                구매안전 서비스를 이용하실 수 있습니다.
            </li>
        </FooterInfoUl>
    );
};

export default FooterInfo;
