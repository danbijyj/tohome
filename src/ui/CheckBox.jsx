import { CheckboxStyle } from './style';

const Checkbox = ({ checked, onChange, disabled, label, htmlFor, top, bottom, left, right }) => {
    return (
        <CheckboxStyle $top={top} $left={left} $right={right} $bottom={bottom}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                id={htmlFor}
            />
            <span className="custom-check" />
            <span className="check-label">{label}</span>
        </CheckboxStyle>
    );
};

export default Checkbox;
