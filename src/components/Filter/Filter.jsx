import { Input } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Input
      type="text"
      value={filter}
      onChange={event => dispatch(setFilter(event.target.value.trim()))}
    />
  );
};
