import React from 'react';
import Row from '../UI/shared/Row';
import Heading from '../UI/shared/Heading';
import CabinTable from '../features/cabins/CabinTable';
import AddCabin from '../features/cabins/AddCabin';

const Cabins = () => {
  return (
    <>
      <Row>
        <Heading>All Cabins</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row direction="vertical">
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
};

export default Cabins;
