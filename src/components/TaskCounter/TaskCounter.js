import { useSelector } from 'react-redux';
import css from './TaskCounter.module.css';

const TaskCounter = () => {
  const tasks = useSelector(state => state.tasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    {
      active: 0,
      completed: 0,
    }
  );

  return (
    <div>
      <p className={css.text}>active: {count.active}</p>
      <p className={css.text}>completed: {count.completed}</p>
    </div>
  );
};

export default TaskCounter;