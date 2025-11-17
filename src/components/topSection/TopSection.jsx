import { TitleBox } from './style';
const TopSection = ({ title, subtitle, $borderTop, $borderBottom }) => {
    return (
        <TitleBox $borderTop={$borderTop} $borderBottom={$borderBottom}>
            <h2>
                <img src="/images/directDelivery/icon/title.png" alt="" />
                {title}
            </h2>
            <p className="pretendard">{subtitle}</p>
        </TitleBox>
    );
};
export default TopSection;
