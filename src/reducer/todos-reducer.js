const todos = (state = [], action) => {

	const _generate_UUID = () => {
		function s4(){
			return ((1 + Math.random()*0x10000)|0).toString(16).substring(1);
		}
		return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
	}

	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					id: _generate_UUID(),
					title: action.title,
					description: action.description === undefined ? '' : action.description,
					status: 'undone',
				}
			];
		case 'DELETE_TODO':
			return state.map(todo => ( todo.id === action.id ? {...todo, status: 'deleted'} : todo ));
		case 'ACCOMPLISH_TODO':
			return state.map(todo => ( todo.id === action.id ? {...todo, status: 'completed'} : todo ));
		case 'MODIFY_DESC':
			return state.map(todo => ( todo.id === action.id ? {...todo, description: action.description} : todo));
		default :
			return state;
	}
}


export default todos;