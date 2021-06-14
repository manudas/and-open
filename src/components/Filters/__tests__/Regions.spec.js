import {
    render,
    fireEvent,
    waitFor
} from '@testing-library/react';
import { act } from "react-dom/test-utils";

import Regions from '../Regions';

describe('Test suite for Regions', () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });

    it('should render and match snapshot', () => {
        let renderer;
        act(() => {
            renderer = render(<Regions />);
            jest.runAllTimers();
        });
        const { container } = renderer;
        expect(container).toMatchSnapshot();
    });

    it('should unfold when clicked and call setValue function if selected value changes', async () => {
        const setRegion = jest.fn();
        let renderer;
        act(() => {
            renderer = render(<Regions setValue={setRegion} />);
            jest.runAllTimers();
        });

        const {
            queryByTestId,
            getByRole
        } = renderer;

        const dropDown = queryByTestId('drop-down');

        fireEvent.mouseDown(dropDown.firstChild);

        let listBox;
        await waitFor(() => listBox = getByRole('listbox'));

        expect(listBox).toBeInTheDocument();

        const dropDownElement = listBox.children[1];

        // Simulate clicking on the United States filter
        fireEvent.click(dropDownElement);

        expect(setRegion).toHaveBeenCalledTimes(1)
    });
});
