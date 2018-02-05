const visibility = (state = {
	commitVisibility: true
}, action) => {
	switch (action.type) {
		case 'TOGGLE_VISIBILITY':
		 return {
		 	commitVisibility: action.commitVisibility
		 }
		default :
		 return state
	}
}

export default visibility;