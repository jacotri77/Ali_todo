import io from 'socket.io-client'
import store from '../store'
const socket = io.connect('http://localhost:3001')

export function addMessage(message) {
    socket.emit('addMessage', message)
}

socket.on('newMessage', function(message){
    store.dispatch({
        type: 'ADD_MESSAGE',
        message
    })
})

export function addTodo (text) {

	 store.dispatch( {

		type: 'ADD_TODO',

    	text
	})
}

export function removeTodo (text) {

	store.dispatch( {

		type: 'REMOVE_TODO',

		text
	})
}