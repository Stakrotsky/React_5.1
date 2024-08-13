import { useState, useEffect } from 'react';
import styles from './app.module.css';
import { api } from './api';

export const App = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		api()
			.then((loadedTasks) => setTasks(loadedTasks))
			.finally(() => setIsLoading(false));
	}, []);

	if (isLoading) {
		return <div className={styles.loader}></div>;
	}

	return (
		<div className={styles.app}>
			<h3>Список дел:</h3>

			<ul className={styles['list-block']}>
				{tasks.map((task) => (
					<li key={task.id}>{task.title}</li>
				))}
			</ul>
		</div>
	);
};
