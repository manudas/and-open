import {
    useDispatch,
    useSelector,
} from 'react-redux';

import Genders from './Genders';
import Regions from './Regions';
import Spends from './Spends';

import {
    SET_FILTER,
} from '../../store/action-creators';

import {
    calculateSliderValue,
} from './utils';

import './styles.scss';

const Filters = () => {
    const dispatch = useDispatch();
    const genderValue = useSelector((state) => state?.users?.filters?.gender);
    const regionValue = useSelector((state) => state?.users?.filters?.region);
    const spendValue = useSelector((state) => state?.users?.filters?.spend);

    return (
        <section className="filters">
            <Spends
                setValue={(_, val) => {
                    const calculatedValue = calculateSliderValue(val);
                    dispatch(SET_FILTER('spend', calculatedValue));
                }}
                selectedValue={spendValue}
            />
            <Regions
                setValue={(event) => dispatch(SET_FILTER('region', event.target.value))}
                selectedValue={regionValue}
            />
            <Genders
                setValue={(val) => dispatch(SET_FILTER('gender', val))}
                selectedValue={genderValue}
            />
        </section>
    );
}

export default Filters;
