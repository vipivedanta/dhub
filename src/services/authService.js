import api from '../config/api';
import signupError from '../../public/json/signupError.json'
import signupSuccess from '../../public/json/signupSuccess.json';
import loginError from '../../public/json/loginError.json'
import loginSuccess from '../../public/json/loginSuccess.json';
export const signUp = ( user ) => {
	return new Promise( (resolve,reject ) => {
		setTimeout(() => resolve(signupSuccess), 2000);
	});
	//console.log( prepareUserForSignUp( user ) );
}
const prepareUserForSignUp = ( user ) => Object.assign(user, {
	userStatus : 'NOT_SIGNED_UP_YET',
	appSource: 'web',
	deviceId: 'ipad',
	latitude: 0,
	longitude: 0
});
const login = ( user ) => {
	return new Promise( (resolve,reject ) => {
		setTimeout(() => resolve(loginSuccess), 2000);
	});
	//console.log( prepareUserForSignUp( user ) );
}