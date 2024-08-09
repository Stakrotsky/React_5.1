import { useState, useEffect } from 'react';
import styles from './app.module.css';
import { fetchTasks } from './utils';

export const App = () => {
	const [tasks, setTasks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetchTasks()
			.then((loadedTasks) => setTasks(loadedTasks))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.app}>
			<h3>Список дел:</h3>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				<ul className={styles['list-block']}>
					{tasks.map((task) => (
						<li key={task.id}>{task.title}</li>
					))}
				</ul>
			)}
		</div>
	);
};
