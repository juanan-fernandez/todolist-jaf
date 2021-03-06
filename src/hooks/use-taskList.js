import { useCallback, useEffect, useState } from 'react';

const useTaskList = () => {
	const [tasksFetched, setTasksFetched] = useState(null);
	const [terror, setTerror] = useState('');
	const [loading, setLoading] = useState(true);

	const getTaskList = useCallback(async () => {
		const urlFbase =
			'https://todolist-jaf-default-rtdb.europe-west1.firebasedatabase.app/tasks.json/';
		try {
			const response = await fetch(urlFbase, {
				method: 'GET',
			});

			if (!response.ok) {
				throw new Error(
					'ERROR: de comunicación con la BD. No se ha podido recuperar la lista de tareas.'
				);
			}
			const tasksRetrieved = [];
			const data = await response.json();
			for (const key in data) {
				tasksRetrieved.push({
					id: key,
					task: data[key].task,
					limitDate: data[key].limitDate,
					createdDate: data[key].createdDate,
					endDate: data[key].endDate,
					done: data[key].done,
				});
			}
			setTasksFetched(tasksRetrieved);
		} catch (err) {
			setTerror(err.message | 'Algo no ha salido bien :-(');
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getTaskList();
	}, [getTaskList]);

	return { terror, loading, tasksFetched };
};

export default useTaskList;
