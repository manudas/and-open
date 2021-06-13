import React, {
    useMemo,
} from 'react';

import { Line } from 'react-chartjs-2';

import {
    useSelector,
} from 'react-redux';

import {
    calculateDataSet,
} from './utils';

import * as dataOptions from '../../data/userDataOptions';

const DataGraph = () => {
    const filteredDataSet = useSelector((state) => state?.users?.filtered);
    const memoizedDataSet = useMemo(() => {
        const graphDataSet = calculateDataSet(filteredDataSet);

        return graphDataSet;
    }, [filteredDataSet]);

    const data = {
        labels: dataOptions.months,
        datasets: [
            {
                label: 'Monthly',
                data: memoizedDataSet.monthly,
                fill: true,
                backgroundColor: 'rgb(10, 179, 209)',
                borderColor: 'rgba(10, 179, 209, 0.2)',
            },
            {
                label: 'Cumulative',
                data: memoizedDataSet.cumulative,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
    };

    return <Line data={data} options={options} />;
}

export default DataGraph;
