const initialState = {
    messages: []
}

// export default function messageReducer(state=initialState, action) {
//     switch (action.type) {
//         case 'ADD_MESSAGE':
//             return {...state, messages: [...state.messages, action.message]}
//         default:
//             return state
//     }
// }

export default function todoReducer(state=initialState, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return {...state, toDos: [...state.toDos, action.toDos]}
		default:
			return state
	}
}
