import { Box, ItemBox } from './style';
import SubBox from './SubBox';
const Cartitem = ({ cart, setIsCartTab }) => {
    return (
        <Box>
            <div className="left">
                <SubBox cart={cart} setIsCartTab={setIsCartTab} />
            </div>
        </Box>
    );
};

export default Cartitem;
