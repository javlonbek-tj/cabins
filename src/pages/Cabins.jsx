import React from 'react';
import Row from '../UI/shared/Row';
import Heading from '../UI/shared/Heading';
import CabinTable from '../features/cabins/CabinTable';

const Cabins = () => {
  return (
    <>
      <Row>
        <Heading>All Cabins</Heading>
        <p>Filter/Sort</p>
      </Row>
      <CabinTable />
    </>
  );
};

export default Cabins;
