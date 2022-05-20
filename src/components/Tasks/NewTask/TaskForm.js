import { useState } from 'react';
import styles from './TaskForm.module.css';

const TaskForm = ({ onSaveTask }) => {
	const initFormData = () => {
		return {
			task: '',
			createdDate: new Date().toISOString().slice(0, 10),
			endDate: '',
			limitDate: new Date().toISOString().slice(0, 10),
			done: false,
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

	return (
		<form onSubmit={onSubmitHandler} className={styles['task-form']}>
			<div className={styles.inputs}>
				<label htmlFor='task'>Tarea</label>
				<input
					name='task'
					type='text'
					onChange={onChangeHandler}
					value={formData.task}
				/>
			</div>
			<div className={styles.inputs}>
				<label htmlFor='limitDate'>Fecha aprox. de fin</label>
				<input
					type='date'
					name='limitDate'
					onChange={onChangeHandler}
					value={formData.limitDate}
				/>
			</div>
			<div className={styles.actions}>
				<button type='submit'>Add</button>
			</div>
		</form>
	);
};

export default TaskForm;
