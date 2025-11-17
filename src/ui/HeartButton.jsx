import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { likesActions, makeSelectIsLiked } from '../store/modules/likesSlice';
import { HeartButtonStyle } from './style';

const HeartButton = ({
    productId,
    className = '',
    variant = 'overlay',
    onUnliked,
    onRequireLogin,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector((s) => s.auth?.user?.id);

    const selectIsLiked = useMemo(() => makeSelectIsLiked(), []);
    const isLiked = useSelector((s) => selectIsLiked(s, userId, productId));

    const [hover, setHover] = useState(false);

    const handleClick = (e) => {
        e?.stopPropagation?.();
        e?.preventDefault?.();

        if (!userId) {
            onRequireLogin?.();
            navigate('/login');
            return;
        }
        if (productId == null) return;

        const wasLiked = isLiked;
        dispatch(likesActions.toggleLike({ userId, productId }));

        if (variant === 'mypage' && wasLiked) onUnliked?.(productId);
    };

    const filled = variant === 'overlay' ? hover || isLiked : isLiked;

    const a11y = { 'aria-label': '좋아요', 'aria-pressed': isLiked };

    if (variant === 'overlay') {
        return (
            <button
                {...a11y}
                className={`icon-btn heart ${className}`}
                onClick={handleClick}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {filled ? <BsSuitHeartFill /> : <BsSuitHeart />}
            </button>
        );
    }

    return (
        <HeartButtonStyle {...a11y} className={`heart-chip ${className}`} onClick={handleClick}>
            {filled ? <BsSuitHeartFill /> : <BsSuitHeart />}
        </HeartButtonStyle>
    );
};

export default HeartButton;
