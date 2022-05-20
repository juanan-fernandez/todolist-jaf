import { useCallback, useEffect, useState } from 'react';

const useTask = taskData => {
	const [newTask, setNewTask] = useState(null);
	const [terror, setTerror] = useState('');

	const addTask = useCallback(async () => {
		const urlFbase =
			'https://todolist-jaf-default-rtdb.europe-west1.firebasedatabase.app/tasks.json/';
		try {
			const response = await fetch(urlFbase, {
				method: 'POST',
				body: JSON.stringify(taskData),
				headers: {
					'Content-Type': 'application/json',
					'Acces-Control-Allow-Origin': '*',
				},
			});

			if (!response.ok) {
				throw new Error(
					'ERROR: de comunicación con la BD. No se ha podido añadir la tarea.'
				);
			}

			const data = await response.json();
			const fbaseId = data.name;
			setNewTask({ id: fbaseId, ...taskData });
		} catch (err) {
			setTerror(err.message | 'Algo no ha salido bien :-(');
		}
	}, [taskData]);

	useEffect(() => {
		addTask();
	}, [addTask]);

	return [terror, newTask];
};

export default useTask;
