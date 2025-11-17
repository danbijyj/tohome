const FloatingMenuItem = ({ menu }) => {
    const { id, img, menuTitle } = menu;
    return (
        <div className="item">
            <div className="txt-box">
                <img src={img} alt="" />
                <p>{menuTitle}</p>
            </div>
        </div>
    );
};

export default FloatingMenuItem;
