import { DetailArtMainStyle } from './style';
import { FaCheck } from 'react-icons/fa6';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const DetailArtMain = ({ obj }) => {
    const { thumbnail, name } = obj || {};

    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;
        if (!container || !content) return;

        const getMax = () => Math.max(0, content.scrollWidth - container.clientWidth);

        const onWheel = (e) => {
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

            const max = getMax();
            const left = container.scrollLeft;
            const atLeft = left <= 0 && delta < 0;
            const atRight = left >= max - 1 && delta > 0;

            if (atLeft || atRight) return;

            e.preventDefault();
            const speed = 1.2;
            const next = left + delta * speed;
            const target = Math.max(0, Math.min(max, next));
            gsap.to(container, { scrollLeft: target, duration: 0.3, ease: 'power2.out' });
        };

        container.addEventListener('wheel', onWheel, { passive: false });
        return () => container.removeEventListener('wheel', onWheel);
    }, []);

    return (
        <DetailArtMainStyle ref={containerRef}>
            <div className="detailContent" ref={contentRef}>
                <div className="mainImg">
                    {thumbnail && <img src={thumbnail} alt={name ?? ''} />}
                </div>

                <div className="box box1">
                    <div className="smallImg">
                        <img src="/images/product/detailArt/smallImg1.png" alt="" />
                        <h2>이 계절, 가장 달큰한 수박</h2>
                        <p>
                            따스한 햇볕 아래서 즐기는 달큰한 수박만큼 시원한 과일은 없지요.
                            <br />
                            날씨가 무더워지며 비로소 달콤하게 여무는 과일로, 다가오는 계절과 함께
                            이맘때면 <br /> 언제나 기다려집니다. 현대식품관이 엄선한 고당도 수박은
                            재배 시기에 따라 하남, <br /> 고령, 고창, 음성, 봉화, 양구 등 산지를
                            달리합니다. <br /> 그때마다 가장 달큰한 수박을 찾아 나서기 때문이죠.
                            <br /> 비파괴 선과 방식으로 측정한 13Brix 이상의 검증된 달콤함을
                            맛보세요.
                        </p>
                    </div>
                </div>

                <div className="box box2">
                    <div className="smallImg">
                        <img src="/images/product/detailArt/smallImg2.png" alt="" />
                        <div className="text">
                            <div className="txt">
                                <strong>식탁에 오를 자격</strong>
                                <ul>
                                    <li>
                                        <FaCheck /> 13Brix 이상의 고당도 수박
                                    </li>
                                    <li>
                                        <FaCheck /> 재배 시기에 따라 산지별 우수 상품 선별
                                    </li>
                                    <li>
                                        <FaCheck /> 현대식품관의 엄격한 품질 관리
                                    </li>
                                </ul>
                            </div>
                            <div className="txt">
                                <strong>미각노트</strong>
                                <ul>
                                    <li>
                                        <FaCheck /> 높은 당도의 시원한 맛
                                    </li>
                                    <li>
                                        <FaCheck /> 수분을 가득 품은 아삭한 식감
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box box3">
                    <div className="title">
                        <img src="/images/product/detailArt/title.png" alt="" />
                        <strong>우리의 책임과 존중</strong>
                    </div>
                    <div className="content">
                        <div className="profile">
                            <img src="/images/product/detailArt/person.png" alt="" />
                        </div>
                        <div className="txt">
                            <strong>현대식품관 임충호 바이어 </strong>
                            <p>
                                “현대백화점의 바이어는 매일 아침 가락시장에 나가 ‘깐깐하고
                                <br />
                                단호한’ 태도로 경매를 확인하고 상품을 검수합니다. …
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </DetailArtMainStyle>
    );
};

export default DetailArtMain;
