import TaskForm from './TaskForm';

const NewTask = ({ onAddTask }) => {
	const onSaveTask = taskFormData => {
		onAddTask(taskFormData);
	};

	return (
		<>
			<TaskForm onSaveTask={onSaveTask} />
		</>
	);
};

export default NewTask;
