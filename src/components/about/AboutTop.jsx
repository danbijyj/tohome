import { AboutTopWrap } from './style';

const AboutTop = () => {
    return (
        <AboutTopWrap>
            <>
                <p className="about-logo">
                    <img src="/images/about/about_logo.png" alt="" />
                </p>
                <p className="about-title">
                    TASTE <span>the</span> BEST
                </p>
                <div className="about-text">
                    <p>
                        현대식품관은 현대백화점의 식품 생활 유통 브랜드입니다.
                    </p>
                    <p>
                        반세기 전 처음 고객을 맞이한 후, 오랜 세월 백화점만이
                        약속할 수 있는 품질과 책임을 지키기 위해 노력했습니다.
                    </p>
                    <p>
                        오늘도 우리는 최고를 자부하기에 앞서 최선이 무엇인지
                        고민합니다.
                    </p>
                    <p>
                        그날 가장 달콤한 과일과 신선한 생선을 찾기 위해 새벽
                        시장을 누빕니다.
                    </p>
                    <p>
                        변함없이 유지해온 유통과 위생 원칙으로 ‘실패하지 않는
                        쇼핑’을 약속합니다.
                    </p>
                    <p>
                        삶을 더 기쁘고 빛나게 해줄 생활 용품들을 두루
                        소개합니다.
                    </p>
                    <p>
                        ‘건강한 삶’이 그저 마케팅 용어로 유통되는 시대,
                        현대식품관의 진정성은 흙 속의 뿌리처럼 빛납니다.
                    </p>
                    <p>
                        이제 그 전통이 더욱 빠르고 편리한 온라인 쇼핑으로
                        이어집니다.
                    </p>
                </div>
            </>
        </AboutTopWrap>
    );
};

export default AboutTop;
