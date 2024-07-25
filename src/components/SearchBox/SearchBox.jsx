import css from './SearchBox.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

const SearchBox = () => {
  const initialFilterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(changeFilter(value))
  };

  return (
    <div className={css.searchBoxContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={initialFilterValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;