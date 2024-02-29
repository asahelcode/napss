import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home/index'
import RootLayout from '@/layout/RootLayout'
import RepresentativePage from '@/pages/Representative'
import ExecutiveDetail from '@/pages/ExecutivesDetail'

const router = createBrowserRouter([
	{
		path: '',
		Component: RootLayout,
		children: [
			{
				path: '/',
				Component: HomePage
			},
			{
				path: '/representatives',
				Component: RepresentativePage
			},
			{
				path: '/executives/detail',
				Component: ExecutiveDetail
			}
		]
	}
])

export default router