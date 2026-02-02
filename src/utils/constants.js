// BOOKING FILTER AND SORT OPTIONS
export const bookingFilterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Checked out', value: 'checked-out' },
  { label: 'Checked in', value: 'checked-in' },
  { label: 'Unconfirmed', value: 'unconfirmed' },
];

export const bookingSortOptions = [
  { value: 'startDate-desc', label: 'Sort by date (recent first)' },
  { value: 'startDate-asc', label: 'Sort by date (earlier first)' },
  { value: 'totalPrice-desc', label: 'Sort by amount (high first)' },
  { value: 'totalPrice-asc', label: 'Sort by amount (low first)' },
];

//CABIN FILTER AND SORT OPTIONS
export const cabinFilterOptions = [
  { label: 'All', value: 'all' },
  { label: 'No discount', value: 'no-discount' },
  { label: 'With discount', value: 'with-discount' },
];

export const cabinSortOptions = [
  { value: 'name-asc', label: 'Sort by name (A-Z)' },
  { value: 'name-desc', label: 'Sort by name (Z-A)' },
  { value: 'regularPrice-asc', label: 'Sort by price (low first)' },
  { value: 'regularPrice-desc', label: 'Sort by price (high first)' },
  { value: 'maxCapacity-asc', label: 'Sort by capacity (low first)' },
  { value: 'maxCapacity-desc', label: 'Sort by capacity (high first)' },
];

// PAGE SIZE
export const PAGE_SIZE = 10;

// STATUS TAG
export const statusToTagName = {
  unconfirmed: 'blue',
  'checked-in': 'green',
  'checked-out': 'silver',
};
