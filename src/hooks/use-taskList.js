import { useCallback, useEffect, useState } from 'react';

const useTaskList = () => {
	const [taskList, setTaskList] = useState(null);
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

			const data = await response.json();
			console.log(data);
			setTaskList(data);
		} catch (err) {
			setLoading(false);
			setTerror(err.message | 'Algo no ha salido bien :-(');
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getTaskList();
	}, [getTaskList]);

	return [terror, loading, taskList];
};

export default useTaskList;
