import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import {
    withStyles,
} from '@material-ui/core/styles';

import * as options from '../../data/userDataOptions';

const StyledTypography = withStyles({
    root: {
        marginBottom: '1.3em',
        color: '#9a9a9a',
        fontSize: '0.9rem',
        fontWeight: 'bold',
    },
})(Typography);

const Regions = ({
    selectedValue,
    setValue,
    ...props
}) => {

    return (
        <div>
            <StyledTypography id="non-linear-slider" gutterBottom>
                Select region
            </StyledTypography>
            <Select
                {...props}
                data-testid="drop-down"
                displayEmpty
                value={selectedValue}
                onChange={setValue}
            >
                <MenuItem key="0" value={""}>Select region</MenuItem>
                {
                    options.regions.map((region, regionIndex) => {
                        return <MenuItem key={region} value={regionIndex}>{region}</MenuItem>
                    })
                }
            </Select>
        </div>
    );
}

Regions.propTypes = {
    selectedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setValue: PropTypes.func,
}

Regions.defaultProps = {
    selectedValue: "",
    setValue: Function.prototype,
}

const StyledRegions = withStyles({
    select: {
        width: 300,
        margin: 10,
    },
})(Regions);

export default StyledRegions;
