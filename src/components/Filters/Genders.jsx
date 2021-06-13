import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import {
    withStyles,
} from '@material-ui/core/styles';

import * as options from '../../data/filterOptions';

const StyledButton = withStyles({
    root: {
        color: '#858585',
        borderColor: '#858585',
        '&:hover' : {
            color: '#4a4a4a',
            borderColor: '#4a4a4a',
            backgroundColor: 'rgba(133, 133, 133, 0.4)'
        },
        '&.selected': {
            backgroundColor: 'rgba(133, 133, 133, 0.6)'
        }
    },
})(Button);

const Genders = ({
    selectedValue = null,
    setValue,
}) => {
    return (
        <ButtonGroup color="primary" aria-label="gender selector">
            {
                options.genders.map((gender, genderIndex) => {
                    return (
                            <StyledButton
                                className={selectedValue === genderIndex ? 'selected' : null}
                                key={gender}
                                onClick={() => setValue(genderIndex)}
                            >
                                {gender}
                            </StyledButton>
                    );
                })
            }
            <StyledButton
                className={selectedValue === null ? 'selected' : null}
                onClick={() => setValue(null)}
            >
                All
            </StyledButton>
        </ButtonGroup>
    );
}

const StyledGenders = withStyles({
    root: {
        width: 300,
        margin: 10,
    },
})(Genders);
export default StyledGenders;
