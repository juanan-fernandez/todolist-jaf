import { useCallback, useState } from 'react';

const useHttp = (configRequest, transformData) => {
	const [terror, setTerror] = useState('');
	const [loading, setLoading] = useState(true);

	const sendRequest = useCallback(async () => {
		try {
			const response = await fetch(configRequest.url, {
				method: configRequest.method ? configRequest.method : 'GET',
				body: configRequest.body ? JSON.stringify(configRequest.body) : null,
				headers: configRequest.headers ? configRequest.headers : {},
			});

			if (!response.ok) {
				throw new Error(
					'ERROR: de comunicación con la BD. No se ha podido recuperar la lista de tareas.'
				);
			}

			if (1) {
				throw new Error(
					'ERROR: de comunicación con la BD. No se ha podido recuperar la lista de tareas.'
				);
			}
			const tasksRetrieved = [];
			const data = await response.json();
			transformData(data);

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
		} catch (err) {
			setTerror(err.message | 'Algo no ha salido bien :-(');
		} finally {
			setLoading(false);
		}
	}, [configRequest, transformData]);

	return { terror, loading, sendRequest };
};

export default useHttp;
