import { useParams } from 'react-router-dom';
import CategoryBox from '../../components/category/CategoryBox';
import CategoryTop from '../../components/category/CategoryTop';
import { CategoryWrap } from './style';
import { useState } from 'react';

const Category = () => {
    const { categoryID } = useParams();
    const [selectedSub, setSelectedSub] = useState(null);

    return (
        <CategoryWrap>
            <CategoryTop
                categoryID={categoryID}
                onSelectSub={setSelectedSub}
                selectedSub={selectedSub}
            />
            <CategoryBox categoryID={categoryID} selectedSub={selectedSub} />
        </CategoryWrap>
    );
};

export default Category;
