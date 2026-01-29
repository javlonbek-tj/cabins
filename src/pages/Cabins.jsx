import { AddCabin, CabinTable, useCabins } from '../features/cabins';
import { Heading, Row } from '../UI/shared';

export const Cabins = () => {
  const { cabins, error, isPending: isLoadingCabins } = useCabins();

  return (
    <>
      <Row>
        <Heading>All Cabins</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row direction='vertical'>
        <CabinTable
          cabins={cabins}
          isLoadingCabins={isLoadingCabins}
          error={error}
        />
        {!isLoadingCabins && <AddCabin />}
      </Row>
    </>
  );
};
