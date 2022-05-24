import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({ tasksList }) => {
	return (
		<ul className={styles.list}>
			{tasksList &&
				tasksList.map((task, index) => {
					return (
						<li key={task.id}>
							<Task
								id={task.id}
								task={task.task}
								limitDate={task.limitDate}
								endDate={task.endDate}
							/>
						</li>
					);
				})}
		</ul>
	);
};

export default TaskList;
