import React, {
    useEffect,
} from 'react';

import {
    useDispatch,
} from 'react-redux';

import Filters from './components/Filters';
import DataGraph from './components/DataGraph';
import DataTable from './components/DataTable';

import {
  fetchUsers,
} from './services';

import './Coupons.css';

const Coupons = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchUsers());
    } ,[dispatch]);

    return (
        <>
            <Filters />
            <DataGraph />
            <DataTable />
        </>
    );
}

export default Coupons;
