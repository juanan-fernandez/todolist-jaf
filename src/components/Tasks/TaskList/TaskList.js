import { useEffect, useState } from 'react';
import useTaskList from '../../../hooks/use-taskList';
import Spinner from '../../UI/Spinner/Spinner';

const TaskList = () => {
	const [tasks, setTasks] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [errMsg, setErrMsg] = useState('');
	const { terror, data, loading } = useTaskList();

	useEffect(() => {
		setTasks(data);
	}, [data]);

	useEffect(() => {
		setErrMsg(terror);
	}, [terror]);

	useEffect(() => {
		setIsLoading(loading);
	}, [loading]);

	return (
		<div>
			{errMsg && <p>{errMsg}</p>}
			{isLoading && <Spinner />}
			<ul>
				{tasks &&
					tasks.map((task, index) => {
						<li key={index}>{task.name}</li>;
					})}
			</ul>
		</div>
	);
};

export default TaskList;
