// actions
export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';
export const SIGNUP = 'SIGNUP';
export const LOGOUT = 'LOGOUT';
// actions creators
export function signin(mobileNo, password) {
	return {
		type: SIGNIN,
		mobileNo,
		password
	};
}

export function signinSuc(mobileNo, password) {
	return {
		type: SIGNIN_SUCCESS,
		mobileNo,
		password
	};
}

export function signinFail(mobileNo, password) {
	return {
		type: SIGNIN_FAIL,
		mobileNo,
		password
	};
}

export function signup(index) {
	return {
		type: SIGNUP,
		index
	};
}

export function logout(mobileNo) {
	return {
		type: LOGOUT,
		mobileNo
	};
}