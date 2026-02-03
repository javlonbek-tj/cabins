import {
  AddCabin,
  CabinTable,
  CabinTableOperations,
  useCabins,
} from '../features/cabins';
import { Heading, Row } from '../UI/shared';

export const Cabins = () => {
  const { cabins, error, isPending: isLoadingCabins } = useCabins();

  return (
    <>
      <Row>
        <Heading>All Cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row $direction='vertical'>
        <CabinTable
          cabins={cabins}
          isLoadingCabins={isLoadingCabins}
          error={error}
        />
        {!isLoadingCabins && !error && <AddCabin />}
      </Row>
    </>
  );
};
