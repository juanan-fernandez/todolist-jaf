import { useState } from 'react';

const TaskForm = ({ onSaveTask }) => {
	const initFormData = () => {
		return {
			task: '',
			createdDate: new Date().toISOString().slice(0, 10),
			endDate: null,
			limitDate: new Date().toISOString().slice(0, 10),
		};
	};

	const [formData, setFormData] = useState(initFormData());

	const onSubmitHandler = ev => {
		ev.preventDefault();
		onSaveTask(formData);
		setFormData(initFormData());
	};

	const onChangeHandler = ev => {
		setFormData(prev => ({ ...prev, [ev.target.name]: ev.target.value }));
	};

	<form onSubmit={onSubmitHandler}>
		<label for='task'>Tarea</label>
		<input name='task' type='text' onChange={onChangeHandler} value={formData.task} />
		<label for='limitDate'>Fecha aprox. de finalización</label>
		<input
			type='date'
			name='limitDate'
			onChange={onChangeHandler}
			value={formData.limitDate}
		/>
	</form>;
};

export default TaskForm;
