import { useCallback, useState } from 'react';

const useHttp = transformData => {
	const [terror, setTerror] = useState('');
	const [loading, setLoading] = useState(true);

	const sendRequest = useCallback(async (configRequest, transformData) => {
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

			const data = await response.json();
			transformData(data);
		} catch (err) {
			setTerror(err.message || 'Algo no ha salido bien :-(');
		} finally {
			setLoading(false);
		}
	}, []);

	return { terror, loading, sendRequest };
};

export default useHttp;
