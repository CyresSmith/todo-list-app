import { useDispatch } from 'react-redux/es/exports';
import { MdClose } from 'react-icons/md';
import { deleteTask, toggleCompleted } from 'redux/taskSlice';
import css from './Task.module.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const hendleDelete = () => dispatch(deleteTask(task.id));
  const hendleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={hendleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={hendleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
