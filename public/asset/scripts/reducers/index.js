import { combineReducers } from 'redux';
import { SIGNIN, SIGNUP, LOGOUT } from '../actions'


function contacts(state = [], action) {
	switch (action.type) {
		case SIGNIN:
			console.log("reduce SIGNIN")
			return [
				...state,
				{
					mobileNo: action.mobileNo,
					password: action.password
				}
			];

		case SIGNUP:
			console.log("reduce SIGNUP")
			return [
				...state.slice(0, action.index),
				...state.slice(action.index + 1)
			];

		case LOGOUT:
			return [
				...state,
				{
					mobileNo: action.mobileNo
				}
			];

		default:
			return state;
	}
}

const rootReducer = combineReducers({
	contacts
});

export default rootReducer;