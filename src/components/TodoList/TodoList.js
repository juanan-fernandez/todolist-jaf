import NewTask from '../Tasks/NewTask/NewTask';
import Card from '../UI/Card/Card';

const TodoList = () => {
	return (
		<>
			<Card>
				<NewTask />
			</Card>
			<Card>
				<p>Aquí va mi lista de tareas</p>
			</Card>
		</>
	);
};

export default TodoList;
