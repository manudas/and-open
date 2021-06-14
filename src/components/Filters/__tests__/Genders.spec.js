import {
    render,
    fireEvent,
} from '@testing-library/react';
import { act } from "react-dom/test-utils";

import Genders from '../Genders';

describe('Test suite for Genders', () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });

    it('should render and match snapshot', () => {
        let renderer;
        act(() => {
            renderer = render(<Genders />);
            jest.runAllTimers();
        });
        const { container } = renderer;
        expect(container).toMatchSnapshot();
    });

    it('should call setValue function if some button is clicked', () => {
        const setGender = jest.fn();
        let renderer;
        act(() => {
            renderer = render(<Genders setValue={setGender} />);
            jest.runAllTimers();
        });

        const {
            queryByTestId,
        } = renderer;

        const gendersButtons = queryByTestId('genders');

        // Simulate clicking on a male filter
        fireEvent.click(gendersButtons.firstChild); // male

        expect(setGender).toHaveBeenCalledTimes(1)
    });
});
