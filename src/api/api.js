export const fetchTasks = () => {
	return fetch('https://jsonplaceholder.typicode.com/todos')
		.then((response) => response.json())
		.catch((error) => {
			console.error('Ошибка при получении задач с сервера:', error);
			return [];
		});
};
