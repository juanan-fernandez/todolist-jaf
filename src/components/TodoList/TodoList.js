import { useState, useEffect } from 'react';

//custom hooks
import useHttp from '../../hooks/use-http';

//componentes
import NewTask from '../Tasks/NewTask/NewTask';
import TaskList from '../Tasks/TaskList/TaskList';
import Card from '../UI/Card/Card';
import Spinner from '../UI/Spinner/Spinner';
import ErrorMsg from '../UI/ErrorMsg/ErrorMsg';

const TodoList = () => {
	const urlFbase =
		'https://todolist-jaf-default-rtdb.europe-west1.firebasedatabase.app/tasks.json/';
	const [tasksList, setTasksList] = useState([]);
	//const [addingTask, setAddingTask] = useState(null);
	//const [errorAdding, savedTask] = useTask(addingTask);

	const transformData = fetchedData => {
		const fetchedTasks = [];
		for (const key in fetchedData) {
			fetchedTasks.push({
				id: key,
				task: fetchedData[key].task,
				limitDate: fetchedData[key].limitDate,
				createdDate: fetchedData[key].createdDate,
				endDate: fetchedData[key].endDate,
				done: fetchedData[key].done,
			});
		}
		setTasksList(fetchedTasks);
	};

	const {
		terror,
		loading,
		sendRequest: fetchTasks,
	} = useHttp({ url: urlFbase }, transformData);

	useEffect(() => {
		fetchTasks();
	}, []);

	const addTaskHandler = newTask => {
		// setAddingTask(newTask);
		// if (savedTask) setTasksList(prevList => [...prevList, savedTask]);
	};

	console.log(terror);

	return (
		<>
			<Card>
				<NewTask onAddTask={addTaskHandler} />
			</Card>
			{loading && <Spinner />}
			{terror ? (
				<ErrorMsg>{terror}</ErrorMsg>
			) : (
				<Card>
					{tasksList ? (
						<TaskList tasksList={tasksList} />
					) : (
						<p>No hay tareas todavía. Añade alguna!</p>
					)}
				</Card>
			)}
		</>
	);
};

export default TodoList;
