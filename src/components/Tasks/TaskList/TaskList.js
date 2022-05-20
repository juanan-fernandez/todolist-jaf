import styles from './TaskList.module.css';

const TaskList = ({ tasksList }) => {
	return (
		<ul className={styles.list}>
			{tasksList &&
				tasksList.map((task, index) => {
					return (
						<li key={task.id}>
							{task.id}
							{task.task}
						</li>
					);
				})}
		</ul>
	);
};

export default TaskList;
