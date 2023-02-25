import { useSelector } from 'react-redux';
import { selectTasksCount } from 'redux/selectors';
import css from './TaskCounter.module.css';

const TaskCounter = () => {
  const { active, completed } = useSelector(selectTasksCount);

  return (
    <div>
      <p className={css.text}>active: {active}</p>
      <p className={css.text}>completed: {completed}</p>
    </div>
  );
};

export default TaskCounter;
