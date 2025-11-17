import React from 'react';
import { SyncLoader } from 'react-spinners';
import { SpinnerStyle } from './style';

const Spinner = () => {
    return (
        <SpinnerStyle>
            <SyncLoader color="#3C6039" loading={true} size={12} margin={8} speedMultiplier={0.8} />
            <div className="bg"></div>
        </SpinnerStyle>
    );
};

export default Spinner;
