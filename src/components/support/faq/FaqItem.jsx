import { useEffect, useRef, useState } from 'react';

const FaqItem = ({ faq, isOpen, onClick }) => {
    const { faqId, title, context } = faq;
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');
    useEffect(() => {
        if (isOpen && contentRef.current) {
            setMaxHeight(contentRef.current.scrollHeight + 'px');
        } else {
            setMaxHeight('0px');
        }
    }, [isOpen]);
    return (
        <div className={`accr ${isOpen ? 'on' : ''}`}>
            <div className="accHead" onClick={() => onClick(faqId)}>
                <section>
                    <span className="circle">Q</span>
                    {title}
                </section>
                {isOpen ? (
                    <img src="images/icon/icon_arrow.png" alt="화살표" />
                ) : (
                    <img
                        src="images/icon/icon_arrow.png"
                        alt="화살표"
                        style={{ transform: 'rotate(180deg)' }}
                    />
                )}
            </div>
            <div
                className="accBody pretendard"
                ref={contentRef}
                style={{
                    maxHeight,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                }}
            >
                <p>
                    {context.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default FaqItem;
