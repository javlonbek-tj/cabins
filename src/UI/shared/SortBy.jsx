import { useSearchParams } from 'react-router';
import { Select } from './Select';

export function SortBy({ options, filterField }) {
  const [params, setParams] = useSearchParams();
  const value = params.get(filterField) || '';

  function handleChange(val) {
    const nextParams = new URLSearchParams(params);
    nextParams.set(filterField, val);
    setParams(nextParams);
  }

  function handleClear() {
    const nextParams = new URLSearchParams(params);
    nextParams.delete(filterField);
    setParams(nextParams);
  }

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      onClear={handleClear}
      placeholder='Sort by...'
    />
  );
}
