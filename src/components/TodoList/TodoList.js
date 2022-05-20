import NewTask from '../Tasks/NewTask/NewTask';
import TaskList from '../Tasks/TaskList/TaskList';
import Card from '../UI/Card/Card';

const TodoList = () => {
	return (
		<>
			<Card>
				<NewTask />
			</Card>
			<Card>
				<TaskList />
			</Card>
		</>
	);
};

export default TodoList;
