import {
    render,
    fireEvent,
} from '@testing-library/react';
import { act } from "react-dom/test-utils";

import Spends from '../Spends';

describe('Test suite for Spends', () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });

    it('should render and be in the document', () => {
        let renderer;
        act(() => {
            renderer = render(<Spends />);
            jest.runAllTimers();
        });
        const { container } = renderer;
        expect(container).toBeInTheDocument();
    });

    it('should call setValue function if slider is dragged', () => {
        const setSpends = jest.fn();
        let renderer;
        act(() => {
            renderer = render(<Spends setValue={setSpends} />);
            jest.runAllTimers();
        });

        const {
            queryByTestId,
        } = renderer;

        const slider = queryByTestId('slider');

        fireEvent.mouseDown(slider, {
            clientX: 1,
            clientY: 0
        });

        expect(setSpends).toHaveBeenCalledTimes(1);
    });
});
