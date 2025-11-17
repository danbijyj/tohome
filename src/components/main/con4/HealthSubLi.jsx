import React from 'react';
import { useNavigate } from 'react-router-dom';

const HealthSubLi = ({ product }) => {
    const { id, name, price, thumbnail } = product;
    const navigate = useNavigate();
    const onGo = () => {
        navigate(`product/${id}`);
    };
    return (
        <li onClick={onGo}>
            <img src={thumbnail} alt="" />
            <h2>{name}</h2>
            <p>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
        </li>
    );
};

export default HealthSubLi;
