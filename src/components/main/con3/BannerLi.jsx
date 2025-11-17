const BannerLi = ({ banner }) => {
    const { img1, img2, img3, p } = banner;
    return (
        <div className="img-box hover">
            <img src={img1} alt="img1" />
            <img src={img2} alt="img2" />
            <img src={img3} alt="img3" />
            <p>{p}</p>
            <button>
                자세히보기 <img src="images/icon/icon_all_w.png" alt="" />
            </button>
        </div>
    );
};

export default BannerLi;
