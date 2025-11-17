import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { JoinInfoStyle } from './style';
import Checkbox from '../../ui/CheckBox';
import JoinInfoData from '../../assets/data/JoinInfoData';

const JoinInfo = () => {
    const [checkedItems, setCheckedItems] = useState({
        admit1: false,
        admit2: false,
        admit3: false,
        admit4: false,
        sms: false,
        email: false,
    });

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setCheckedItems((prev) => ({ ...prev, [id]: checked }));
    };

    const handleAllCheck = (e) => {
        const { checked } = e.target;
        setCheckedItems({
            admit1: checked,
            admit2: checked,
            admit3: checked,
            admit4: checked,
            sms: checked,
            email: checked,
        });
    };

    const isAllChecked = Object.values(checkedItems).every(Boolean);

    const [openIndex, setOpenIndex] = useState(4);

    const toggleBox = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <JoinInfoStyle>
            <section className="info-tab-wrap">
                <form action="">
                    <input
                        type="checkbox"
                        name=""
                        id=""
                        checked={isAllChecked}
                        onChange={handleAllCheck}
                    />
                    <label htmlFor="" className="pretendard">
                        전체 약관에 동의합니다.
                    </label>
                </form>
                <div className="info-tab-box info-tab-box1">
                    <div className="info-tab-head" onClick={() => toggleBox(1)}>
                        <form action="">
                            <Checkbox
                                className="checkbox fw500"
                                checked={checkedItems.admit1}
                                onChange={handleCheckboxChange}
                                label="[필수] 이용약관 동의"
                                htmlFor="admit1"
                                top={'25%'}
                            />
                        </form>
                        <p className="arrowDown">
                            <MdOutlineKeyboardArrowDown
                                style={{
                                    transform: `${
                                        openIndex === 1
                                            ? 'rotate(180deg)'
                                            : 'none'
                                    }`,
                                }}
                            />
                        </p>
                    </div>
                    {openIndex === 1 && (
                        <div className="info-tab-body">
                            <p>
                                {JoinInfoData[0].info
                                    .split('\n')
                                    .map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </p>
                        </div>
                    )}
                </div>
                <div className="info-tab-box info-tab-box2">
                    <div className="info-tab-head" onClick={() => toggleBox(2)}>
                        <form action="">
                            <Checkbox
                                checked={checkedItems.admit2}
                                onChange={handleCheckboxChange}
                                label="[필수] 개인정보 수집 및 이용 동의"
                                htmlFor="admit2"
                                top={'25%'}
                            />
                        </form>
                        <p className="arrowDown">
                            <MdOutlineKeyboardArrowDown
                                style={{
                                    transform: `${
                                        openIndex === 2
                                            ? 'rotate(180deg)'
                                            : 'none'
                                    }`,
                                }}
                            />
                        </p>
                    </div>
                    {openIndex === 2 && (
                        <div className="info-tab-body">
                            <p>
                                {JoinInfoData[1].info
                                    .split('\n')
                                    .map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </p>
                        </div>
                    )}
                </div>
                <div className="info-tab-box info-tab-box3">
                    <div className="info-tab-head" onClick={() => toggleBox(3)}>
                        <form action="">
                            <Checkbox
                                className="checkbox"
                                checked={checkedItems.admit3}
                                onChange={handleCheckboxChange}
                                label="[선택] 마케팅 광고 활용을 위한 수집 및 이용 동의"
                                htmlFor="admit3"
                                top={'25%'}
                            />
                        </form>
                        <p className="arrowDown">
                            <MdOutlineKeyboardArrowDown
                                style={{
                                    transform: `${
                                        openIndex === 3
                                            ? 'rotate(180deg)'
                                            : 'none'
                                    }`,
                                }}
                            />
                        </p>
                    </div>
                    {openIndex === 3 && (
                        <div className="info-tab-body">
                            <p>
                                {JoinInfoData[2].info
                                    .split('\n')
                                    .map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            <br />
                                        </span>
                                    ))}
                            </p>
                        </div>
                    )}
                </div>
                <div className="info-tab-box info-tab-box4">
                    <div className="info-tab-head" onClick={() => toggleBox(4)}>
                        <form action="">
                            <Checkbox
                                className="checkbox"
                                checked={checkedItems.admit4}
                                onChange={handleCheckboxChange}
                                label="[선택] 광고성 정보 수신 동의"
                                htmlFor="admit4"
                                top={'25%'}
                            />
                        </form>
                        <p className="arrowDown">
                            <MdOutlineKeyboardArrowDown
                                style={{
                                    transform: `${
                                        openIndex === 4
                                            ? 'rotate(180deg)'
                                            : 'none'
                                    }`,
                                }}
                            />
                        </p>
                    </div>
                    <div className="info-tab-body ">
                        {openIndex === 4 && (
                            <section className="checkbox-wrap">
                                <div className="checkbox">
                                    <Checkbox
                                        label="SMS 수신 동의"
                                        checked={checkedItems.sms}
                                        onChange={handleCheckboxChange}
                                        htmlFor="sms"
                                    />
                                </div>
                                <div className="checkbox">
                                    <Checkbox
                                        label="이메일 수신 동의"
                                        checked={checkedItems.email}
                                        onChange={handleCheckboxChange}
                                        htmlFor="email"
                                    />
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </section>
        </JoinInfoStyle>
    );
};

export default JoinInfo;
