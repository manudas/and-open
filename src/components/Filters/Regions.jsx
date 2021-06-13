import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {
    withStyles,
} from '@material-ui/core/styles';

import * as options from '../../data/filterOptions';

const Regions = ({
    selectedValue = "",
    setValue,
    ...props
}) => {
    return (
        <Select
            {...props}
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
    );
}

const StyledRegions = withStyles({
    select: {
        width: 300,
        margin: 10,
    },
})(Regions);

export default StyledRegions;
