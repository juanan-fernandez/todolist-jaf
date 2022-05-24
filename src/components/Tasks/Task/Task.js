import Button from '../../UI/Button/Button';
import styles from './Task.module.css';

const Task = ({ id, task, endDate, done, limitDate }) => {
	return (
		<div>
			<div className={styles['task-container']}>
				{task}
				<div className={styles.actions}>
					<Button>Delete</Button>
					<Button>Edit</Button>
				</div>
			</div>
			<div className={styles['task-dates']}>
				<span>Fecha límite: {limitDate}</span>
				{done && <span>Fecha de fin: {endDate}</span>}
			</div>
		</div>
	);
};

export default Task;
