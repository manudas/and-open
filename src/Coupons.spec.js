import {
    render,
    fireEvent,
    waitFor
} from '@testing-library/react';
import { act } from "react-dom/test-utils";

import { Provider } from 'react-redux'

import Coupons from './Coupons';
import {
    maxSpends
} from './components/Filters/Spends';

import store from './store/initialStore';
import * as reducer from './store/reducers/users';
import * as utils from './components/Filters/utils';

import * as services from './services';

import users from './__mockedData__/users-unit-tests.json';
import filteredUsers from './__mockedData__/filtered-users-unit-tests-57.json';

const ReduxProvider = ({ children, reduxStore }) => (
    <Provider store={reduxStore}>{children}</Provider>
);

jest.mock('react-chartjs-2', () => ({
    Line: () => null
}));

describe('Test suite for Coupons', () => {

    beforeEach(() => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });

        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.restoreAllMocks(); // clears mocked implementations
        jest.clearAllMocks();
    });


    it('should render and to be in the document', () => {
        let renderer;
        act(() => {
            renderer = render(
                <ReduxProvider reduxStore={store}>
                    <Coupons />
                </ReduxProvider>
            );
            jest.runAllTimers();
        });
        const { container } = renderer;
        expect(container).toBeInTheDocument();
    });

    it('should filter and return appropiate number of users', async () => {
        const filterUserFunction = jest.spyOn(reducer.functions, 'filterUsers');
        jest.spyOn(utils, 'calculateSliderValue').mockImplementation(() => maxSpends/2);
        jest.spyOn(services.userData, 'get').mockReturnValue(users);
        let renderer;
        act(() => {
            renderer = render(
                <ReduxProvider reduxStore={store}>
                    <Coupons />
                </ReduxProvider>
            );
            jest.runAllTimers();
        });

        const {
            getByRole,
            queryByTestId,
        } = renderer;

        // Lets modify the filters and trigger the related events
        const gendersButtons = queryByTestId('genders');
        fireEvent.click(gendersButtons.firstChild); // Male

        const dropDown = queryByTestId('drop-down');
        fireEvent.mouseDown(dropDown.firstChild);

        let listBox;
        await waitFor(() => listBox = getByRole('listbox'));

        expect(listBox).toBeInTheDocument();

        const dropDownElement = listBox.children[1]; // United States
        fireEvent.click(dropDownElement);

        const slider = queryByTestId('slider');
        fireEvent.mouseDown(slider);

        await waitFor(() => {
            expect(filterUserFunction).toHaveBeenCalledTimes(4); // fetch + filters(gender, region, spends)
        });
        expect(filterUserFunction).toHaveNthReturnedWith(4, Array(57).fill(expect.anything())); // only 57 elements out of 1000 after filtering
        expect(filterUserFunction).toHaveNthReturnedWith(4, filteredUsers); // captured json with 4th execution returning data
    });
});
