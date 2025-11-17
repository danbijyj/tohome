import { useNavigate } from 'react-router-dom';

const BestMenuLi = ({ product }) => {
    const { id, num, name, thumbnail, des } = product;
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`product/${product.num}`);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <li onClick={onGo} className="main-best-li">
            <div className="img-box">
                <img src={thumbnail} alt="" />
            </div>
            <h2>{name}</h2>
            <h3 className="pretendard fw300">
                {des.split('\n').map((line, idx) => (
                    <span key={idx}>
                        {line}
                        <br />
                    </span>
                ))}
            </h3>

            <p>상품보기</p>
        </li>
    );
};

export default BestMenuLi;
