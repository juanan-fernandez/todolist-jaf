import styles from './ErrorMsg.module.css';

const ErrorMsg = ({ children }) => {
	return <p className={styles.errmessage}>{children}</p>;
};

export default ErrorMsg;
