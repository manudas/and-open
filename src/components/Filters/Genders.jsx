import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';

import {
    withStyles,
} from '@material-ui/core/styles';

import * as options from '../../data/userDataOptions';

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

const StyledTypography = withStyles({
    root: {
        marginBottom: '2em',
        color: '#9a9a9a',
        fontSize: '0.9rem',
        fontWeight: 'bold',
    },
})(Typography);

const Genders = ({
    selectedValue = null,
    setValue,
}) => {
    return (
        <div>
            <StyledTypography id="non-linear-slider" gutterBottom>
                Gender
            </StyledTypography>
            <ButtonGroup
                color="primary"
                aria-label="gender selector"
                data-testid="genders"
            >
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
        </div>
    );
}

const StyledGenders = withStyles({
    root: {
        width: 300,
        margin: 10,
    },
})(Genders);
export default StyledGenders;
