import TaskForm from './TaskForm';
import useTask from '../../../hooks/use-task';
import { useState } from 'react';

const NewTask = () => {
	const [newTask, setNewTask] = useState(null);
	const [terror, task] = useTask(newTask);
	const onSaveTask = taskFormData => {
		setNewTask(taskFormData);
	};

	return (
		<>
			<TaskForm onSaveTask={onSaveTask} />
		</>
	);
};

export default NewTask;
