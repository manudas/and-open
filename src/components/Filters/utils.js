/**
 * Used to mock the slider value
 * in the unit tests
 *
 * @param {Number} value The new value in the slider
 * @returns The new slider value to be spread throughout
 * the application, that may not be the same as the
 * original value if this function has been mocked
 */
export const calculateSliderValue = value => value;
