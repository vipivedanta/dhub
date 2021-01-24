const baseUrl = 'https://web.dhub.com/api/web/'
const api = { urls : { 
	signup : { url : baseUrl + 'auth/user/signup', type : 'POST',
	login : { url : baseUrl + 'auth/user/login', type : 'POST' } 
} }
export default api