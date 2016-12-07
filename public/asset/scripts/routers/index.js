import Test from '../components/test';
import Login from '../components/login';
import Forum from '../components/forum';
const RootRoute = {
	path: '/',
	indexRoute: { component: Login },
	childRoutes: [
		{ path: 'test', component: Test },
		{ path: 'forum', component: Forum }
	]
}


export default RootRoute