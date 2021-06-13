import * as options from '../../data/userDataOptions';

export const defaultCouponCost = 5;

export const calculateDataSet = (filteredDataSet = [], couponCost = defaultCouponCost) => {
    return filteredDataSet.reduce((accumulator, currentUser) => {
        const monthly = [...accumulator.monthly];
        monthly[currentUser.birthday - 1] += 1;
        const cumulative = [...accumulator.cumulative];
        for (let i = currentUser.birthday; i <= options.months.length; i++) {
            cumulative[i - 1] += couponCost;
        }
        return {
            monthly,
            cumulative,
        }
    }, {
        monthly: Array(options.months.length).fill(0), // number of people by month
        cumulative: Array(options.months.length).fill(0), // cumulative cost = number of people from January to current month * $5
    })
}
