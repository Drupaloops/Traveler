import Test from '../components/test'
import Entrance from '../containers/entrance'
import Forum from '../components/forum'
const RootRoute = {
	path: '/',
	indexRoute: { component: Entrance },
	childRoutes: [
		{ path: 'entrance', component: Entrance },
		{ path: 'test', component: Test },
		{ path: 'forum', component: Forum }
	]
}

export default RootRoute