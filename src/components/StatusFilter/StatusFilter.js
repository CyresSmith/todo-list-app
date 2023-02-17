import { useSelector, useDispatch } from 'react-redux';

import { setStatusFilter } from 'redux/filterSlice';
import { statusFilters } from '../../redux/constants';
import Button from '../Button';
import css from './StatusFilter.module.css';

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.status);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleFilterChange(statusFilters.all)}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.active)}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleFilterChange(statusFilters.completed)}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
