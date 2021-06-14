import {
    Table,
} from 'antd';

import {
    useSelector,
} from 'react-redux';

import 'antd/dist/antd.css';

import * as dataOptions from '../../data/userDataOptions';

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Birth month',
        dataIndex: 'birthday',
        key: 'birthday',
        render: (monthIndex) => dataOptions.months[monthIndex - 1]
    },
    {
        title: 'Total spent',
        dataIndex: 'spend',
        key: 'spend',
    },
    {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
        render: (regionIndex) => dataOptions.regions[regionIndex]
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
        render: (genderIndex) => dataOptions.genders[genderIndex]
    },
];

const DataTable = () => {
    const filteredDataSet = useSelector((state) => state?.users?.filtered);
    return <Table dataSource={filteredDataSet} columns={columns} />;
}

export default DataTable;
