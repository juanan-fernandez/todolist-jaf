import useHttp from '../../../hooks/use-http';
import TaskForm from './TaskForm';

const NewTask = ({ onAddTask }) => {
	const config = {
		url: 'https://todolist-jaf-default-rtdb.europe-west1.firebasedatabase.app/tasks.json/',
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: null,
	};

	const { terror, loading, sendRequest } = useHttp();

	const onSaveTask = taskFormData => {
		const createTask = taskData => {
			onAddTask({ id: taskData.name, ...taskFormData });
		};
		sendRequest({ ...config, body: taskFormData }, createTask);
	};

	return (
		<>
			<TaskForm onSaveTask={onSaveTask} />
		</>
	);
};

export default NewTask;
