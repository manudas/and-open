import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

import {
    withStyles,
} from '@material-ui/core/styles';

const marks = [
    {
      value: 0,
      label: '$0',
    },
    {
      value: 5000,
      label: '$5,000',
    },
];

const StyledValueLabelComponent = withStyles({
    tooltip: {
          background: 'transparent',
          color: '#9a9a9a',
          fontSize: '0.9rem',
          fontWeight: 'bold'
    },
})(Tooltip);

const ValueLabelComponent = (props) => {
    const { children, open, value } = props;

    return (
        <StyledValueLabelComponent open={open} enterTouchDelay={0} placement="top" title={`$ ${value.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}`}>
            {children}
        </StyledValueLabelComponent>
    );
}

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
    selectedValue = 0,
    setValue,
}) => {
    return (
        <StyledSlider
            value={selectedValue}
            min={0}
            max={5000}
            marks={marks}
            onChange={setValue}
            track={false}
            valueLabelDisplay="on"
            ValueLabelComponent={ValueLabelComponent}
        />
    );
}

export default Spends;
