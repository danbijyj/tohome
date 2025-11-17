const SubscribeLi = ({ dishes }) => {
    const { sideId, thumbnail, title, des } = dishes;
    return (
        <li>
            <div className="img-wrap">
                <img src={thumbnail} alt={title} />
            </div>
            <h3>{title}</h3>
            <p className="pretendard fw300">{des}</p>
        </li>
    );
};

export default SubscribeLi;
