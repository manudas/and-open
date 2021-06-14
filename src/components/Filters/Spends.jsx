import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import {
    withStyles,
} from '@material-ui/core/styles';

export const maxSpends = 5000;

const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: maxSpends,
      label: '$5,000',
    },
];

const StyledTypography = withStyles({
    root: {
        marginBottom: '1.3em',
        color: '#9a9a9a',
        fontSize: '0.9rem',
        fontWeight: 'bold',
    },
})(Typography);

const StyledValueLabelComponent = withStyles({
    tooltip: {
          background: 'transparent',
          color: '#9a9a9a',
          fontSize: '0.9rem',
          fontWeight: 'bold',

          marginTop: 25,
          marginBottom: 0,
    }
})(Tooltip);

const ValueLabelComponent = (props) => {
    const { children, open, value } = props;

    return (
        <StyledValueLabelComponent open={open} enterTouchDelay={0} placement="top" title={`$ ${value.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}`}>
            {children}
        </StyledValueLabelComponent>
    );
}

// Shadow styles for the slider handler
const thumbBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)';
const StyledSlider = withStyles({
    root: {
        width: 300,
        margin: 10,
        top: 19
    },
    active: {},
    rail: {
        height: 10,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
        borderRadius: 3,
        top: -5
    },
    thumb: {
        height: 28,
        width: 28,
        marginTop: -29,
        marginLeft: -14,
        boxShadow: thumbBoxShadow,
        backgroundColor: '#fff',
        '&:focus, &:hover, &$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: thumbBoxShadow,
            },
        },
    },
})(Slider);

const Spends = ({
    selectedValue,
    setValue,
}) => {
    return (
        <div>
            <StyledTypography id="non-linear-slider" gutterBottom>
                Minimal spend
            </StyledTypography>
            <StyledSlider
                data-testid="slider"
                value={selectedValue}
                min={0}
                max={maxSpends}
                marks={marks}
                onChange={setValue}
                track={false}
                valueLabelDisplay="on"
                ValueLabelComponent={ValueLabelComponent}
            />
        </div>
    );
}

Spends.propTypes = {
    selectedValue: PropTypes.number,
    setValue: PropTypes.func,
}

Spends.defaultProps = {
    selectedValue: 0,
    setValue: Function.prototype,
}

export default Spends;
