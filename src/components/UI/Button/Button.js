import styles from './Button.module.css';

const Button = ({ children, onButtonClick, classes }) => {
	let apply = styles['btn'];
	if (classes) {
		const classesArray = classes.split(' ');
		classesArray.forEach(element => {
			apply = `${apply} ${styles[element]}`;
		});
	}
	return (
		<button type='button' onClick={onButtonClick} className={apply}>
			{children}
		</button>
	);
};

export default Button;
