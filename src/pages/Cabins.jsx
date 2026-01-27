import CabinTable from '../features/cabins/CabinTable';
import AddCabin from '../features/cabins/AddCabin';
import useCabins from '../features/cabins/useCabins';
import { Heading, Row } from '../UI/shared';

const Cabins = () => {
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
export default Cabins;
