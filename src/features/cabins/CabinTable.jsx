import React from 'react';
import styled from 'styled-components';
import CabinRow from './CabinRow';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-0);
  overflow: hidden;
`;

const TableHead = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  color: var(--color-grey-600);
  text-transform: uppercase;
  font-weight: 600;
`;

const CabinTable = () => {
  const cabins = [
    {
      id: 1,
      name: '001',
      maxCapacity: 2,
      regularPrice: 250,
      discount: 50,
      description: 'Amazing place to stay with family',
      image:
        'https://mzxarerriheniciasbrv.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg',
    },
    {
      id: 2,
      name: '002',
      maxCapacity: 3,
      regularPrice: 300,
      discount: 60,
      description: 'Cozy cabin surrounded by nature',
      image:
        'https://mzxarerriheniciasbrv.supabase.co/storage/v1/object/public/cabin-images/cabin-002.jpg',
    },
    {
      id: 3,
      name: '003',
      maxCapacity: 4,
      regularPrice: 350,
      discount: 75,
      description: 'Spacious cabin perfect for groups',
      image:
        'https://mzxarerriheniciasbrv.supabase.co/storage/v1/object/public/cabin-images/cabin-003.jpg',
    },
    {
      id: 4,
      name: '004',
      maxCapacity: 6,
      regularPrice: 400,
      discount: 100,
      description: 'Luxury cabin with stunning views',
      image:
        'https://mzxarerriheniciasbrv.supabase.co/storage/v1/object/public/cabin-images/cabin-004.jpg',
    },
  ];
  return (
    <Table role="table">
      <TableHead role="header">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHead>

      {cabins.map((cabin) => (
        <CabinRow key={cabin.id} cabin={cabin} />
      ))}
    </Table>
  );
};

export default CabinTable;
